(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(4288)
            }])
        },
        1117: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var i = n(5893),
                o = n(7294),
                s = n(9008),
                r = n.n(s),
                c = n(1163),
                a = n(6746),
                l = o.memo(e => {
                    var t, n, s, l, d, m, u, h, p;
                    let {
                        seo: g,
                        defaultSeo: _ = {},
                        children: x
                    } = e, {
                        asPath: j
                    } = (0, c.useRouter)(), f = (0, o.useMemo)(() => a._n ? new URL(a._n).host : "", []), v = {
                        title: g.title || _.title,
                        description: g.description || _.description,
                        image: (null === (t = g.image) || void 0 === t ? void 0 : t.url) || _.image,
                        imgWidth: (null === (s = g.image) || void 0 === s ? void 0 : null === (n = s.dimensions) || void 0 === n ? void 0 : n.width) || (null === (d = _.image) || void 0 === d ? void 0 : null === (l = d.dimensions) || void 0 === l ? void 0 : l.width),
                        imgHeight: (null === (u = g.image) || void 0 === u ? void 0 : null === (m = u.dimensions) || void 0 === m ? void 0 : m.height) || (null === (p = _.image) || void 0 === p ? void 0 : null === (h = p.dimensions) || void 0 === h ? void 0 : h.height),
                        keywords: g.keywords || _.keywords
                    };
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r(), {
                            children: [(0, i.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1"
                            }), v.title && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("title", {
                                    children: v.title
                                }), (0, i.jsx)("meta", {
                                    property: "og:title",
                                    content: v.title
                                }), (0, i.jsx)("meta", {
                                    property: "twitter:title",
                                    content: v.title
                                }), (0, i.jsx)("meta", {
                                    name: "format-detection",
                                    content: "telephone=no email=no, address=no"
                                })]
                            }), v.description && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("meta", {
                                    name: "description",
                                    content: v.description
                                }), (0, i.jsx)("meta", {
                                    property: "og:description",
                                    content: v.description
                                }), (0, i.jsx)("meta", {
                                    property: "twitter:description",
                                    content: v.description
                                })]
                            }), v.image && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("meta", {
                                    property: "og:image",
                                    content: v.image
                                }), (0, i.jsx)("meta", {
                                    name: "twitter:image",
                                    content: v.image
                                }), v.imgWidth && (0, i.jsx)("meta", {
                                    property: "og:image:width",
                                    content: v.imgWidth
                                }), v.imgHeight && (0, i.jsx)("meta", {
                                    property: "og:image:height",
                                    content: v.imgHeight
                                })]
                            }), v.keywords && (0, i.jsx)("meta", {
                                name: "keywords",
                                content: v.keywords
                            }), f && (0, i.jsx)("meta", {
                                property: "twitter:domain",
                                content: f
                            }), a._n && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("meta", {
                                    property: "og:url",
                                    content: "".concat(a._n).concat(j)
                                }), (0, i.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "".concat(a._n).concat(j)
                                })]
                            }), (0, i.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, i.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "/favicon/apple-touch-icon.png"
                            }), (0, i.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "/favicon/favicon-32x32.png"
                            }), (0, i.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "16x16",
                                href: "/favicon/favicon-16x16.png"
                            }), (0, i.jsx)("link", {
                                rel: "mask-icon",
                                href: "/favicon/safari-pinned-tab.svg",
                                color: "#5bbad5"
                            }), (0, i.jsx)("meta", {
                                name: "msapplication-TileColor",
                                content: "#da532c"
                            }), (0, i.jsx)("meta", {
                                name: "theme-color",
                                content: "#ffffff"
                            })]
                        }), x]
                    })
                })
        },
        4548: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var i = n(5893),
                o = n(7294),
                s = n(512),
                r = n(6658),
                c = n.n(r),
                a = o.memo(e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: (0, s.Z)(c().root, {
                            className: t
                        }),
                        children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {})]
                    })
                })
        },
        4288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return W
                },
                default: function() {
                    return F
                }
            });
            var i = n(5893),
                o = n(7294),
                s = n(1307),
                r = n(5206),
                c = n(6038),
                a = n(512),
                l = n(4715),
                d = n(4867),
                m = n.n(d),
                u = o.memo(e => {
                    let {
                        className: t,
                        children: n
                    } = e, s = o.useRef(), r = o.useRef(null);
                    return (0, l.V)(() => {
                        let e = c.ZP.utils.toArray("section"),
                            t = c.ZP.utils.toArray("img");
                        r.current = c.ZP.to(e, {
                            xPercent: -100 * (e.length - 1),
                            ease: "none",
                            scrollTrigger: {
                                trigger: s.current,
                                pin: !0,
                                scrub: 1,
                                end: () => window.innerWidth * (e.length - 1),
                                invalidateOnRefresh: !0,
                                snap: {
                                    snapTo: 1 / (e.length - 1),
                                    delay: .05,
                                    duration: .3,
                                    ease: "power3.out",
                                    directional: !1
                                }
                            }
                        }), t.forEach(e => {
                            c.ZP.to(e, {
                                keyframes: {
                                    xPercent: [-30, 30],
                                    easeEach: "none"
                                },
                                ease: "none",
                                scrollTrigger: {
                                    trigger: e.parentNode,
                                    start: "left right",
                                    end: "right left",
                                    scrub: !0,
                                    invalidateOnRefresh: !0,
                                    containerAnimation: r.current
                                }
                            })
                        })
                    }, {
                        scope: s,
                        dependencies: []
                    }), (0, i.jsx)("div", {
                        className: (0, a.Z)(m().root, t),
                        ref: s,
                        children: n
                    })
                }),
                h = n(9332),
                p = n(5608),
                g = n(4758),
                _ = n(8258),
                x = n.n(_),
                j = o.memo(e => {
                    let {
                        items: t,
                        tickers: n,
                        currentIndex: s
                    } = e, r = (0, h.useRouter)();
                    (0, l.V)(() => {
                        let e = () => {
                                c.ZP.to(".".concat(x().tags), {
                                    y: 0
                                })
                            },
                            t = () => {
                                c.ZP.to(".".concat(x().tags), {
                                    yPercent: 100
                                })
                            };
                        return g.$.on("pageTransitionEnter", e), g.$.on("pageTransitionExit", t), () => {
                            g.$.off("pageTransitionEnter", e), g.$.off("pageTransitionExit", t)
                        }
                    });
                    let d = o.useCallback(e => {
                            r.push("/project/".concat(e), {
                                scroll: !1
                            })
                        }, [r]),
                        m = o.useCallback(() => {
                            g.n.send("type", {
                                type: "text",
                                value: "view project"
                            })
                        }, []),
                        u = o.useCallback(() => {
                            g.n.send("clear")
                        }, []);
                    return o.useEffect(() => () => {
                        g.n.send("clear")
                    }, []), t.map((e, t) => (0, i.jsxs)("section", {
                        id: e.slug,
                        className: x().section,
                        onClick: () => d(e.slug),
                        onMouseMove: m,
                        onMouseEnter: m,
                        onMouseLeave: u,
                        children: [(0, i.jsx)("div", {
                            className: x().tagsWrapper,
                            children: (0, i.jsxs)("div", {
                                className: (0, a.Z)(x().tags, x()["theme-".concat(e.theme)], {
                                    [x().tagsVisible]: s === t
                                }),
                                children: [e.title && (0, i.jsx)("span", {
                                    style: {
                                        "--i": 1
                                    },
                                    children: e.title
                                }), e.status && (0, i.jsx)("span", {
                                    style: {
                                        "--i": 2
                                    },
                                    children: e.status
                                }), e.type && (0, i.jsx)("span", {
                                    style: {
                                        "--i": 3
                                    },
                                    children: e.type
                                }), e.location && (0, i.jsx)("span", {
                                    style: {
                                        "--i": 4
                                    },
                                    children: e.location
                                })]
                            })
                        }), (0, i.jsx)(p.X, {
                            className: (0, a.Z)(x().img, {
                                [x().show]: !n
                            }),
                            objSource: e.image,
                            alt: e.title
                        })]
                    }, e.slug))
                }),
                f = n(8682),
                v = n.n(f),
                k = o.memo(e => {
                    let {
                        items: t,
                        currentIndex: n,
                        isLoaded: s
                    } = e, r = o.useRef(n);
                    return (0, l.V)(() => {
                        if (!s) return null;
                        let e = r.current;
                        e !== n && (c.ZP.to(document.querySelector('[data-section-index="'.concat(e, '"]')), {
                            y: "-100%",
                            overwrite: !0
                        }), r.current = n), c.ZP.to(document.querySelector('[data-section-index="'.concat(n, '"]')), {
                            y: 0,
                            duration: .75,
                            ease: "power2.out",
                            overwrite: !0
                        })
                    }, {
                        dependencies: [n, s]
                    }), (0, i.jsx)("div", {
                        className: v().tickers,
                        children: t.map((e, t) => {
                            let {
                                title: n,
                                theme: o
                            } = e;
                            return (0, i.jsx)("section", {
                                className: (0, a.Z)(v().section, v()["theme-".concat(o)]),
                                children: (0, i.jsx)("div", {
                                    className: v().heading,
                                    children: (0, i.jsx)("h1", {
                                        "data-section-index": t,
                                        className: v().headingTitle,
                                        children: n
                                    })
                                })
                            }, n)
                        })
                    })
                }),
                y = n(4548),
                w = n(3807),
                N = n(3461);
            let T = (e, t, n) => Math.min(Math.max(e, t), n);
            var b = n(3922),
                Z = n.n(b);
            let P = e => {
                let {
                    items: t,
                    currentIndex: n,
                    onClick: o
                } = e;
                return (0, i.jsx)("ul", {
                    className: Z().items,
                    children: t.map((e, t) => (0, i.jsx)("li", {
                        className: (0, a.Z)({
                            [Z().current]: n === t
                        }),
                        children: (0, i.jsx)("button", {
                            type: "button",
                            onClick: () => o(t),
                            children: t + 1
                        })
                    }, e.slug))
                })
            };
            var E = o.memo(e => {
                    let {
                        items: t,
                        currentIndex: n,
                        setCurrentIndex: s
                    } = e, r = (0, w.LZ)(), c = o.useMemo(() => t[n].theme, [n, t]), l = o.useCallback(() => {
                        s(Math.round(T(0, t.length - 1, ((null == r ? void 0 : r.actualScroll) || 1) / window.innerWidth)))
                    }, [t.length, null == r ? void 0 : r.actualScroll, s]), d = o.useCallback(e => {
                        r.scrollTo(window.innerWidth * e)
                    }, [r]);
                    return o.useEffect(() => (null == r || r.on("scroll", l), () => {
                        null == r || r.off("scroll", l)
                    }), [r, l]), (0, N.Z)("resize", l), (0, i.jsxs)("div", {
                        className: (0, a.Z)(Z().root, Z()["theme-".concat(c)]),
                        children: [(0, i.jsx)("div", {
                            className: Z().title,
                            children: "[ FEATURED PROJECTS ]"
                        }), (0, i.jsx)(P, {
                            items: t,
                            currentIndex: n,
                            onClick: d
                        })]
                    })
                }),
                S = n(2786),
                C = n.n(S),
                M = o.memo(e => {
                    let {
                        projects: t,
                        footer: n
                    } = e, {
                        isLoaded: c
                    } = (0, r.fs)(), [a, l] = o.useState(0);
                    return (0, i.jsxs)(s.Z, {
                        footer: n,
                        syncTouchLerp: .05,
                        children: [(0, i.jsx)(u, {
                            children: (0, i.jsx)(j, {
                                items: t,
                                currentIndex: a
                            })
                        }), (0, i.jsxs)(u, {
                            className: C().tickersSticky,
                            children: [(0, i.jsx)(E, {
                                items: t,
                                currentIndex: a,
                                setCurrentIndex: l
                            }), (0, i.jsx)(k, {
                                items: t,
                                currentIndex: a,
                                isLoaded: c
                            }), (0, i.jsx)(y.Z, {})]
                        })]
                    })
                }),
                R = n(1117),
                W = !0,
                F = (0, o.memo)(e => {
                    let {
                        data: t,
                        footer: n,
                        seo: o,
                        defaultSeo: s
                    } = e;
                    return (0, i.jsx)(R.Z, {
                        seo: o,
                        defaultSeo: s,
                        children: (0, i.jsx)(M, {
                            footer: n,
                            projects: t.home.projects
                        })
                    })
                })
        },
        6658: function(e) {
            e.exports = {
                root: "Borders_root__bxT31"
            }
        },
        2786: function(e) {
            e.exports = {
                root: "Home_root__hpP3d",
                tickersSticky: "Home_tickersSticky__sM2tq",
                info: "Home_info__YM4DK"
            }
        },
        3922: function(e) {
            e.exports = {
                root: "Navigation_root__fh4Lk",
                "theme-black": "Navigation_theme-black__ZlU1p",
                title: "Navigation_title__ZB1sS",
                items: "Navigation_items__2n6I4",
                current: "Navigation_current__hEM_p"
            }
        },
        8258: function(e) {
            e.exports = {
                section: "Projects_section__O349f",
                link: "Projects_link__ZjskS",
                tagsWrapper: "Projects_tagsWrapper__cPAqz",
                tags: "Projects_tags__iGwSF",
                tagsVisible: "Projects_tagsVisible__ETpJE",
                "theme-black": "Projects_theme-black__2UmTZ",
                img: "Projects_img__nF2qf",
                show: "Projects_show__pe_Uu"
            }
        },
        4867: function(e) {
            e.exports = {
                root: "Sticky_root__Awy_L"
            }
        },
        8682: function(e) {
            e.exports = {
                section: "Tickers_section__qoEzu",
                heading: "Tickers_heading__ee_9z",
                headingTitle: "Tickers_headingTitle__0KTGg",
                "theme-black": "Tickers_theme-black__HD3_c",
                tickers: "Tickers_tickers__jGRxd",
                ticker: "Tickers_ticker__Y3jlj"
            }
        },
        9008: function(e, t, n) {
            e.exports = n(7828)
        }
    },
    function(e) {
        e.O(0, [35, 307, 888, 774, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);