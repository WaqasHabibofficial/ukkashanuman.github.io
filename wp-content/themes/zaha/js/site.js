

var imageAssets=new Array();


(function($) { // closure and $ portability

  var $win = $(window);
  
  var panelBoundsInset = 17;
  var shadowSize = 7;
  var homeWindowResize;
  
  var ie6 = $.browser.msie && $.browser.version < 7.0;


  var waketo;
  
  var thumbRows = 4;
  var alive = true;
  
  var bitlyURL = "https://api.bit.ly/shorten?version=2.0.1&login=zhaarchitects&apiKey=R_1c5c456dee124981f59fe7609784fb01";
  
  
  $.isTouch = function() {
    return $('html').hasClass("touch");
  };
  
  $.fn.imgStubInit = function() {
    return this.each( function() {
      var $el = $(this);
     
      
      $el.find(".img-stub").each( function() {
      
        var md = $(this).metadata();
    
        $(this).closest("li")
          .css({ width: md.width, height: md.height });

	// W3TC Azure CDN regexp doesn't parse arbitrary metadata in inline css, so the URL is passed here in javascript as a temporary measure.
	if (imageAssets[md.shorthash]) {
		md.src = imageAssets[md.shorthash];
	}
      
        $img = $.tmpl('<img src="${src}" width="${width}" height="${height}" />', md);
        
        $(this).replaceWith($img);
      
      });
      
      $el.imagesLoaded(function() {
        $(this).closest("li.tile,li.result").css({ backgroundImage: "none" });
      }, true);


    });
  };
      
  $(document).ready( function() {
    
    
    var $ll = $('#limit-from');
    var $ls = $('#limit-size');


    if (window.Froogaloop) { 
      Froogaloop.init(); 
    }
        
   
    
    // fix a drag and drop text selection issue in Chrome
    document.onselectstart = function () { return false; };

    // preload some images
  
    var pli = [
      "button-left-hover.png", 
      "button-right-hover.png",
      "button-up-hover.png",
      "button-down-hover.png",
      "share.png",
      "download.png",
      "fullscreen.png",
      "twitter.png",
      "facebook.png",
      "linkedin.png",
      "delicious.png",
      "google.png",
      "loading.gif",
      "loading-4.gif",
      "button-organise-large.png",
      "button-open-large.png"
    ];
  
    $.each(pli, function(index, src) {
      var i = new Image();
      $(i).attr("src", wp_template_url + "/images/" + src);
    });
  
    var isotopeOptions = {
      itemSelector : '.tile',
      layoutMode : 'masonry',
      animationOptions: { duration: 500 },
      sortBy: "name",
      getSortData : {
        name : function ( $elem ) {
          return $elem.metadata().sort || '';
        }
      }
  
    };
    
    var modalizeOptions = { 
      css: { backgroundColor: "#FFFFFF", opacity: 0.7 } 
    };

    $('input[type=text]').addClass("text");
    $('input[type=password]').addClass("password");
    $('input[type=checkbox]').addClass("checkbox");
    $('input[type=radio]').addClass("radio");
    
    
    $.fd = function(duration) {
      if ($.browser.msie) {
        return 0;
      }
      
      return duration;
    };
    
    $.scrd = function(duration) {
      if ($.browser.msie && $.browser.version <= 7) {
        return 0;
      }
      
      return duration;
    }
    
    
    /*  -------- all pages -------- */
    
    /*
     var rc = $.cookie("archive_count");
     
     if (rc) {
       $('#search-results-count').html("&nbsp;" + rc + " results");
     }
    */
     


     
    // setup starring
    
    var cStarred = $.parseJSON($.cookie("starred")) || [];
    
    var $starredList = $('#your-zha-starred').find("ul");
    var $sll = $('#page-share-links').find(".loading");

    // NEW! Hide the starred panel and dock altogether if there are no starred items
    
    
    $('#bt-star').click( function() {
      if ($(this).hasClass("starred")) {
        unstar($(this).metadata().id);
        $(this).attr("title", "Star this item in YourZHA");
      } else {
        addStarred($(this).metadata().id);
        $(this).attr("title", "This item is now starred in YourZHA. Click to unstar this item");
      }
      
      return false;
    });

    $('#your-zha-starred li')
      .live({
        mouseenter: function() {
          $(this).find(".buttons").show();
        },
        mouseleave: function() {
          $(this).find(".buttons").hide();
        },
        click: function(event) {

          if (!$(event.target).closest(".buttons").length) {
            var href = $(this).find("a:first").attr("href");
            
            if (href) {
              location.href = href;
            }

            return false;
          } 
        }
      })
      .find(".buttons").hide();
       
      
    function showShareLoading(after) {
      if (window.sto) {
        clearTimeout(window.sto);
        window.sto = null;
      }

      window.sto = setTimeout( function() { $sll.fadeIn(); }, after || 200 );
    }
    
    function hideShareLoading() {
      if (window.sto) {
        clearTimeout(window.sto);
        window.sto = null;
      }
      
      $sll.fadeOut();
    }
    
    
    function renderStarred(data) {

      if (!$('#your-zha-panel').is(":visible")) {
        $('#your-zha-panel-dock').show();
        
        
        $('#your-zha-panel').show();
        
        if (!$('body.home').length) {
          $('#your-zha-panel').dragpanel('dock', { instant: true })
        } else {
          $('#your-zha-panel').css({ left: 400, top: 100 }); 
        }
        
      }
      

      if (data) {

        $.each(data, function(index, item) {
          var $li = $('#tmpl-starred-item').tmpl( item );
          $starredList.append($li);
          $li.find(".buttons").hide();
        });
      } 

    }
    
    function saveStarred() {
      $.cookie("starred", $.toJSON(cStarred), { path: "/" });
    }
       
    function addStarred(id) {
      if (id && id != "") {
        if (!$starredList.find("li#starred-item-" + id).length) { 
          
          showShareLoading();
          $.getJSON("/services/page-info/" + id, addStarredComplete);
          
        }
      }
    }
    
    function addStarredComplete(data) {
      
      if (data) {
        
        hideShareLoading();
        renderStarred(data);
        
        $('#bt-star').addClass("starred");
        
        $.each(data, function(index, item) {
          cStarred[cStarred.length] = item.id;
        });
        
        saveStarred();

      }

    }
    
    function updateStarred(starred) {
      
      if (starred && starred.length) {
        $.getJSON("/services/page-info/" + starred, updateStarredComplete);
      } else {
        $('#your-zha-panel').hide();
        $('#your-zha-panel-dock').hide();
      }
      
    }
    
    function updateStarredComplete(data) {
      renderStarred(data);
    }
    
    function unstar(id) {
      if (id && id != "") {
        // update the starred array
        cStarred = $.richArray.without(cStarred, id);
        
        // update the cookie
        saveStarred();
        
        // fade the item out and remove
        var $item = $('#starred-item-' + id);

        if (cStarred.length) { 
          $item.fadeOut("fast", function() { $item.remove(); });  
        } else {
          $item.remove();  
          $('#your-zha-panel').hide()
          $('#your-zha-panel-dock').hide()
        }
        
        if ($('#bt-star').hasClass("bt-star-" + id)) {
          $('#bt-star').removeClass("starred");
        }
      
      }
    }
    
    updateStarred($.parseJSON($.cookie("starred")));

    

    $('#your-zha-starred button.close-white').live("click", function(event) {
      var id = $(this).metadata().id;
      unstar(id);
      return false;
    });
    
    
    
    $('.windowopen').windowopen();
    
    $('#term').placeholder();
    
    if ($('#term').val() != '') {
      $('#term').focus();
    }

    // remove spinner images from thumbnail lists once the first image loads in
    
    // remove the loading background

    $('ul.thumbs .slideshow li:first-child img,ul.thumbs>li>a>img:first-child').each( function() {
      $(this).imagesLoaded(function() {
        $(this).closest("li.tile,li.result").css({ backgroundImage: "none" });
      }, true)
    });
    
    
    $.fn.mdtarget = function() {
      var $target = $();
          
      try {
        $target = $($(this).metadata().target);
      } catch (err) {
        
      }
      
      return $target;
    };
    

    $.fn.prettyInputUpdate = function() {
      
      return this.each( function() {
        
        var el = $(this);
          
        var wrap = el.closest("label,li.pretty"); 

        if (el.attr("type") == "radio") {
          // remove the checked class from any unchecked related radio buttons
          $("input[name=" + el.attr("name") + "]").closest("label,li.pretty").removeClass("checked");
        }

        if (el.attr("checked")) {
          wrap.addClass("checked");
        } else {
          wrap.removeClass("checked");
        }
      
      });
      
    };
    
    $.fn.showItems = function() {
      
      return this.each( function() {
        
        if ($('body.archive').length) {

      
          var el = $(this);

          var label = el.closest("label"); 

          if (label.hasClass("tab")) {
            // remove the checked class from related checkboxes
        
            var $related = $("input[name=" + el.attr("name") + "]").not(el);
        
            $related.removeAttr("checked").closest("label").removeClass("checked");
          
            // get the target element
            $related.each( function() {
              // hide the panel, and disable all sub-inputs (so they are ignored for searches and filtering)
              $rtg = $(this).mdtarget();
              $rtg.hide().find("input").attr("disabled", "disabled");
            });

          } 

          if (label.hasClass("tab") || label.hasClass("filter-type")) {
            $tg = el.mdtarget();
        
            if (el.attr("checked")) {
              $tg.stop(true).slideDown("fast");
              $tg.find("input").removeAttr("disabled");
            } else {
              $tg.stop(true).slideUp("fast");
              $tg.find("input").attr("disabled", "disabled");
            }

          }
      
        }
              
      });


    };

    
    // vimeo routines
    
    $.fn.stopVideo = function() {
      return this.each( function() {
        
        var el = this;
        var $el = $(this);
        clearTimeout($el.data("videoplayto1"));
        clearTimeout($el.data("videoplayto2"));
        clearTimeout($el.data("videoplayto3"));

        if (el.api) {
          el.api("api_pause"); 
        }
      });
    };
    
    $.fn.playVideo = function() {
      return this.each( function() {
        
        var el = this;
        var $el = $(this);
        
        var play = function() {
        
          if (el.api) {
            el.api("api_play"); 
          }
        };
        


        $el.data("videoplayto1", setTimeout(play, 100));
        $el.data("videoplayto2", setTimeout(play, 500));
        $el.data("videoplayto3", setTimeout(play, 1500));
        
        $el.css("left", 0);
      });
      
    };
      
      
    // setup scrollpanes
    
    if (ie6) {
      $('.scroll:not(.ie6fix)').jScrollPane({ mouseWheelSpeed: 20, isScrollableH: false });
    } else {
      $('.scroll').jScrollPane({ mouseWheelSpeed: 20, isScrollableH: false });
    }
    
    
    
    if (!$('body.partial').length) {

      // setup draggable panels, with state saving

      var $draggables = $('.draggable');
    
      // setup dragpanels (see jquery.dragpanel.js);
      
      $draggables
        .dragpanel({ noReveals: $('body.home').length });
        
      $draggables.not("#control-panel")
        .bind("start.dragpanel", function() {
          $draggables.not("#control-panel").css({zIndex: 50 });
          $(this).css({ zIndex: 58 });
        })
        .bind("click", function() {
          $draggables.not("#control-panel").css({zIndex: 50 });
          $(this).css({ zIndex: 58 });
        });

      
      // setup archive (search) panel
    
      var searchCategoryInputClick = function() {

        if ($('body.search').length) {
        
        var input = this;
        var checked = false;
        
        if (!$(this).is("input")) {
          input = $(this).find("input").get(0);
          checked = !($(this).hasClass("checked")); // IE6 doesn't actually CHECK the underlying input until after this event has run. joy!
        } else {
          checked = input.checked;
        }
        
          $search
            .my("button.show-filters").hide().end()
            .my("label.category").removeClass("checked").find("input").removeAttr("checked").end().end()
            .my(".category-content")
              .hide() 
              .my("input").removeAttr("checked").closest("label").removeClass("checked");

              
          if (checked) {
            $(this)
              .closest("label").addClass("checked").find("input").attr("checked", "checked").end().end()
              .closest("li").find(".category-content").show().find(".filters").show();
          }
        
        
        }
        
        // reset the flags and starting position
        resetSearchType();
        
        
        
        // submit form
        $('#form-main').submit();
        
      };
      
      var searchInputClick = function() {

        var $label = $(this).closest("label");

        var checked = false;

        if (!$(this).is("input")) {
          input = $(this).find("input").get(0);
          checked = !($(this).hasClass("checked")); 
          
          input.checked = checked;
        } else {
          checked = this.checked;
        }

        
        if (checked) {

          $label.addClass("checked");

          if ($label.hasClass("filter-type")) {
            $label.closest(".filter-group").find(".items").show();
          }

        } else {

          $label.removeClass("checked");
          
          if ($label.hasClass("filter-type")) {
            $label.closest(".filter-group").find(".items").hide().find("label").removeClass("checked").find("input").removeAttr("checked");
            filterResults();
          }

        }

      };
      
      var $search = $('#search-panel');
    
      $search.my(".category-content").hide();
      $search.my(".category").filter(":checked").closest("li").find(".category-content").show();
    
      $search
        .my("label").addClass("pretty");
        

      // ie6 doesn't respond to input click events when the label is clicked so the event needs to be 
      // hooked up to the LABEL instead with special handling inside the event for that

      if (ie6) {
        $search.my(".category").click( searchCategoryInputClick );
        $search.my(".category-content").my("label.checkbox").click( searchInputClick );
      } else {
        $search.my(".category").my("input").click( searchCategoryInputClick );
        $search.my(".category-content").my("input.checkbox").click( searchInputClick );
      }
        

      
      
      // show the filters for any checked categories
      $search
        .my(".category").my("input").filter(":checked").closest("li").my(".category-content").show();

      $search
        .my(".filters").my("button.remove").click( function(event) {
        
          var $el = $(this);
        
          $el.closest(".filters")
            .hide()
            .my(".items").hide().end()
            .my("input").removeAttr("checked").closest("label").removeClass("checked");

          $el.closest("li.with-filter").my("button.show-filters").show();
          
          filterResults();
        
          event.stopPropagation();
        
          return false;
      });
      
      $search
        .my("button.show-filters").click( function(event) {
          $(this).hide();
          $(this).closest("li.with-filter").my(".filters").show();
        
          return false;
          event.stopPropagation();
        });

      var resetSearch = function() {
        $search
          .my(".category-content").my("input").removeAttr("checked").closest("label").removeClass("checked");

        $search
          .my(".filter-group").my(".items").hide();

        $search
          .my(".category").closest("li").find(".category-content").hide();
        
        $search
          .my(".category").my("input").removeAttr("checked").closest("label").removeClass("checked");
        
      };
      
      
      $('#term').keypress( function() {
        
        if (!window.searchClean) {
          resetSearch();
          resetSearchType();
        }
        
      });
      
      $('#bt-search-go').click( function() {
        resetSearch();
        resetSearchType();
      });
    
      
        
      var resetSearchType = function() {
        $('#search-action').val("type");
        $('#more-results').val("true");
        $ll.val(0);    
      };
    
    
    
      

      $.fn.setupThumbSlideshow = function() {
        return this.each( function() {
          
          var el = $(this);
        
          if (!el.data("carousel")) {

            el.imgStubInit();

            el.carousel({ playWaitForImages: true, transition: "crossfade", height: 124, width: 176, interval: $('body').hasClass("search") ? 6000 : 2000, intervalRandomDelta: $('body').hasClass("search") ? 3000 : 0, transitionOptions: { duration: 1000 } });
        
            if (el.metadata().noplay) { 
              el.data("noplay", true);
            } else { 
              el.carousel("play");
            }

            el.bind("imagesloaded.carousel", function(event) {
              $(this).closest("li.tile,li.result").css({ backgroundImage: "none" });
            });
          
            el.bind("beforechangenext.carousel", function(event, data) {
              // ensure the images have the correct height and width (fadeIn, fadeOut seem to mess with them, and they end up zero if the carousel is not visible!)
          
              var md = $(this).metadata();
          
              data.newItem.find("img").css( { height:  md.height || 124, width: md.width || 176 } );
            });
        
            el.bind("beforechange.carousel", function(event, data) {
              event.stopPropagation();
            });
          } 
        });
      };

      if (!$("body.home").length) { // we'll load the slideshows on the home page on-demand, since they are not initially all visible
        $("div.slideshow").setupThumbSlideshow();
      }
  
      $.fn.wakeSlideshow = function() {
        return this.each( function() {
      
          var $el = $(this);
        
          if (!$el.data("noplay")) { 
            $el.carousel('play');
          } 
        
          var $first = $el.find("li:first");
        
          if (!$first.hasClass("preload")) {
            $first.addClass("preload");
          
            // load the first image
            var src = $first.find("img").attr("src");
          
            if (src && src != "") {
              var img = new Image();
              img.src = src;
            }
          
          }
          
        });
      
      };
    
      window.wakeSlideshows = function() {
        $("div.slideshow").wakeSlideshow();
      };

      window.sleepSlideshows = function() {
        $("div.slideshow").carousel("pause", { stop: true });
      };
    
    
    
      $.sleeper({
        timeoutMin: 5,
        wake: function() {
          wakeSlideshows();
        },
        sleep: function() {
          sleepSlideshows();
        }
      });

    
      var showVideo = function(id) {
		
		console.log("showing video");
        var $video = $();
      
        try {
        
          $video = $('#' + id);
        
        } catch (err) { console.log(err); }

        if ($video.length) {
        
          if (!$video.hasClass("video-overlay")) {
            // embed this video in an overlay
            $vo = $('#tmpl-video-overlay').tmpl( { id: id, url: $video.metadata().url, title: $video.metadata().title } );
          
            var videoHide = function() {

              $video.find("iframe.vimeo").stopVideo();
              $video.unaffix().unmodalize().hide();

              window.location.hash = '';
            };
          
          
            $video.replaceWith( $vo );
            $video = $vo;

            $vo.find(".close").click( videoHide );
            $vo.bind("underlayclick.modalize", videoHide );

            Froogaloop.init($vo.find("iframe").get());

          }

          $video.modalize(modalizeOptions).affix({ win: "nw", offset: [225, 112] }).show();
        
          $video.find("iframe.vimeo").playVideo();
        
          return true;
        
        }
      
        return false;
      
      };
    
      // setup share panel
    
      
      $('#results-share-links .share,#share-links .share')
        .bind("aftershow.reveal", function(event, data) {

          var $panel = data.target;
          
          if (!$.isTouch()) {
            var $clipboard = $panel.find(".clipboard");

            if (!$clipboard.data("zc")) {
              $clipboard.data("zc", $clipboard.zeroclipboard());
            }
          }

        })
        .revealMenuClick( { el: $('#share-panel'), show: "fadeIn", showOptions: { duration: $.fd("fast") }, hide: "fadeOut", hideOptions: { duration: $.fd("fast") }, affix: { to: "se", from: "ne", offset: [ 5, 5 ] } } );
    
      // setup the bit.ly URL
    
      var rqurl = true_page_url;
      
      if (!rqurl) {
        rqurl = window.location.href;
      }
      
      $.getJSON(bitlyURL + "&longUrl=" + $.urlencode(rqurl) + "&callback=?", function(data) {
        $.each(data.results, function(i, item) {
          $('#share-panel').find("input.text").val(item.shortUrl);
          $('#share-panel').find("ul.social-media-links").html($('#tmpl-social-media-links').tmpl({ shareUrlEncode: item.shortUrl }));
        })
      });
          

      
      var windowResize = function() {
        $draggables.dragpanel('contain');
      };

      $(window).resize(windowResize);
      windowResize();
  
    } // body.partial
    


/*  -------- home page -------- */


    if ($('body.home').length) {

      // setup reveals on panels
      
      // about panel (video)

      $('#about-us-more').click( function() {
        $('#about-us-panel .panel-content').animate({ width: 576 }, { easing: "easeOutQuart", complete: function() {  $('#about-us-video').show(); } });
        $draggables.css({zIndex: 50 });
        $(this).closest(".draggable").css({ zIndex: 58 });

        return false;
      });

      $('#about-us-close').click( function() {
        $('#about-us-panel .panel-content').animate({ width: 196 }, { easing: "easeOutQuart", complete: function() {  $('#about-us-video').hide(); } });
      });


      // setup control panel
    
      $('#control-panel-hide-show').click( function() {
        var $el = $(this);
        var $others = $draggables.not($('#control-panel'));
      
        if (!$('#control-panel').hasClass("dragging")) {

          if ($el.hasClass("hidden")) {

            $('#control-panel').animate({ opacity: 1.0 });
            $others.css({ display: "none", visibility: "visible" }).fadeIn("fast");
            $el.removeClass("hidden");
            $el.html("Hide");
            $el.attr("title", "Hide panels");
          } else {
            $('#about-us-panel .panel-content').css({ width: 196 });
            $('#about-us-video').hide();
            $el.addClass("hidden");
            
            $others.css("visibility", "hidden");
            $('#control-panel').animate({ opacity: 0.2 });
            $el.html("Show");
            $el.attr("title", "Show panels");
          }
      
        }
      
      
      });

      $('#control-panel-organise').click( function() {
      
        if ($(this).hasClass("organise")) {
            
          $(this).removeClass("organise");
          $(this).html("Randomise");
          $(this).attr("title", "Randomise panels");
          
          $('.panel').not("#control-panel").each( function() {
        
            var $el = $(this);
            var def = $el.metadata().cssDefault;
        
        
            if (def) {
              var css = $.extend(true, {}, def);
        
              if (css.left < 0) {
                // assume we want the window width minus this value
                css.left = $win.width() - $el.outerWidth() + css.left;
              }
        
              $el.animate(css, { easing: "easeOutQuart", complete: function() { $el.dragpanel('save'); } });
            }

            $el.dragpanel('save');
        
          });
        } else {
          
          $(this).addClass("organise");
          $(this).html("Organise");
          $(this).attr("title", "Organise panels");

          var ww = $(window).width();
          var wh = $(window).height();

          $('.panel').not("#control-panel").each( function() {
        
            var $el = $(this);
            var ew = $el.innerWidth();
            var eh = $el.innerHeight();
            
            var x = Math.ceil( ( ww - ew ) * Math.random() );
            var y = Math.ceil( ( wh - eh ) * Math.random() );
            
            $el.animate({ left: x, top: y }, { easing: "easeOutQuart", complete: function() { $el.dragpanel('save'); } });
            
            $el.dragpanel('save');
        
          });
          

        } 


      
      });
         
      var $s4 = $('#slideshow-images');
      var $ssl = $('#slideshow-loader');
      var $fs4 = $('#slideshow-featured-projects');
      

        
      var s4x = Math.floor(6 * Math.random()); 
      var s4y = Math.floor(4 * Math.random()); 
      
      // setup a 4-way slideshow for the featured panel

      $fs4
        .bind("beforechange.slideshow4", function(event, data) {
          data.newItem.find(".slideshow").setupThumbSlideshow();
        })
        .slideshow4({x: s4x, y: s4y});
        
      // setup the main 4-way slideshow


      $s4
        .css({visibility: "hidden"})
        .bind("afterimageload.slideshow4", function(event, data) {
          if (data.img) {
            data.img.resizeto({ width: $(window).width(), height: $(window).height(), crop: true });
          }
        })
        .bind("afterleft.slideshow4", function(event, data) {
          $fs4.slideshow4("left");
        })
        .bind("afterright.slideshow4", function(event, data) {
          $fs4.slideshow4("right");
        })
        .bind("afterdown.slideshow4", function(event, data) {
          $fs4.slideshow4("down");
        })
        .bind("afterup.slideshow4", function(event, data) {
          $fs4.slideshow4("up");
        })
        .bind("afterimageload.slideshow4", function(event,data) {
          $(this).css({visibility: "visible"});
        })
        .slideshow4({ 
          loader: $('#slideshow-loader'),
          right: $('#slideshow-right'),
          left: $('#slideshow-left'),
          up: $('#slideshow-up'),
          down: $('#slideshow-down'),
          x: s4x,
          y: s4y
        });
      
      // setup random loading
      
      
      $s4.slideshow4('to', { x: s4x, y: s4y, instant: true });
      $fs4.slideshow4('to', { x: s4x, y: s4y, instant: true });
      

      


      // load first slideshow
      $fs4.find(".slideshow").eq(0).setupThumbSlideshow();
      
      
      // setup the slideshow images
      
      homeWindowResize = function() {
        
        var $rows = $s4.find("li.row");
        var $cols = $s4.find("li.col");
        var $images = $cols.find("img");
        
        
        var ww = $win.width();
        var wh = $win.height();

        // resizeto is a plug-in which performs smart cropping on images
        $images.resizeto({ width: ww, height: wh, crop: true });

        if ($("html.ie6").length) {
          $s4.find(".car").css({ height: wh }).find(">ul").css({ height: wh });
        }
      
        $cols.css({ width: ww, height: wh });
        $rows.css({ height: wh });

        $s4.slideshow4('update');
      };
      
      
      $(window).resize( homeWindowResize );

      
      homeWindowResize();
      
      $draggables.removeClass('docked').dragpanel('contain');


      
      
      

      

      
      
    }  // end home page
    
    
/* ------- search page ------- */
    
    if ($('body.search').length) {
      
      var $filters = $('#search-panel').find("input.filter");
      var $scfilters = $('#search-panel').find("input.sc-filter");

      var $filterGroups = $('#search-panel').find(".filter-group");

      $res = $('ul#results');
      $res.isotope(isotopeOptions);
      
      var updateSize = function(rows) {
        window.cols = Math.floor(($win.width() - 24) / 204);
        window.rows = Math.floor( ( $win.height() - 140 ) / 154 );

        window.count = $res.find("li.tile").not(".isotope-hidden").length;
        window.capacity = (window.cols * window.rows);
        window.overflow = window.count % window.cols;

        if (rows != null) {
          $ls.val( ( window.cols * rows ) + (window.cols - window.overflow));
          window.preserveSize = true;
        } else {
          $ls.val( ( window.cols * Math.max(6, window.rows - 2) ) + (window.cols - window.overflow)); 
        }
      }
      
      var fillResults = function(rows) {
        updateSize(rows);
        
        if (window.capacity > window.count) {
          $('#search-action').val("more");
          $('#form-main').submit();
        }
      };
      
      $(window).resize( function() {
        
        /*
        if (window.toFillResults) {
          clearTimeout(window.toFillResults);
        }
        
        window.toFillResults = setTimeout(fillResults, 500);
        */
        
      });
      
      
      var updateFilters = function() {
        $filters.each( function() {
          
          var $el = $(this);
          var fc = $el.metadata().fc;

          if (fc != "") {
            var $label = $(this).closest("label");
            
            if ($res.find(fc).length) {
              $label.show();
              $el.removeAttr("disabled");
            } else {
              $label.hide();
              $el.attr("disabled", "disabled");
            }
            
          }

        });
        
        $filterGroups.each( function() {
          if ($(this).find("input.filter").not(":disabled").length) {
            $(this).show();
          } else {
            $(this).hide();
          }
          
        });
        
      };

      
      updateFilters();

      
      var updateResults = function(data) {
        
      try {
        $('#projects-loading').hide();
        $('#loading-results').hide();
        $('#wrap-term').show();
        
        var $bucket = $(data);
        var $results = $(data).find(">li");
        
        var info = $bucket.metadata();
        window.resultsInfo = info;

        if (!$results.length) {
          $('#no-results').show();
          $('#no-more-results').hide();
          updateResultsCount(0);
          $res.css("height", 0);
          $res.isotope('remove', $res.find("li.tile"));
          

        } else {
        
          if (info.limit_from) {
            $ll.val(info.limit_from);
          }

          if (info.end) {
            $('#more-results').val("false");
            $('#bt-more-results').hide();
            $('#no-more-results').show();
          } else {
            $('#more-results').val("true");
            $('#bt-more-results').show();
            $('#no-more-results').hide();
          }
        
          
          updateResultsCount(info.count);
        
        
          // split the items into results that are present / notpresent in the current set
          var $removeItems = $([]);
          var $newItems = $([]);

          var $current = $res.find("li.tile");
        
        
          // find new elements to add
          $results.each(function() {
          
            var id = $(this).attr("id");
            var $el = $current.filter('#' + id);
          
            if (!$el.length) {
              $newItems = $newItems.add($(this));
            } 
          
          
          });
        
          if (info.action != "more") {
          
            // find elements to remove
            $current.each(function() {
          
              var id = $(this).attr("id");
              var $el = $results.filter('#' + id);
          
              if (!$el.length) {
                $removeItems = $removeItems.add($(this));
              }
          
            });

            $removeItems.find('div.slideshow').carousel('destroy');

            // remove the non-matching elements
            $res.isotope('remove', $removeItems);
          
          }


          $res.isotope('insert', $newItems, function() { 

            if (window.postFilterTimeout) {
              window.clearTimeout(window.postFilterTimeout);
              window.postFilterTimeout = null;
            }
            
            window.postFilterTimeout = setTimeout( function() {
              $newItems.imgStubInit();
              $newItems.find(".slideshow").setupThumbSlideshow();
            }, 2000);
            
          });
        
          $newItems.find(".slideshow li:first-child img,>a>img:first-child").bind("load", function() {
            $(this).closest("li.tile,li.result").css({ backgroundImage: "none" });
          });

          //updateFilters();
          filterResults();

        }
        
      } catch (err) {
        
      }
        
      };

        

      $('#bt-more-results').click( function() {
        $('#search-action').val("more");
        $('#form-main').submit();
        return false;
      });
      
      $('#form-main')
        .mousedown(function() {
          $('#results div.slideshow').carousel('pause');
        })
        .mouseup(function() {
          $('#results div.slideshow').carousel('resume');
        })
        .submit(function(event) {
          
          try {
            sleepSlideshows();
          
            if (!window.preserveSize) {
              updateSize();
            }
        
            window.searchClean = false;
          
            window.preserveSize = false;
          
            $('#bt-more-results').hide();
            $('#loading-results').show();
            $('#no-results').hide();

          
            $('#wrap-term').hide()
            $('#projects-loading').show();
          
            $.post("/archive?ajax=1", $(this).serialize(), updateResults);
          
          } catch (err) {
            
          }
          
          return false;
        });
      
      
      // setup isotope filtering
      
      var filterResults = function() {
        // build up the current set of filters
        var fcs = [];
        
        var $afilters = $filters.filter(":checked").not(":disabled");
        var $ascfilters = $scfilters.filter(":checked").not(":disabled");
        
        if ($ascfilters.length) {
          
          $ascfilters.each( function() {
          
            var md = $(this).metadata();

            if (md.fc) {
              var scfc = md.fc;
            }

            if (!$afilters.length) {
            
              fcs.push(scfc);
            
            } else {

              $afilters.each( function() {
            
                var md = $(this).metadata();
          
                if (md.fc) {
                  fcs.push(scfc + md.fc);
                }

              });
            
            }
          
          
          });
        } else {
          
          $afilters.each( function() {
            
            var md = $(this).metadata();
      
            if (md.fc) {
              fcs.push(md.fc);
            }

          });
          
        }
        
        
        sleepSlideshows();
        
        if (fcs.length) {
          $res.isotope({ filter: fcs.join(",")});
          updateResultsCount($res.find("li.tile").not(".isotope-hidden").length);
        } else {
          $res.isotope({ filter: "*"});
          
          if (window.resultsInfo) {
            updateResultsCount(window.resultsInfo.count);
          } else {
            updateResultsCount($res.find("li.tile").not(".isotope-hidden").length);
          }
        }
        
        setTimeout( wakeSlideshows, 1000 );
        
      };
      
      var updateResultsCount = function(count) {
          $('#results-count span').html(count);
      };
      
      if (ie6) {
        
        $search.my("label.filter").click( filterResults );
        $search.my("label.sc-filter").click( filterResults );
        
      } else {
        $filters.click( filterResults );
        $scfilters.click( filterResults );
      }
    

      
      
      var windowResizeSS = function() {
        sleepSlideshows();
      
        if (waketo) {
          clearTimeout(waketo);
          waketo = null;
        }
      
        waketo = setTimeout(wakeSlideshows, 1000);  
      };

      $(window).resize( windowResizeSS );
      
    } // body.search 


    $.fn.videoThumbInit = function() {
      return this.each( function() {
        // setup a click immediately to swallow the event (otherwise the vimeo movie will load in a new window if the AJAX hasn't finished yet)
        
        if (!Modernizr.touch) {

          $(this).click( function() {
            if(jQuery(this).hasClass("youtube-bypass")){
				// Go to link
			} else{
				return false;
			}
          });
        
        }
        
        var $thumb = $(this);
        var $vt = $(this).find(".vthumb");
        var vid = $vt.metadata().vid;
        
        if (vid) {
          $.getJSON('https://www.vimeo.com/api/v2/video/' + vid + '.json?callback=?', {format: "json"}, function(data) {
            $vt.append('<img src="' + data[0].thumbnail_medium + '" width="176" height="124" />'); 
            if (!Modernizr.touch) {
              $thumb.thumbOverlay();
            }
            $vt.addClass("vthumb-loaded");
          });
        }
      
      });
       
    };
    

    ZeroClipboard.setMoviePath(wp_template_url + "/js/zero-clipboard.swf");
    
    $.fn.zeroclipboard = function() {
      
      return this.each( function() {

        
        var $el = $(this);
        var $wrap = $el.closest(".input-wrap");
        
        var $input = $wrap.find("input");
        
        if ($input.length) {
          

          clip = new ZeroClipboard.Client();
    			clip.setHandCursor( true );
			
    			clip.addEventListener('mouseOver', function (client) {
    				// update the text on mouse over
    				clip.setText( $input.val() );
    			});
			
    			clip.glue( $el.get(0), $wrap.get(0) );
        
        }
  
        
      });
      
      
    };
    
    
    // setup thumbnail overlays

    $.fn.thumbOverlay = function() {
      return this.each( function() {
        
        
        
        var $el = $(this);
        
        $el.one("mouseenter", function(event) {
            var hashless = window.location.href.split("#")[0];
          
            var shareUrl;
        
            if ($el.hasClass("single-video")) {
              shareUrl = hashless + "#" + ( $el.attr("id").replace("tile", "video").replace(/\-/g, "/") );
            } else {
              shareUrl = hashless + "#" + ( $el.attr("id").replace("tile", "slide").replace(/\-/g, "/") );
            }
        
            // if the thumb overlay doesn't exist, create it
            $to = $("#tmpl-thumb-overlay").tmpl({ 
              id: $el.attr("id").replace("tile", "overlay"),
              destination: $el.find("a:first").attr("href"),
              src: $el.find("img").attr("src"),
              type: $el.find(".type").html(),
              target: $el.find("a:first").attr("target") || "_top",
              caption: $el.find(".caption").html(),
              play: $el.hasClass("video"),
              shareUrl: shareUrl,
              label: $el.hasClass("video") ? "Video" : "Image",
              shareUrlEncode: $.urlencode(shareUrl),
              project: $el.metadata().project,
              download_url: $el.metadata().download_url
            });
    
            $el.data("thumb-overlay", $to);
    
            $("body").append($to);
    
          
          
            // setup a reveal
            $el.reveal({ hideSelector: "button.close", el: $to, hideOnTargetMouseLeave: true, hideDelay: 0, showDelay: 50, show: "fadeIn", showOptions: { duration: $.fd(500) }, triggerEvent: "hover", affix: { from: "nw", to: "nw", offset: [15, -13] } } ).reveal("hide", { instant: true });

            // setup a reveal for the share link
    
      
            $to.find("button.share")
              .bind("beforeshow.reveal", function() {
              
                // fire off an ajax request to bit.ly to get the share URLs
                $.getJSON(bitlyURL + "&longUrl=" + $.urlencode(shareUrl) + "&callback=?", function(data) {
                  $.each(data.results, function(i, item) {
                    
                    setTimeout(
                      function() {
                        $to.find("input.text").val(item.shortUrl);
                        $to.find("input.text").val(item.shortUrl);
                        $to.find("input.text").val(item.shortUrl);
                        $to.find("ul.social-media-links").html($('#tmpl-social-media-links').tmpl({ shareUrlEncode: item.shortUrl }));
                    }, 10);
                  
                  })
                });
              
              
              
              })
              .bind("aftershow.reveal", function() {
                // setup zeroclipboard (needs to be here as the element needs to be visible for zc to calulate positions) 
              
                if (!$.isTouch()) {
                  var $clipboard = $to.find(".clipboard");
              
                  if (!$clipboard.data("zc")) {
                    $clipboard.data("zc", $clipboard.zeroclipboard());
                  }
                }
                
              })
              .reveal( { el: $to.find(".share-project"), triggerEvent: "click", show: "slideDown", hide: "slideUp", showOptions: { duration: 250, easing: "easeOutQuart" }, hideOptions: { duration: 250, easing: "easeOutQuart" } } );
          
          


              
        
      
            $to.bind("mousewheel", function(event) {
              $el.reveal('hide', { instant: true });
            });
      
            $el.reveal("show");
          
            // setup thumb overlay to open the asset carousel
       
            var click = function(event) {
              var id = $(event.target).closest(".thumb-overlay").attr("id");
        
              if (!id) {
                id = $(event.target).closest(".tile").attr("id");
              }
            
              if (id) {
            
                if (acSlideTo) {
                  acid = id.replace(/overlay|tile/, "slide");
            
                  if (acSlideTo(acid)) {
                    $el.reveal("hide", { instant: true });
                    return false;
                  }
              
                } else if (showVideo) {
              
                  vid = id.replace(/overlay|tile/, "video");

                  if (showVideo(vid)) {
                    $el.reveal("hide", { instant: true });
                    return false;
                  }
              
                }
            

              } 
          
              return false;
            };
        
            $el.click( click );
            $to.find("a.thumb,a.play").click( click );
      
            // setup fullscreen buttons on the overlay to open the fullscreen carousel
      
            $to.find(".windowopen").windowopen();

            $to.find("button.fullscreen").click( function() {
        
              var id = $(this).closest(".thumb-overlay").attr("id");
        
              if (id) {
                acid = id.replace("overlay", "slide-fs");
          
                if (acfsSlideTo(acid)) {
                  $el.reveal("hide", { instant: true });
                  return false;
                }

              }
        
            });
          
        });
        
        
        
        
      });
      
    };
    
    
    

/* -- single project pages -- */

    if ($('body.single,body.single-publication').length) {
      var $sa = $('#section-assets');
      var $sat = $sa.find("ul.thumbs");
      
      // setup isotope for tiles
      $sa.isotope(isotopeOptions);

      $sa.find('.thumbs li').addClass("active");
      
      var $sl = $('ul#section-links');
      
      $sl
        .find("a.isotope-all")
          .click( function() {
            $sa.isotope({ filter: "*" });
          })
        .end()
        .find(">li>a") // top level links
          .click( function() {
            
            // hide any sub links
            $sl.find(">li").find("ul").hide().end().find(">a").removeClass("current").find(".colon").hide();

            $(this).closest("li").find("ul").show().end().find(">a").addClass("current").find(".colon").show();
            
            
            // isotope filter to show the new section

            var hash = '';
            
            try {
              hash = '#' + $.url.setUrl($(this).attr("href")).attr("anchor");
              $('#details').isotope({ filter: hash });
            } catch (err) {
              
            }
            
            return false;
          })
        .end()
        .find(">li li a") // sub-level links
          .click( function() {
            var type = $(this).metadata().type;
            $sa.isotope({ filter: "." + type });
            return false;
          });
      
        
      $('#details').isotope({
        itemSelector : 'section',
        filter: '#section-assets,#section-images',
        layoutMode : 'masonry',
        animationOptions: { duration: 200 }
      });
      
      $('#section-information,#section-publications,#section-credits').show();

      
      // setup asset carousels (standard and fullscreen)

      var $ac = $('#asset-carousel');
      var $acw = $('#asset-carousel-wrap');
      var $acfs = $('#asset-carousel-fs');
      var $acfsw = $('#asset-carousel-fs-wrap');
      
      $acfs.
        bind("afterchange.carousel", function(event, data) {

          try {
            var id = data.newItem.attr("id").replace("slide-fs", "slide");
          
            var $acel = $('#' + id);
            
            if ($acel.length) {
              $ac.carousel('to', { el: $acel, instant: true, silent: true });
            }
          
          } catch (err) {
          
          }
          
          

        });

      // common functions to setup asset carousels and image stubs
      

      
      
      
      $.fn.assetCarouselInit = function() {
        return this.each( function() {
          
          var $wrap = $(this);
          var $carousel = $(this).find(".carousel");
          var md = $wrap.metadata();

          $carousel
            .bind("beforechange.carousel", function(event, data) {
              if (md.slideFX && !data.instant) {
                data.items.stop(true, true).css("opacity", 0.4);
                data.newItem.animate({ opacity: 1.0 }, { duration: 250 });
              } else {
                data.items.css({ opacity: 0.4 });
                data.newItem.css({ opacity: 1.0 });
              }
              
              if (data.oldItem) {
                data.oldItem.find("iframe.vimeo").stopVideo();
              }
              
              if (data.newItem.hasClass("asset-slide-video")) {
                $('#asset-carousel-fullscreen').hide();
              } else {
                $('#asset-carousel-fullscreen').show();
              }

              data.items.find(".slide-caption").css({ bottom: -58 });
              //window.location.hash = "!" + md.hashPrefix + data.newItem.attr("id").replace(md.slidePrefix, "");
            })
            .bind("afterchange.carousel", function(event, data) {
              data.newItem.find(".slide-caption").animate({ bottom: 0 }, { easing: "easeOutQuart" });
              data.newItem.find("iframe.vimeo").eq(0).playVideo();
            })
            .carousel({ 
              next: $wrap.find("button.right"), 
              previous: $wrap.find("button.left"), 
              classNameAnimating: "active", 
              cssDisabled: { opacity: 0.1 },
              waitForAnimate: false, 
              align: "center",
              acw: false,
              wrap: false,
              events: {mousewheel: true, touchwipe: true},
              transitionOptions: { duration: 750, easing: "easeOutQuart" } 
            })
            .find(".slide-caption").css({ bottom: -58 });
          
        });
        
        
      };
      
      // standard asset carousel
      
      var acwAboveCut = function() {
        var wh = $(window).height();
        
        if (wh < 747) {
          $acw.css({ top: Math.max(5, wh - $acw.outerHeight()) });
        } else {
          $acw.css({ top: 115 });
        }

      };
      
      if ($acw.length) {
        $(window).resize(acwAboveCut);
      }
      
      var acHide = function() {
        $acw.unmodalize().fadeOut("fast");
        
        
        $acw.find("iframe.vimeo").stopVideo();
        wakeSlideshows();
        
        window.location.hash = "";

      };
        
      var acSlideTo = function(id) {
        
        var $acel = $([]);

        try {
          $acel = $('#' + id);
        } catch (e) {
          
        }


        if ($acel.length) {
        
          sleepSlideshows();

          if (!$ac.data("carousel")) {
            // setup the carousel (on demand)

            // first init the image stub on the requested element (so that it loads first)
            $acel.imgStubInit();
            $acw.imgStubInit();
            
            $acw.assetCarouselInit();
            
            $acw.find('.close').click( acHide );
            $acw.bind("underlayclick.modalize", acHide );
          }

          $acw.modalize(modalizeOptions).fadeIn($.fd("fast"));
          acwAboveCut();
          $ac.carousel('to', { el: $acel, instant: true });
          
          return true;
  
        
        } 
        
        
        return false;
      };
      
      
      // setup list item click to open the asset carousel item (sometimes a click CAN occur on the thumbnail, rather than the overlay)
      
      $sa.find("a.slideshow").click( function(event) {
        
        if (!Modernizr.touch) {
        
          var id = $(this).closest("li").attr("id");
        
          if (id) {
            acid = id.replace("tile", "slide");
          }

          if (acSlideTo(acid)) {
            return false;
          }
        
          event.stopPropagation();

          return false;

        }
      
      });
      
      // fullscreen asset carousel
      
      var acfsResize = function() {
        
        var ww = $win.width();
        var wh = $win.height();

        // update list item height
        $acfs.find("li").css({ height: wh });

        // update the image height to match
        // update img height
        
        $acfs.find("img")
          .resizeto({ height: wh })
          .each( function() {
            $(this).closest("li").css({ height: $(this).outerHeight(), maxWidth: ww, width: $(this).outerWidth() });
          });
        
        
        $acfsw.css({ width: ww, height: wh });
        $acfs.css({ width: ww, height: wh });

        $acfs.carousel('height', { value: wh }).carousel('update', { instant: true });
        $acfsw.find("button.left,button.right").css({ height: wh });
      };
      
      var acfsHide = function() {
        $("body").css({ overflow: "auto" });
        $acfsw.fadeOut("fast");
        window.location.hash = "";
      };

      
      var acfsSlideTo = function(id) {

        var $acel = $([]);
        
        try {
          $acel = $('#' + id);
        } catch (e) {
          
        }
        
        if ($acel.length) {
        
          if (!$acfs.data("carousel")) {
            // setup the carousel (on demand)
          
            // first init the image stub on the requested element (so that it loads first)
            $acel.imgStubInit();

            $acfsw.imgStubInit();
            $acfsw.assetCarouselInit();
            $acfsw.find('.close').click( acfsHide );
          
          }
        
          // make the body's overflow hidden, which prevents scrollbars appearing for content underneath while the fullscreen slideshow is open
          $("body").css({ overflow: "hidden" });
          $acfsw.show();
          acfsResize();  
        
          $acfs.carousel('to', { el: $acel, instant: true });
          return true;
           
        }
        
        return false;
      };
      
      $('#asset-carousel-fullscreen').click( function() {
        var $acc = $ac.carousel("current");
        
        if ($acc.length) {
          var id = $acc.attr("id");

        
          
          if (id && id != "") {
            
            var acfsid = id.replace("slide", "slide-fs");
            acfsSlideTo(acfsid);
          }
        }

      });
      
      
      $(window).resize( function() {
        acfsResize();  
      });
      
      
      if (!Modernizr.touch) {
        $('ul.thumbs>li').not(".text,.video,.result,.publication,.person,.map").thumbOverlay();
      }
    
      // grab vimeo thumbnails
        
      $('ul.thumbs>li.video').videoThumbInit();

    } // end body.single



    
/* -- people archive page -- */
    

    
    if ($('body.archive-people').length) {

      $('#section-links li a').click( function() {
        var href = $(this).attr("href");
          if (href) {
            
            var id = $.url.setUrl(href).attr("anchor");
              
            try {
              $el = $("#" + id);
              
              if ($el.length) {
                $(document).scrollTo($el, 300, { easing: "easeOutQuart" });
                return false;
              }

            } catch (err) {
              
            }
            
          }
        
        });

      

    }


/* -- news page -- */
    
    
    if ($('body.page-news').length) {
      
      var newsWindowResize = function() {
        $('#articles').css( { height: Math.max($(window).height() - 240, $('#news-content').outerHeight(), 500) } );
      
        if (!ie6) {
          $('#articles').data("jsp").reinitialise();
        }

      };
      
      $(window).resize( newsWindowResize );
      
      newsWindowResize();
    }

/* -- people archive page -- */
    
    
    if ($('body.page-videos').length) {
      $('#details').find("ul.thumbs>li").videoThumbInit();
    }


/* -- contact us page -- */
    
    if ($('body.contact-us').length) {

      $('#contact-us').find(".gfield").each( function() {
          
        var $controls = $(this).find("input[type=text],textarea");
        
        if ($controls.length) {
          // hide the label
          var $label = $(this).find("label");
          $label.hide();

          // now make a placeholder for every input, that contains the label's text
          $controls.placeholder({ text: $label.html() });
          
        }
             
          
      })
      .filter(".office").hide();
    
      $('#contact-us input:file').customFileInput();	
        
      // setup sections
      var $sections = $('#contact-us').find(".sections");
      var $sectionButtons = $sections.find("button");
      var $form = $('#contact-us').find(".gform_wrapper");

      $sections.show();
      
      var updateLocation = function(loc, loc_val) {
        
        var $flc = $('#form-loc-' + loc);
      
        $('#contact-us').find(".office select").val(loc_val);

        $('#contact-us').find(".form-loc").removeClass("form-loc-current");
        $flc.addClass("form-loc-current");

        $('#contact-us').find(".map-marker").removeClass("map-marker-current");
        $('#map-marker-' + loc).addClass("map-marker-current");

        $('#new-business-contact').find(".email").html('<a href="mailto:' + $flc.find(".new-business-contact-email").html() + '">' + $flc.find(".new-business-contact-email").html() + '</a>');
        $('#new-business-contact').find(".telephone").html($flc.find(".new-business-contact-telephone").html());
        $('#new-business-message').find(".name").html($flc.find(".new-business-contact-name").html());

        $('#press-pr-contact').find(".email").html('<a href="mailto:' + $flc.find(".press-pr-contact-email").html() + '">' + $flc.find(".press-pr-contact-email").html() + '</a>');
        $('#press-pr-contact').find(".telephone").html($flc.find(".press-pr-contact-telephone").html());
        $('#press-pr-message').find(".name").html($flc.find(".press-pr-contact-name").html());

      };
      
      $('#map').find(".map-marker")
        .click( function() {
          var loc = $(this).metadata().loc;
          var loc_val = $(this).metadata().loc_val;
        
          if (loc) {
            updateLocation(loc, loc_val);
          }

          return false;
        })
        .hover( 
          function() {
            var loc = $(this).metadata().loc;
            $('#map-loc-' + loc).addClass("map-loc-current");
          },
          function() {
            var loc = $(this).metadata().loc;
            $('#map-loc-' + loc).removeClass("map-loc-current");
          }
        );
        
      
      
      
      
      
      var updateSection = function() {
        
        var $currentLoc = $('#contact-us').find(".form-loc-current");
        
        $('#new-business-message').hide();
        $('#new-business-contact').hide();
		$('#product-enquiries-message').hide();
		$('#exhibitions-message').hide();
		$('#exhibitions-contact').hide();
        $('#product-enquiries-contact').hide();
        $('#press-pr-message').hide();
        $('#press-pr-contact').hide();

        
        
        $form.find(".cv-samples").hide();
        $form.find(".website").hide();
        $form.hide();
        
        var val = $sectionButtons.filter(".current").attr("value");
        
        if (val.toLowerCase() == "general") {
          $form.show();
        } else if (val.toLowerCase() == "new-business" || val.toLowerCase() == "new business") {
          $('#new-business-message').show();
          $('#new-business-contact').show();
		} else if (val.toLowerCase() == "product-enquiries" || val.toLowerCase() == "product-enquiries") {
			$('#product-enquiries-message').show();
			$('#product-enquiries-contact').show();
        } else if (val.toLowerCase() == "press-pr" || val.toLowerCase() == "press &amp; pr") {
          $('#press-pr-message').show();
          $('#press-pr-contact').show();
        } else if (val.toLowerCase() == "exhibitions" ) {
			$('#exhibitions-message').show();
			$('#exhibitions-contact').show();
		} else { // careers
          $form.show();
          $form.find(".cv-samples").show();
          $form.find(".website").show();
        }
        
      };
      
      $sections.find("button").click( function() {
        $sectionButtons.removeClass("current");
        $(this).addClass("current");
        updateSection();
      });

      updateSection();
    
    
    }


/* -- zha world page -- */
    
    if ($('body.zha-world').length) {

      window.zhaworld = new ZHAWorld();
      
      // load the projects with AJAX, plotting them on complete
      $.getJSON("/services/map-projects", function(data) {
        window.zhaworld.plotProjects(data);
      });

    }

/* -- publications archive page -- */


    if ($('body.archive-publications').length) {

      $('#section-links li a').click( function() {
        var href = $(this).attr("href");
          $('#section-publications').data('jsp').scrollToElement($(this).attr("href"), true, true);
        });
        
    }

    // prevent overlay links from going to their destination (they'll be handled by hashchange)
    
    $('a.overlay').click( function() { 
      
      var $el = $(this);
      var hash = $el.metadata().hash;

      if (hash) {
        document.location.hash = hash;
      }
      
      $el.closest(".menu-content")
        .find("a").removeClass("current-overlay").end()
        .closest(".panel").find(".trigger").reveal("hide", { instant: true });
      
      $el.addClass("current-overlay");
      
      return false; 
    
    });
    
    var $stubs = $('.stub');
    
    $stubs
      .overlay()
      .bind("overlayafterhide", function() {
        
        $('.menu-content a').removeClass("current-overlay");
          
        document.location.hash = "#";
        $("div.slideshow").data("noplay", false);
        wakeSlideshows();
      })
      .bind("overlaybeforeshow", function() {
        $("div.slideshow").data("noplay", true);
        sleepSlideshows();
      });
      
    
    $(window).hashchange( function() {
	 
      var ret = false;
      
      if (location.hash != "" && location.hash != "#") {
      
        // test the hash for various known patterns
        
        var resolved = false;
        
        var matches = location.hash.match(/asset\/slide\/(.*)/);
        
        if (matches && matches.length > 1) {
          resolved = acSlideTo("asset-slide-" + matches[1]);
        }
        
        if (!resolved) {
          var matches = location.hash.match(/asset\/video\/(.*)/);
          
                  
          if (matches && matches.length > 1) {
            resolved = showVideo("asset-video-" + matches[1]);
          }
        }
        
        
        if (!resolved) {
          
          try {
        
            // look for an element with this hash
            var $el = $(location.hash);
        
            if ($el.length) {
          
              // check if this element is a stub. if so, show the stub, and load its content

              if ($el.hasClass("stub")) {
            
                var url = $el.metadata().url;
              
                if (url) {
                  $stubs.filter(".overlay-shown").overlay('hide', { instant: true, silent: true });

                  $el.overlay('show');
                
                
                  if (!$el.data("loaded")) {
                  
                    // create an iframe to load the content

                    var $iframe = $('<iframe scrolling="no" src="' + url + '" allowtransparency="true" frameborder="0"></iframe>');
                    var $sdbc = $el.find(".sdbc");
                    
                    $iframe.css({ width: $sdbc.outerWidth(), height: $sdbc.outerHeight() }); 
                    
                    
                    $iframe.bind("load", function() {
                      $el.data("loaded", true);
                      $el.find(".spinner").hide();
                    });
                  
                    $iframe.appendTo($el.find(".sdbc"));

                  }
                }
            
              }
          
            }
        
          } catch (err) {}  
        
        }
        
      }
      
  
      
    
    });
    
    $(window).hashchange();
    
    $('.scroll').each( function() {

      var jsp = $(this).data("jsp");
      
      if (jsp) {
        jsp.reinitialise();
      }
      
    });


/* -- archive page -- */

  setTimeout( function() {
  
    // undock the search panel, and move it adjacent to the menu
    if ($('body.search').length) {
      
      if (window.newSearch && !$.isTouch()) {
        var state = $('#search-panel').state('data');
        
        if (!state.position) {
          $('#search-panel').dragpanel('undock').animate({ top: 73, left: 485 });
        }
      }
        
    }
  
  }, 100);
  
    
    
    
  });



  $(window).load( function() {

    /*  -------- all pages -------- */

    /*  -------- home page -------- */

    if ($('body.home').length) {
      // homeWindowResize();
    }
    
  });
    
})(jQuery);




// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};


