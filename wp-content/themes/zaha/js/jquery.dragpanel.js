

(function($) { 

  var defaults = {
    key : 'value',
    shadowSize: 7,
    windowInset: [10, 8]
  };
  
  var pn = 'dragpanel';

  $.fn[pn] = function() {
    
    var cmd, options = {}, params = {}, a = arguments; if (a.length >= 1) { if (typeof(a[0]) == "string") { cmd = a[0]; } else { options = a[0]; } if (a.length >= 2) { params = a[1]; } }
    
    return this.each( function() {

      var d, p = params, o = {}, md = {}, el = $(this); if ($.fn.metadata) { md = el.metadata(); } if (!cmd) { d = el.data(pn); if (!d) { d = {}; el.data(pn, d); } $.extend(true, o, defaults, options, md[pn] || md || {} ); d.options = o; } else { d = el.data(pn); if (d) { o = d.options; } else { return; } };
      
      if (!cmd) {
        // initialization (no command)
        
        var raise = function(event) {
          var doit = true;
          
          el[pn]('contain');

          if (event && $(event.target).closest("a,button,input").length) {
            doit = false;
          }
          
          if (doit) {
            el[pn]('raise');
          }
        };

        var lower = function(event) {
          el[pn]('lower');
        };
        
        el.draggable({
          distance: 10,
          start: function(event, ui) {
            el.trigger("start.dragpanel");
            el.reveal("disable", { show: "true" });
          },
          drag: function() {
            raise();
          },
          stop: function(event, ui) {
            var id = el.attr("id");
            lower();
            el.state('set', { position: el.position() });
            el.trigger("stop.dragpanel");
            if (!el.hasClass("docked")) {
              el[pn]('undock');
            }
          }
        })
        .bind("mousedown", raise)
        .bind("touchstart", raise)
        .bind("mouseup", lower)
        .bind("touchend", lower);

        // setup the dock for this panel

        var did = o.dock; // dock id
        
        if (!did || ( did && !$(did).length)) {
          // if the dock is not in "dock" metadata, or in a "dock" option then look for this panel's id, suffixed with "-dock"
          did = "#" + $(this).attr("id") + "-dock";
        }
        
        if ($(did).length) {
          d.dock = $(did);
        }
        
        if (d.dock) {
          
          d.dock.droppable({
            accept: '#' + el.attr("id"),
            hoverClass: "panel-dock-hl",
            tolerance: "touch",
            drop: function(event, ui) {
              el[pn]('dock');
            },
            out: function(event, ui) {
              // if a panel is droppped out of the dock, it's no longer "docked"
              el[pn]('undock');
            }
          });

        }
      
        // now setup a menu reveal (if there is a trigger)
        
        if (!o.noReveals) {
          d.trigger = el.find(".trigger");
          d.menu_content = el.find(".menu-content");
        
          if (d.trigger.length && d.menu_content.length) {
            d.trigger
              .revealMenuClick({ el: d.menu_content, show: "fadeIn", showOptions: { duration: 0 }, affix: false, hideOnTargetMouseLeave: false })
              .bind("aftershow.reveal", function() {  d.close_buttons.show(); } )
              .bind("afterhide.reveal", function() {  d.close_buttons.hide(); } );
          }
        }
        
        d.close_buttons = el.find("button.close");
        
        // load the initial state of the panel
        el.state({ initial: { docked: true }});
        
        var state = el.state("data");
        
        if (state.docked) {
          el[pn]('dock');
        } else {
          el[pn]('undock');
        }

        if (state.position) {
          el.css(state.position);
        }
        
        
        
        // setup close button
        d.close_buttons
          .click( function(event) {
            if (d.dock) {
              d.dock.removeClass("panel-dock-target");
              el[pn]('dock');
            }
          
            event.stopPropagation();
            event.preventDefault();
          })
          .hover( 
            function(event) {
              if (d.dock) {
                d.dock.addClass("panel-dock-target");
              }
            },
            function(event) {
              if (d.dock) {
                d.dock.removeClass("panel-dock-target");
              }
            }
          );
        
                
      }
      else if (cmd == 'save') {
        el.state('set', { position: el.position() });
      }
      else if (cmd == 'contain') {
        if (!el.hasClass("docked")) {
          var $win = $(window);
          var pos = el.position();

          var minLeft = o.windowInset[0];
          var minTop = o.windowInset[1];
        
          var maxLeft = $win.width() - el.outerWidth() -  o.windowInset[0];
          var maxTop = $win.height() - el.outerHeight() -  o.windowInset[1];

          // setup bounds of the jQuery UI draggable plug-in to prevent dragging outside window 
          el.draggable("option", { containment: [minLeft, minTop, maxLeft, maxTop] });
        
          // ensure draggables are within the window now
          if (pos.top > maxTop) {
            el.css({top: maxTop});
          }
        
          if (pos.top < minTop) {
            el.css({top: minTop});
          }

          if (pos.left > maxLeft) {
            el.css({left: maxLeft});
          }

          if (pos.left < minLeft) {
            el.css({left: minLeft});
          }  
        }
      }
      else if (cmd == 'dock') {
        if (d.dock) {
          var pos = d.dock.position();

          el.animate({ left: pos.left - o.shadowSize, top: pos.top - o.shadowSize}, { duration: ( p.instant ? 0 : "normal" ), easing: "easeOutQuart" })
            .addClass("docked")
            .state('set', { docked: true, position: null } )
            .draggable("option", "distance", 30); 
            
          if (d.trigger) {
            d.trigger.reveal("enable").reveal("hide", {instant: true});
          }

          if (d.close_buttons)
            d.close_buttons.hide();

          el.trigger(pn + ".ondock");
        }
      }
      else if (cmd == 'undock') {
        if (d.dock) {
          el
            .removeClass("docked")
            .state('set', { docked: false })
            .draggable("option", "distance", 5);
            
          el[pn]('contain');
        }
        
        if (d.trigger) {
          d.trigger.reveal("disable", { show: true });
        }
        
        if (!o.noReveals) {
          if (d.close_buttons)
            d.close_buttons.show();
        }
        
      
        el.trigger(pn + ".onundock");
      }
      else if (cmd == 'raise') {
        d.rt = setTimeout( function() {
          el.addClass("dragging");
        }, 200);
      }
      else if (cmd == 'lower') {
        if (d.rt) {
          clearTimeout(d.rt);
        }
      
        setTimeout( function() { el.removeClass("dragging"); }, 100);
      }
      else if (cmd == 'destroy') {
        // remove event handlers, data, and anything else
        el.data(pn, null);
      }

    });
    
  };
  
  $.fn[pn].defaults = defaults;
  
})(jQuery);