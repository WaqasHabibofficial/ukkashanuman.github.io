(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        9182: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects", function() {
                return n(1749)
            }])
        },
        1117: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(5893),
                i = n(7294),
                o = n(9008),
                s = n.n(o),
                c = n(1163),
                l = n(6746),
                a = i.memo(e => {
                    var t, n, o, a, d, u, m, f, h;
                    let {
                        seo: g,
                        defaultSeo: p = {},
                        children: j
                    } = e, {
                        asPath: x
                    } = (0, c.useRouter)(), v = (0, i.useMemo)(() => l._n ? new URL(l._n).host : "", []), _ = {
                        title: g.title || p.title,
                        description: g.description || p.description,
                        image: (null === (t = g.image) || void 0 === t ? void 0 : t.url) || p.image,
                        imgWidth: (null === (o = g.image) || void 0 === o ? void 0 : null === (n = o.dimensions) || void 0 === n ? void 0 : n.width) || (null === (d = p.image) || void 0 === d ? void 0 : null === (a = d.dimensions) || void 0 === a ? void 0 : a.width),
                        imgHeight: (null === (m = g.image) || void 0 === m ? void 0 : null === (u = m.dimensions) || void 0 === u ? void 0 : u.height) || (null === (h = p.image) || void 0 === h ? void 0 : null === (f = h.dimensions) || void 0 === f ? void 0 : f.height),
                        keywords: g.keywords || p.keywords
                    };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(s(), {
                            children: [(0, r.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1"
                            }), _.title && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("title", {
                                    children: _.title
                                }), (0, r.jsx)("meta", {
                                    property: "og:title",
                                    content: _.title
                                }), (0, r.jsx)("meta", {
                                    property: "twitter:title",
                                    content: _.title
                                }), (0, r.jsx)("meta", {
                                    name: "format-detection",
                                    content: "telephone=no email=no, address=no"
                                })]
                            }), _.description && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("meta", {
                                    name: "description",
                                    content: _.description
                                }), (0, r.jsx)("meta", {
                                    property: "og:description",
                                    content: _.description
                                }), (0, r.jsx)("meta", {
                                    property: "twitter:description",
                                    content: _.description
                                })]
                            }), _.image && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("meta", {
                                    property: "og:image",
                                    content: _.image
                                }), (0, r.jsx)("meta", {
                                    name: "twitter:image",
                                    content: _.image
                                }), _.imgWidth && (0, r.jsx)("meta", {
                                    property: "og:image:width",
                                    content: _.imgWidth
                                }), _.imgHeight && (0, r.jsx)("meta", {
                                    property: "og:image:height",
                                    content: _.imgHeight
                                })]
                            }), _.keywords && (0, r.jsx)("meta", {
                                name: "keywords",
                                content: _.keywords
                            }), v && (0, r.jsx)("meta", {
                                property: "twitter:domain",
                                content: v
                            }), l._n && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("meta", {
                                    property: "og:url",
                                    content: "".concat(l._n).concat(x)
                                }), (0, r.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "".concat(l._n).concat(x)
                                })]
                            }), (0, r.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, r.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "/favicon/apple-touch-icon.png"
                            }), (0, r.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "/favicon/favicon-32x32.png"
                            }), (0, r.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "16x16",
                                href: "/favicon/favicon-16x16.png"
                            }), (0, r.jsx)("link", {
                                rel: "mask-icon",
                                href: "/favicon/safari-pinned-tab.svg",
                                color: "#5bbad5"
                            }), (0, r.jsx)("meta", {
                                name: "msapplication-TileColor",
                                content: "#da532c"
                            }), (0, r.jsx)("meta", {
                                name: "theme-color",
                                content: "#ffffff"
                            })]
                        }), j]
                    })
                })
        },
        4548: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(5893),
                i = n(7294),
                o = n(512),
                s = n(6658),
                c = n.n(s),
                l = i.memo(e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, o.Z)(c().root, {
                            className: t
                        }),
                        children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {}), (0, r.jsx)("div", {}), (0, r.jsx)("div", {})]
                    })
                })
        },
        1749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return T
                },
                default: function() {
                    return N
                }
            });
            var r = n(5893),
                i = n(7294),
                o = n(6038),
                s = n(512),
                c = n(6021),
                l = n.n(c),
                a = n(1307),
                d = n(5608),
                u = n(9634),
                m = n(4758),
                f = n(5717),
                h = n(5206),
                g = (e, t, n) => e + (t - e) * n,
                p = (e, t, n, r) => ((e + t) % n + n + r) % n - r,
                j = e => String(e).toLowerCase(),
                x = n(3458),
                v = n.n(x),
                _ = e => {
                    let {
                        mode: t,
                        setMode: n,
                        setToggle: o,
                        currentTargetY: s,
                        targetY: c
                    } = e, l = (0, i.useCallback)(() => {
                        "SMALL" !== t && (n("SMALL"), o(!0), s.current = c.current)
                    }, [s, t, n, o, c]), a = (0, i.useCallback)(() => {
                        "BIG" !== t && (n("BIG"), o(!0), s.current = c.current)
                    }, [s, t, n, o, c]);
                    return (0, r.jsxs)("div", {
                        className: v().root,
                        children: [(0, r.jsxs)("div", {
                            className: v().buttonWrapper,
                            "data-cursor": "",
                            onClick: a,
                            children: [(0, r.jsx)("p", {
                                className: v().buttonTitle,
                                style: {
                                    fontWeight: "BIG" === t ? "800" : "400"
                                },
                                children: "VIEW"
                            }), (0, r.jsx)("button", {
                                type: "button",
                                style: {
                                    backgroundColor: "BIG" === t ? "#000000" : "transparent",
                                    color: "BIG" === t ? "#ffffff" : "inherit"
                                },
                                children: "1"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: v().buttonWrapper,
                            "data-cursor": "",
                            onClick: l,
                            children: [(0, r.jsx)("p", {
                                className: v().buttonTitle,
                                style: {
                                    fontWeight: "SMALL" === t ? "800" : "400"
                                },
                                children: "VIEW"
                            }), (0, r.jsx)("button", {
                                type: "button",
                                style: {
                                    backgroundColor: "SMALL" === t ? "#000000" : "transparent",
                                    color: "SMALL" === t ? "#ffffff" : "inherit"
                                },
                                children: "2"
                            })]
                        })]
                    })
                },
                w = n(8828),
                y = n.n(w),
                E = e => {
                    let {
                        scrollBarRef: t
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            ref: t,
                            className: y().scrollBar
                        }), (0, r.jsx)("div", {
                            className: y().scrollBarBg
                        })]
                    })
                },
                b = n(4548);
            let P = {
                    DESKTOP: 767,
                    TABLET: 477,
                    MOBILE: 412
                },
                k = {
                    DESKTOP: 1325,
                    TABLET: 848,
                    MOBILE: 258
                },
                B = {
                    DESKTOP: 217,
                    TABLET: 276,
                    MOBILE: 157
                };
            var L = i.memo(e => {
                    let {
                        data: t,
                        footer: n
                    } = e, c = (0, i.useRef)(null), x = (0, i.useRef)(null), v = (0, i.useRef)(null), w = (0, i.useRef)([]), L = (0, i.useRef)(null), I = (0, i.useRef)(null), T = (0, i.useRef)(0), N = (0, i.useRef)(0), C = (0, i.useRef)(0), O = (0, i.useRef)(0), S = (0, h.Yi)(), {
                        filterTypes: M,
                        filterStatuses: Z,
                        clearFilterTypes: R,
                        clearFilterStatuses: F
                    } = (0, h.rh)(), {
                        isPageTransition: A
                    } = (0, h.Iu)(), {
                        isLoaded: W
                    } = (0, h.fs)(), [G, H] = (0, i.useState)(1), [Y, D] = (0, i.useState)(1), [V, z] = (0, i.useState)(null), [K, U] = (0, i.useState)("BIG"), [q, X] = (0, i.useState)(!1), [J, Q] = (0, i.useState)(t), $ = P[V] / B[V], ee = (0, i.useMemo)(() => 1 === J.length, [J]), et = (0, i.useMemo)(() => {
                        let e = t.filter(e => !M.length || M.includes(j(e.type))),
                            n = t.filter(e => !Z.length || Z.includes(j(e.status)));
                        return e.filter(e => n.includes(e))
                    }, [t, M, Z]), en = (0, i.useCallback)(() => {
                        let e = P[V] / $,
                            t = Math.ceil(window.innerHeight / e) + 3;
                        if (J.length > 1 && J.length < t) {
                            let e = [];
                            for (; J.length + e.length < t;) e.push(...et);
                            Q(t => [...t, ...e])
                        }
                    }, [J, V, t, M, Z]), er = (0, i.useCallback)(() => {
                        let e = -T.current / (P[V] * et.length) % 1;
                        0 > -T.current && (e += 1), L.current && (L.current.style.height = "".concat(e * ("DESKTOP" === V ? 123 : 96), "rem"))
                    }, [V, et.length]), ei = (0, i.useCallback)(() => {
                        T.current = g(T.current, -N.current, .1), v.current && (w.current = [...v.current.children]), w.current.forEach((e, t) => {
                            var n;
                            let r = P[V],
                                i = e.offsetTop,
                                s = e.offsetHeight,
                                c = null === (n = I.current) || void 0 === n ? void 0 : n.offsetTop,
                                l = J.length,
                                a = p(T.current, r * t, r * l, r);
                            if (ee) {
                                let t = e.getBoundingClientRect().height;
                                e.style.top = "".concat(window.innerHeight / 2 - t / 2, "px")
                            } else e.style.top = "".concat(a / G, "rem");
                            i < c - s / 5 && i >= c - s + s / 5 ? ("true" !== e.children[0].dataset.visible && (e.children[0].dataset.visible = "true", o.ZP.to(e.children[0].children, {
                                yPercent: 0,
                                stagger: .1,
                                ease: "power2.inOut",
                                duration: 1,
                                overwrite: !0
                            })), D(e.id)) : "false" !== e.children[0].dataset.visible && (e.children[0].dataset.visible = "false", o.ZP.to(e.children[0].children, {
                                yPercent: 100,
                                overwrite: !0
                            }))
                        }), er()
                    }, [er, V, J.length, G, ee]), eo = (0, i.useCallback)(() => {
                        if (J.length) {
                            let e = P[V] / Math.round(J.length) * 2;
                            N.current = g(N.current, C.current - e * J.length + e, 1)
                        }
                        H(g(G, P[V] / B[V], .1)), G >= $ - .01 && X(!1)
                    }, [V, J.length, G, $]), es = (0, i.useCallback)(() => {
                        if (J.length) {
                            let e = P[V] / Math.round(J.length) * 2;
                            N.current = g(N.current, C.current + e * J.length - e, 1)
                        }
                        H(g(G, 1, .1)), G <= 1.001 && X(!1)
                    }, [V, J.length, G]);
                    (0, i.useEffect)(() => (o.ZP.ticker.add(ei), document.querySelector("body").style.overflow = "hidden", w.current = [...v.current.children], () => {
                        o.ZP.ticker.remove(ei), document.querySelector("body").style.overflow = "visible"
                    }), [ei]), (0, i.useEffect)(() => (q && ("BIG" === K ? o.ZP.ticker.add(es) : "SMALL" === K && o.ZP.ticker.add(eo)), () => {
                        o.ZP.ticker.remove(eo), o.ZP.ticker.remove(es)
                    }), [es, q, K, eo]), (0, i.useEffect)(() => {
                        H(1), U("BIG")
                    }, [V]), (0, i.useEffect)(() => {
                        S.isDesktop ? z("DESKTOP") : S.isTablet ? z("TABLET") : S.isMobile && z("MOBILE")
                    }, [S]), (0, i.useEffect)(() => {
                        if (ee) return;
                        let e = e => {
                                N.current += e.deltaY * G
                            },
                            t = e => {
                                O.current = e.touches[0].clientY
                            },
                            n = e => {
                                N.current -= (e.touches[0].clientY - O.current) * G * 2, O.current = e.touches[0].clientY
                            };
                        return window.addEventListener("wheel", e), window.addEventListener("touchstart", t), window.addEventListener("touchmove", n), () => {
                            window.removeEventListener("wheel", e), window.removeEventListener("touchstart", t), window.removeEventListener("touchmove", n)
                        }
                    }, [ee, G]), (0, i.useEffect)(() => {
                        en()
                    }, [en]);
                    let ec = (0, i.useCallback)(() => {
                        var e;
                        o.ZP.to(null === (e = v.current) || void 0 === e ? void 0 : e.children, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            opacity: "0",
                            ease: "power4.inOut",
                            duration: 1,
                            stagger: .03,
                            overwrite: !0,
                            onComplete: () => {
                                Q(et)
                            }
                        })
                    }, [et]);
                    return (0, f.Z)(() => {
                        ec()
                    }, Z), (0, f.Z)(() => {
                        ec()
                    }, M), (0, i.useEffect)(() => {
                        W && !A && (m.n.send("update"), o.ZP.to(v.current.children, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            stagger: .03,
                            opacity: 1
                        }))
                    }, [J, W, A]), i.useEffect(() => () => {
                        R(), F()
                    }, [F, R]), i.useEffect(() => {
                        setTimeout(() => {
                            let e = x.current.parentNode,
                                t = 2 * parseFloat(document.documentElement.style.getPropertyValue("font-size"));
                            N.current = -(window.innerHeight / t - e.offsetHeight / t)
                        }, 100)
                    }, []), i.useEffect(() => {}, []), (0, r.jsxs)(a.Z, {
                        footer: n,
                        showFooter: !1,
                        children: [(0, r.jsxs)("div", {
                            className: (0, s.Z)(y().root, {
                                [y().rootOnFront]: !S.isDesktop
                            }),
                            ref: c,
                            children: [(0, r.jsx)("div", {
                                className: y().pageTitle,
                                children: "[ PROJECTS ]"
                            }), (0, r.jsx)("div", {
                                className: y().gallery,
                                ref: v,
                                children: J.map((e, t) => (0, r.jsxs)(u.Z, {
                                    className: y().project,
                                    href: "/project/".concat(e.slug),
                                    id: J.indexOf(e) + 1,
                                    style: {
                                        height: "".concat(P[V] / G, "rem"),
                                        width: "".concat(k[V] / ("MOBILE" === V ? 1 : G), "rem"),
                                        paddingBottom: "MOBILE" === V ? "".concat(12, "rem") : "".concat(32 / G, "rem")
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        className: y().cardInfo,
                                        style: {
                                            color: e.theme ? "".concat(e.theme) : "inherit"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            className: y().infoItem,
                                            children: e.title
                                        }), "BIG" === K && "MOBILE" !== V && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("div", {
                                                className: y().infoItem,
                                                children: e.status
                                            }), (0, r.jsx)("div", {
                                                className: y().infoItem,
                                                children: e.type
                                            }), (0, r.jsx)("div", {
                                                className: y().infoItem,
                                                children: e.location
                                            })]
                                        })]
                                    }), (0, r.jsx)(d.X, {
                                        className: y().picture,
                                        ref: x,
                                        objSource: e.image
                                    })]
                                }, e.slug + t))
                            }), (0, r.jsx)("div", {
                                className: y().imgIndex,
                                children: l()(Y, 3)
                            }), (0, r.jsxs)("div", {
                                className: y().imgCoeff,
                                ref: I,
                                children: [(0, r.jsxs)("div", {
                                    className: y().coeff,
                                    children: [(0, r.jsx)("span", {
                                        children: "/"
                                    }), (0, r.jsx)("span", {
                                        children: l()(et.length, 3)
                                    })]
                                }), (0, r.jsx)(_, {
                                    mode: K,
                                    setMode: U,
                                    setToggle: X,
                                    currentTargetY: C,
                                    targetY: N
                                })]
                            }), (0, r.jsx)(b.Z, {})]
                        }), (0, r.jsx)(E, {
                            scrollBarRef: L
                        })]
                    })
                }),
                I = n(1117),
                T = !0,
                N = (0, i.memo)(e => {
                    let {
                        data: t,
                        seo: n,
                        defaultSeo: i,
                        footer: o
                    } = e;
                    return (0, r.jsx)(I.Z, {
                        seo: n,
                        defaultSeo: i,
                        children: (0, r.jsx)(L, {
                            data: t.projects,
                            footer: o
                        })
                    })
                })
        },
        6658: function(e) {
            e.exports = {
                root: "Borders_root__bxT31"
            }
        },
        3458: function(e) {
            e.exports = {
                root: "ChangeView_root__U1VcY",
                buttonWrapper: "ChangeView_buttonWrapper__qsfmO",
                buttonTitle: "ChangeView_buttonTitle__Uk4_a"
            }
        },
        8828: function(e) {
            e.exports = {
                root: "Projects_root__CYD6z",
                rootOnFront: "Projects_rootOnFront__s1OUF",
                pageTitle: "Projects_pageTitle__SqKLO",
                gallery: "Projects_gallery__APrd3",
                project: "Projects_project__FBn6i",
                scrollBar: "Projects_scrollBar__79edu",
                scrollBarBg: "Projects_scrollBarBg__wAys5",
                imgIndex: "Projects_imgIndex__cdxMg",
                imgCoeff: "Projects_imgCoeff__OVbl_",
                coeff: "Projects_coeff__xbeUH",
                cardInfo: "Projects_cardInfo__Mxds7",
                infoItem: "Projects_infoItem__zzNtc",
                picture: "Projects_picture__sy6EO"
            }
        },
        9008: function(e, t, n) {
            e.exports = n(7828)
        }
    },
    function(e) {
        e.O(0, [35, 307, 888, 774, 179], function() {
            return e(e.s = 9182)
        }), _N_E = e.O()
    }
]);