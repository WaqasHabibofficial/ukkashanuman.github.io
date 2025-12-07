(function($) { 

  var defaults = {
    cookie: { prefix: "jqstate", path: "/" },
    autoload: true,
    initial: { }
  };
  
  var pn = 'state';

  $.fn[pn] = function() {
    
    var cmd, options = {}, params = {}, a = arguments; if (a.length >= 1) { if (typeof(a[0]) == "string") { cmd = a[0]; } else { options = a[0]; } if (a.length >= 2) { params = a[1]; } } ret = this;
    
    this.each( function() {

      var cookiename = function() {
        return o.cookie.prefix + el.attr("id");
      };
      
      var d, p = params, o = {}, md = {}, el = $(this); if ($.fn.metadata) { md = el.metadata(); } if (!cmd) { d = el.data(pn); if (!d) { d = {}; el.data(pn, d); } $.extend(true, o, defaults, options, md[pn] || md || {} ); d._options = o; } else { d = el.data(pn); if (d) { o = d._options; } else { return; } }
   
      if (!cmd) {
        $.extend(true, d, o.initial);
        if (o.autoload) {
          el[pn]('load');
        }
      }
      else if (cmd == 'set') {
        $.extend(true, d, p);
        el[pn]('save');
      } 
      else if (cmd == 'get') {
        if (typeof(p) == "string") {
          ret = d[p];
        }
      }
      else if (cmd == 'data') {
        ret = d;
      }
      else if (cmd == 'load') {
        $.extend(true, d, $.parseJSON($.cookie(cookiename()) || "{}"));
      }
      else if (cmd == 'save') {
        $.cookie(cookiename(), $.toJSON(d), o.cookie );
      }
      else if (cmd == 'destroy') {
        // remove event handlers, data, and anything else
        el.data(pn, null);
      }

    });
    
    return ret;
    
  };
  
  $.fn[pn].defaults = defaults;
  
})(jQuery);