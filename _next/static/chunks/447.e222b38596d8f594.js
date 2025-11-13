"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [447], {
        2447: function(e, o, i) {
            i.r(o);
            var l = i(7294),
                s = i(5697),
                t = i(5206);
            let b = e => {
                let {
                    children: o,
                    isMobile: i,
                    isTablet: l,
                    isDesktop: s,
                    isTouchDevice: b
                } = e, u = (0, t.Yi)();
                return u.isMobile === i || u.isTablet === l || u.isDesktop === s || u.isTouchDevice === b ? o : null
            };
            b.propTypes = {
                children: s.any,
                isMobile: s.bool,
                isTablet: s.bool,
                isDesktop: s.bool,
                isTouchDevice: s.bool
            }, o.default = l.memo(b)
        }
    }
]);