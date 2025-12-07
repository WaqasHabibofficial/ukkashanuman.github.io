
(function($) { 

  var defaults = {
    modalizeOptions: { css: { backgroundColor: "#FFFFFF", opacity: 0.7 } },
    show: { effect: "fadeIn", duration: 500, easing: "easeOutQuart" },
    hide: { effect: "fadeOut", duration: 500, easing: "easeInQuart" },
    selClose: '.close,.close-large',
    cnShown: 'overlay-shown',
    hideOnUnderlayClick: true,
    hideOnEscapeKey: true
  };
  
  var pn = 'overlay';

  $.fn[pn] = function() {
    
    var ret = this, all = this, cmd, options = {}, params = {}, a = arguments; if (a.length >= 1) { if (typeof(a[0]) == "string") { cmd = a[0]; } else { options = a[0]; } if (a.length >= 2) { params = a[1]; } }
    
    if (this.length) {
      this.each( function() {

        var self, trigger, d, p = params, o = {}, md = {}, el = $(this); if ($.fn.metadata) { md = el.metadata(); } if (!cmd) { d = el.data(pn); if (!d) { d = {}; el.data(pn, d); } $.extend(true, o, defaults, options, md[pn] || md || {} ); d.options = o; } else { d = el.data(pn); if (d) { o = d.options; } else { return; } } self = function() { el[pn].apply(el, arguments); }; trigger = function(n, dt) { return el.trigger(jQuery.Event(pn + n), $.isArray(dt) ? dt : [ dt ] ) !== false; };
   
        if (!cmd) {
          // initialization (no command)

          el.find(o.selClose).click( function() {
            self('hide');
            return false;
          });
        
          if (o.hideOnUnderlayClick) {
            el.bind("modalizeunderlayclick", function() {
              self('hide');
            });
          } 

          el.find(o.selClose).live( "click", function() {
            self('hide');
            return false;
          });

          d.width = el.find("*:first-child").outerWidth();
          
        }
        else if (cmd == 'show') {
          
          var aftershow = function() {
            if (o.show.complete) { 
              o.show.complete(); 
            }
            el.addClass(o.cnShown);
            if (!p.silent) { trigger("aftershow"); }
          };
          
          if (!p.silent) { trigger("beforeshow"); }
          
          el.modalize(o.modalizeOptions);
          
          if (p.instant) {
            
            el.show();
            aftershow();

          } else {
          
            if (o.show.effect == "slideIn") {
              el.css({ left: -d.width - 20 }).show().animate({ left: 0 }, $.extend(true, {}, o.show, { complete: aftershow }));
            } else {
              if ($.ui) {
                el.stop(true)[o.show.effect]($.extend(true, { complete: aftershow }, o.show));

              }
              else {
                el.stop(true)[o.show.effect]($.extend(true, { complete: aftershow }, o.show));
              }
            }
          
          }
          
          
          if (o.hideOnEscapeKey) {
            $(document).one( "keydown", function(event) {
              if (event.keyCode == 27) {
                self('hide');
              }
            });
          }

        }
        else if (cmd == 'hide') {
          var afterhide = function() {

            if (o.hide.complete) { 
              o.hide.complete(); 
            }
            el.hide();
            el.removeClass(o.cnShown);
            if (!p.silent) { trigger("afterhide"); }
          };
          
          if (!p.silent) { trigger("beforehide"); }
          
          el.unmodalize();

          if (p.instant) {
            
            el.hide();
            afterhide();

          } else {
          
            if (o.hide.effect == "slideOut") {
              el.animate({ left: -d.width - 20 }, $.extend(true, {}, o.hide, { complete: afterhide }));
            } else {

              if ($.ui) {
                el.stop(true)[o.hide.effect]($.extend(true, { complete: afterhide }, o.hide));

              }
              else {
                el.stop(true)[o.hide.effect]($.extend(true, { complete: afterhide }, o.hide));
              }

            }
          
          }

        }
        else if (cmd == 'destroy') {
          // remove event handlers, data, and anything else
          el.data(pn, null);
        }

      });
    }

    return ret;
  };
  
  $.fn[pn].defaults = defaults;
  
})(jQuery);