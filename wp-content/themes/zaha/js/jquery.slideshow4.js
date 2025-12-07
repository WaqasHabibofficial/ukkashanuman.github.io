// Custom component for the 4 way slideshow on the home page


(function($) { 



  // ======================= slideshow4Loaded Plugin  ===============================
  // A fork of http://gist.github.com/268257 by Paul Irish

  // mit license. paul irish. 2010.
  // webkit fix from Oren Solomianik. thx!

  $.fn.slideshow4Loaded = function(callback, find){
    var elems = find ? this.find('img') : this.filter('img'),
      
        len   = elems.length,
        _this = this;

    elems.bind('load',function(){
      if (--len <= 0){ 
        callback.call( _this ); 
      }
    }).each(function(){
      // cached images don't fire load sometimes, so we reset src.
      if (this.complete || this.complete === undefined){
        var src = this.src;
        // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
        // data uri bypasses webkit log warning (thx doug jones)
        this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        this.src = src;
      }  
    }); 

    return this;
  };
  


  var defaults = {

    x: 0,
    y: 0,
    
    bindArrowKeys: false,
    
    selRow: ".row",
    selCol: ".col",
    selImgStub: ".img-stub",

    cnCar: "car",
    cnCurrentRow: "current-row",
    cnCurrentCol: "current-col",
    cnClip: "clip",
    cnLoad: "load",
    
    cssClip: { overflow: "hidden", position: "relative" },
    cssCar: { position: "relative" },

    transitionOptions: { duration: 500, easing: "easeOutQuart" },
    loaderOptions: { delay: 0, duration: 250, easing: "linear" }

  };
  
  var pn = 'slideshow4';

  $.fn[pn] = function() {
    
    var ret = this, all = this, cmd, options = {}, params = {}, a = arguments; if (a.length >= 1) { if (typeof(a[0]) == "string") { cmd = a[0]; } else { options = a[0]; } if (a.length >= 2) { params = a[1]; } }
    
    if (this.length) {
      this.each( function() {
        
        var self, trigger, d, p = params, o = {}, md = {}, el = $(this); if ($.fn.metadata) { md = el.metadata(); } if (!cmd) { d = el.data(pn); if (!d) { d = {}; el.data(pn, d); } $.extend(true, o, defaults, options, md[pn] || md || {} ); d.options = o; } else { d = el.data(pn); if (d) { o = d.options; } else { return; } } self = function() { el[pn].apply(el, arguments); }; trigger = function(n, dt) { if (!(p && p.silent)) { return el.trigger(jQuery.Event(n + "." + pn), $.isArray(dt) ? dt : [ dt ] ) !== false; } };
   
        var updateGrid = function() {
          d.rows = el.find(o.selRow);
          
          if (d.rows.length) {
            
            d.grid = [];
            
            d.rows.each( function() {

              var $row = $(this);
              var $cols = $row.find(o.selCol);
              
              d.grid[d.grid.length] = $cols;

            });
            
            
          }
        };
        
        
        if (!cmd) {
          // initialization (no command)
          
          d.x = o.x;
          d.y = o.y;
          
          
          d.up = d.down = d.right = d.left = $();
           
          if (o.up) { d.up = o.up; }
          if (o.down) { d.down = o.down; }
          if (o.left) { d.left = o.left; }
          if (o.right) { d.right = o.right; }
          
          if (o.bindArrowKeys) {
            
            $(document).keypress( function(event) {
              
              if (!$(event.target).closest("input,textarea,select").length) {
                
                if (event.keyCode == 37) { // left
                  self('left');
                } else if (event.keyCode == 38) { // up
                  self('up');
                } else if (event.keyCode == 39) { // right
                  self('right');
                } else if (event.keyCode == 40) { // down
                  self('down');
                }

              }

            });
        
          }
          
          
          d.loader = o.loader;
          
          // assume that the images are provided as rows and columns
          
          updateGrid();
          
          
          
          d.up.click( function() {
            if (!d.up.hasClass("disabled") && !d.loading) {
              self("up");
              return false;
            }
          });

          d.down.click( function() {
            if (!d.down.hasClass("disabled") && !d.loading) {
              self("down");
              return false;
            }
          });

          d.left.click( function() {
            if (!d.left.hasClass("disabled") && !d.loading) {
              self("left");
              return false;
            }
          });

          d.right.click( function() {
            if (!d.right.hasClass("disabled") && !d.loading) {
              self("right");
              return false;
            }
          });
          
          d.rows.css({ width: 99999 });
          // setup supporting elements to allow sliding
          d.car = $('<div/>').css({ width: 99999 }).css(o.cssCar).addClass(o.cnCar);
          el.addClass(o.cnClip).css(o.cssClip).wrapInner(d.car);
          
          d.car = el.find("." + o.cnCar).eq(0);

          self('to', { x: d.x, y: d.y, instant: true });
        }
        else {
          
          // setup event data
          d.ed = { oldX: d.x, oldY: d.y, oldItem: d.item, ocmd: p.ocmd || '' };
          
          if (cmd == 'update') {
            self('to', { x: d.x, y: d.y, instant: true, silent: true });
          }
          else if (cmd == 'to') {
            
            
            var px = p.x == null ? d.x : p.x;
            var py = p.y == null ? d.y : p.y;

            if ( ( p.x != null || p.y != null ) && !d.animating && !d.loading) {
            
              if (py < d.grid.length) { // we're not requesting a row index that's too high
              
                var row = d.grid[py];
                
                if (px < row.length) { // we're not requesting a column too high in this row
                
                  $col = row.eq(px);
                
                  // now we have our column, see if it is marked as "load" (so a load is required)
                  
                  // mark the new xy
                  d.x = d.ed.newX = px;
                  d.y = d.ed.newY = py;

                  d.item = d.ed.newItem = $col;
                  
                  el.find(o.selCol).removeClass(o.cnCurrentCol)
                  el.find(o.selRow).removeClass(o.cnCurrentRow)
                  
                  
                  var complete = function() {
                    
                    if (o.transitionOptions.complete) {
                      o.transitionOptions.complete();
                    }
                    
                    d.item.addClass(o.cnCurrentCol);
                    d.item.closest(o.selRow).addClass(o.cnCurrentRow);
                    
                    d.loading = false;
                    d.animating = false;
                    trigger("afterchange", d.ed);
                    
                      
                    
                    if (p.ocmd == "up") {
                      trigger("afterup", d.ed);
                    } else if (p.ocmd == "down") {
                      trigger("afterdown", d.ed);
                    } else if (p.ocmd == "left") {
                      trigger("afterleft", d.ed);
                    } else if (p.ocmd == "right") {
                      trigger("afterright", d.ed);
                    }
                    
                    
                  };
                  
                  var move = function() {

                    d.animating = true;

                    trigger("beforechange", d.ed);
                    
                    if (p.instant) {
                      d.car.css({ left: - d.item.position().left, top: - d.item.position().top });
                      complete();
                    } else {
                      d.car.animate({ left: - d.item.position().left, top: - d.item.position().top }, $.extend(true, {}, o.transitionOptions, { complete: complete }) );
                    }
                  };
                  
                  var showLoader = function() {
                    d.lto = setTimeout( function() {
                      d.loader.fadeIn(o.loaderOptions.duration, o.loaderOptions.easing);
                    }, o.loaderOptions.delay);
                    
                  };
                  
                  var hideLoader = function() {
                    if (d.lto) {
                      clearTimeout(d.lto);
                      d.lto = null;
                      
                      d.loader.hide();
                    }
                  
                  };
                  
                  if ($col.hasClass(o.cnLoad)) {
                  
                    d.loading = true;
                  
                    if (d.loader && d.loader.length) {
                      showLoader();
                    }
                    
                    // grab the metadata
                  
                    var md = $col.metadata();
                    
                    if (md.src) {

                      var $img = $('<img />');
                      
                      $img.attr("src", md.src);
                      
                      if (md.width) {
                        $img.attr("width", md.width);
                      }

                      if (md.height) {
                        $img.attr("height", md.height);
                      }
                      
                      d.ed.img = $img;
                      
                      $img.bind("load", function() {
                        
                        d.loading = false;
                        trigger("afterimageload", d.ed);
                        $col.removeClass(o.cnLoad);
                        
                        if (d.loader && d.loader.length) {
                          hideLoader();
                        }
                        
                        move();
                        
                      });
                      
                      $col.append($img);

                      trigger("afterimageappend", d.ed);
                      
                      
                      $col.removeClass("load");

                      
                    }

                
                  } else {
                    // the image is assumed to be loaded, so just move there
                    move();
                  }
                  
                
                
                
                }
            
              }
            
            }
            
            
            
          }
          else if (cmd == 'up') {

            if (!d.animating && !d.loading && trigger("beforetryup", d.ed)) {
              
              p.ocmd = cmd;
              var py = d.y - 1;

              if (py < 0) {
                // the new y position will be the same as it is currently
                var py = d.y;
                
                // we need to move the bottom row to the top
                d.rows.eq(0).before(d.rows.eq(-1));

                updateGrid();
                
                // move our position back to the current item quickly
                d.car.css({ top: -d.item.position().top });
                
              }

              trigger("beforeup", d.ed);
              
              self('to', $.extend(true, {}, p, { y: py, ocmd: cmd }));
              
            }
          
          }
          else if (!d.animating && !d.loading && cmd == 'down') {

            if (trigger("beforetrydown", d.ed)) {

              var py = d.y + 1;

              if (py >= d.rows.length) {
                // the new y position will be the same as it is currently
                var py = d.y;
                
                // we need to move the top row to the bottom
                d.rows.eq(-1).after(d.rows.eq(0));

                // move our position back to the current item quickly
                d.car.css({ top: -d.item.position().top });

                updateGrid();
                
                
                
              }

              trigger("beforedown", d.ed);
              
              self('to', $.extend(true, {}, p, { y: py, ocmd: cmd  }));
              
            }
    
          }
          else if (!d.animating && !d.loading && cmd == 'left') {

            if (trigger("beforetryleft", d.ed)) {
              
              var px = d.x - 1;
              var row = d.grid[d.y];
              
              if (px < 0) {
                
                px = d.x; // the new x pos is the same
                
                // we need to wrap all of the end columns to the start
                $.each(d.grid, function(index, row) {
                  row.eq(0).before(row.eq(-1));
                });
                
                // fix the grid
                updateGrid();

                // move our position back to the current item quickly
                d.car.css({ left: -d.item.position().left });
              }
              
              trigger("beforeleft", d.ed);
              
              self('to', $.extend(true, {}, p, { x: px, ocmd: cmd  }));

            }
    
          }
          else if (!d.animating && !d.loading && cmd == 'right') {

            if (trigger("beforetryright", d.ed)) {
              
              var px = d.x + 1;
              var row = d.grid[d.y];
              
              if (px >= row.length) {
                
                px = d.x; // the new x pos is the same
                
                // we need to wrap all of the start columns to the end
                $.each(d.grid, function(index, row) {
                  row.eq(-1).after(row.eq(0));
                });
                
                // fix the grid
                updateGrid();

                // move our position back to the current item quickly
                d.car.css({ left: -d.item.position().left });
              }
              
              trigger("beforeright", d.ed);
              
              self('to', $.extend(true, {}, p, { x: px, ocmd: cmd  }));
              
            }

          }
          else if (cmd == 'destroy') {
            // remove event handlers, data, and anything else
            el.data(pn, null);
          }
        
          
          
        }
        

      });
    }

    return ret;
  };
  
  $.fn[pn].defaults = defaults;
  
})(jQuery); 