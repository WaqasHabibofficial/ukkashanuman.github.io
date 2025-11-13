(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        1012: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return s(2388)
            }])
        },
        7331: function(e, t, s) {
            "use strict";
            var i = s(5893),
                r = s(7294),
                n = s(6038);
            t.Z = r.memo(e => {
                let {
                    as: t = "div",
                    query: s,
                    isVisible: o,
                    children: l,
                    enter: a,
                    initial: c,
                    ...d
                } = e, [p, m] = r.useState(!1), _ = r.useRef(null), u = r.useCallback(() => {
                    let e = s ? _.current.querySelectorAll(s) : _.current;
                    n.ZP.to(e, { ...a,
                        overwrite: !0
                    })
                }, [a, s]);
                return r.useEffect(() => {
                    o && !p && (u(), m(!0))
                }, [u, o, p]), r.useEffect(() => {
                    let e = s ? _.current.querySelectorAll(s) : _.current;
                    n.ZP.set(e, { ...c
                    })
                }, [c, s]), (0, i.jsx)(t, { ...d,
                    ref: _,
                    children: l
                })
            })
        },
        1859: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i.Z
                }
            });
            var i = s(8789)
        },
        7589: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = s(5893),
                r = s(7294),
                n = s(5697),
                o = s(5772),
                l = s(5206);
            let a = e => {
                let {
                    as: t = "div",
                    prop: s = "isVisible",
                    topOffset: n,
                    bottomOffset: a,
                    onViewChange: c,
                    horizontal: d,
                    children: p,
                    ...m
                } = e, [_, u] = r.useState(!1), {
                    isPageTransition: x
                } = (0, l.Iu)(), h = r.useCallback(() => {
                    !1 === x && u(!0)
                }, [x]), j = r.useCallback(() => {
                    u(!1)
                }, []);
                return r.useEffect(() => {
                    c && c(_)
                }, [_, c]), (0, i.jsx)(o.h, {
                    topOffset: n,
                    bottomOffset: a,
                    horizontal: d,
                    onEnter: h,
                    onLeave: j,
                    children: (0, i.jsx)(t, { ...m,
                        children: r.cloneElement(p, {
                            [s]: _
                        })
                    })
                })
            };
            a.propTypes = {
                prop: n.string,
                topOffset: (0, n.oneOfType)([n.number, n.string]),
                bottomOffset: (0, n.oneOfType)([n.number, n.string])
            };
            var c = r.memo(a)
        },
        1117: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = s(5893),
                r = s(7294),
                n = s(9008),
                o = s.n(n),
                l = s(1163),
                a = s(6746),
                c = r.memo(e => {
                    var t, s, n, c, d, p, m, _, u;
                    let {
                        seo: x,
                        defaultSeo: h = {},
                        children: j
                    } = e, {
                        asPath: f
                    } = (0, l.useRouter)(), g = (0, r.useMemo)(() => a._n ? new URL(a._n).host : "", []), v = {
                        title: x.title || h.title,
                        description: x.description || h.description,
                        image: (null === (t = x.image) || void 0 === t ? void 0 : t.url) || h.image,
                        imgWidth: (null === (n = x.image) || void 0 === n ? void 0 : null === (s = n.dimensions) || void 0 === s ? void 0 : s.width) || (null === (d = h.image) || void 0 === d ? void 0 : null === (c = d.dimensions) || void 0 === c ? void 0 : c.width),
                        imgHeight: (null === (m = x.image) || void 0 === m ? void 0 : null === (p = m.dimensions) || void 0 === p ? void 0 : p.height) || (null === (u = h.image) || void 0 === u ? void 0 : null === (_ = u.dimensions) || void 0 === _ ? void 0 : _.height),
                        keywords: x.keywords || h.keywords
                    };
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o(), {
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
                            }), g && (0, i.jsx)("meta", {
                                property: "twitter:domain",
                                content: g
                            }), a._n && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("meta", {
                                    property: "og:url",
                                    content: "".concat(a._n).concat(f)
                                }), (0, i.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "".concat(a._n).concat(f)
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
                        }), j]
                    })
                })
        },
        2388: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return ex
                },
                default: function() {
                    return eh
                }
            });
            var i = s(5893),
                r = s(7294),
                n = s(1307),
                o = s(3807),
                l = s(6038),
                a = s(1576),
                c = s(512),
                d = s(6722),
                p = s.n(d),
                m = r.memo(e => {
                    let {
                        className: t,
                        onClick: s
                    } = e;
                    return (0, i.jsx)("button", {
                        type: "button",
                        className: (0, c.Z)(p().root, t),
                        onClick: s,
                        children: (0, i.jsx)("span", {
                            children: "[X]"
                        })
                    })
                }),
                _ = s(2563),
                u = s.n(_),
                x = e => {
                    let {
                        word: t,
                        descriprion: s,
                        text: n,
                        index: c
                    } = e, [d, p] = (0, r.useState)(!1), _ = (0, r.useRef)(null), x = (0, r.useRef)(), h = (0, r.useRef)(null), j = (0, o.LZ)();
                    return (0, r.useEffect)(() => {
                        j && (j[d ? "stop" : "start"](), _.current[d ? "play" : "reverse"]())
                    }, [d, j]), (0, a.Z)(x, () => p(!1), d), (0, r.useEffect)(() => {
                        let e = h.current;
                        return _.current = l.ZP.timeline({
                            poused: !0
                        }).fromTo(e, {
                            opacity: 0,
                            display: "none"
                        }, {
                            opacity: 1,
                            display: "block"
                        }), () => {
                            _.current.kill()
                        }
                    }, []), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: u().windowWrapper,
                            style: {
                                display: d ? "block" : "none"
                            },
                            ref: h,
                            children: (0, i.jsxs)("div", {
                                className: u().window,
                                ref: x,
                                children: [(0, i.jsxs)("div", {
                                    className: u().windowTitle,
                                    children: [(0, i.jsx)(m, {
                                        onClick: () => p(!1)
                                    }), (0, i.jsx)("h3", {
                                        children: "[ ".concat(s, " ]")
                                    }), (0, i.jsx)("span", {
                                        className: u().index,
                                        children: "[00-".concat(c, "]")
                                    })]
                                }), (0, i.jsx)("p", {
                                    className: u().windowDescription,
                                    children: n
                                })]
                            })
                        }), (0, i.jsxs)("span", {
                            className: u().root,
                            children: [(0, i.jsx)("span", {
                                children: "".concat(t)
                            }), (0, i.jsx)("div", {
                                className: u().mask,
                                children: (0, i.jsx)("button", {
                                    className: u().popupButton,
                                    type: "button",
                                    onClick: () => p(!0),
                                    children: (0, i.jsxs)("div", {
                                        className: u().buttonText,
                                        children: [(0, i.jsx)("span", {
                                            className: u().buttonTitle,
                                            children: "i"
                                        }), (0, i.jsx)("span", {
                                            className: u().hiddenText,
                                            children: s
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                },
                h = s(7331),
                j = s(5206),
                f = s(6546),
                g = s.n(f),
                v = s(1637),
                w = s(7929),
                y = s.n(w),
                b = e => {
                    let {
                        videoContent: t
                    } = e, s = (0, r.useRef)(), n = (0, r.useRef)(), o = (0, r.useRef)(), a = (0, r.useRef)(), [c, d] = (0, r.useState)({
                        first: !1,
                        second: !1
                    }), [p, m] = (0, r.useState)(1), {
                        isMobile: _,
                        isTablet: u
                    } = (0, j.Yi)(), [x, h] = (0, r.useState)({
                        width: 0,
                        height: 0,
                        padding: "0 25rem 0 0 ",
                        multipl: 1,
                        bottom: "27rem"
                    }), f = (0, r.useCallback)(() => {
                        m((0, v.t)()), h({
                            width: 534 / window.innerWidth * 100,
                            height: 333 / window.innerHeight * 100,
                            padding: "0 25rem 0 0 ",
                            multipl: (0, v.t)(),
                            bottom: "27rem"
                        }), u ? h({
                            width: 499 / window.innerWidth * 100,
                            height: 311 / window.innerHeight * 100,
                            padding: "0 25rem 0 0 ",
                            multipl: (0, v.t)(),
                            bottom: "27rem"
                        }) : _ && h({
                            width: 100,
                            height: 217 / window.innerHeight * 100,
                            padding: "0 15rem",
                            multipl: 1,
                            bottom: "15rem"
                        })
                    }, [_, u]), w = (e, t) => {
                        d(s => ({ ...s,
                            [e]: t
                        }))
                    };
                    return (0, r.useEffect)(() => (f(), window.addEventListener("resize", () => {
                        f()
                    }), () => {
                        window.removeEventListener("resize", () => {
                            f()
                        })
                    }), [f]), (0, r.useEffect)(() => {
                        let e = g().create({
                                trigger: o.current,
                                start: "top bottom",
                                end: "bottom bottom",
                                onEnter: () => w("first", !0),
                                onEnterBack: () => w("first", !0),
                                onLeave: () => w("first", !1),
                                onLeaveBack: () => w("first", !1)
                            }),
                            t = g().create({
                                trigger: a.current,
                                start: "top bottom",
                                end: "bottom bottom",
                                onEnter: () => w("second", !0),
                                onEnterBack: () => w("second", !0),
                                onLeave: () => w("second", !1),
                                onLeaveBack: () => w("second", !1)
                            }),
                            i = l.ZP.timeline({
                                scrollTrigger: {
                                    trigger: n.current,
                                    scrub: 0,
                                    start: "top bottom",
                                    end: "bottom bottom"
                                }
                            }).fromTo(s.current, {
                                width: "".concat(x.width * x.multipl, "vw"),
                                height: "".concat(x.height * x.multipl, "vh"),
                                padding: "".concat(x.padding),
                                bottom: "".concat(x.bottom)
                            }, {
                                width: "100vw",
                                height: "100vh",
                                padding: 0,
                                bottom: "0"
                            }, "<");
                        return () => {
                            e.kill(), t.kill(), i.kill()
                        }
                    }, [p, x.bottom, x.height, x.multipl, x.padding, x.width]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: y().section,
                            ref: n,
                            children: (0, i.jsx)("div", {
                                className: y().textInWrapper,
                                style: {
                                    opacity: c.first ? "1" : "0",
                                    pointerEvents: c.first ? "auto" : "none"
                                },
                                children: (0, i.jsx)("p", {
                                    className: y().textIn,
                                    children: t.text1
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: y().section,
                            ref: o
                        }), (0, i.jsx)("div", {
                            className: y().section,
                            ref: a,
                            children: (0, i.jsx)("div", {
                                className: y().textInWrapper,
                                style: {
                                    opacity: c.second ? "1" : "0",
                                    pointerEvents: c.second ? "auto" : "none"
                                },
                                children: (0, i.jsx)("p", {
                                    className: y().textIn,
                                    children: t.text2
                                })
                            })
                        }), (0, i.jsx)("video", {
                            ref: s,
                            autoPlay: !0,
                            playsInline: !0,
                            loop: !0,
                            muted: !0,
                            className: y().video,
                            children: (0, i.jsx)("source", {
                                src: t.link.url,
                                type: "video/mp4"
                            })
                        })]
                    })
                },
                N = s(443),
                T = s.n(N);
            let k = {
                    opacity: 0,
                    y: "110%"
                },
                W = {
                    y: 0,
                    stagger: .015,
                    opacity: 1,
                    delay: .3,
                    ease: "power2.out"
                };
            var C = e => {
                    let {
                        content: t
                    } = e, s = (0, o.LZ)(), {
                        isLoaded: n
                    } = (0, j.fs)(), l = (0, r.useCallback)(e => {
                        let t = document.querySelector("#".concat(e.toLowerCase()));
                        s.scrollTo(t.getBoundingClientRect().bottom, {
                            duration: 2
                        })
                    }, [s]);
                    return (0, i.jsxs)("div", {
                        className: T().rootWrapper,
                        children: [(0, i.jsxs)("div", {
                            className: T().root,
                            children: [(0, i.jsx)("span", {
                                className: T().titleLeft,
                                children: t.title.left
                            }), (0, i.jsx)("span", {
                                className: T().titleRight,
                                children: t.title.right
                            }), (0, i.jsx)("div", {
                                className: T().titleTextWrapper,
                                children: (0, i.jsx)(h.Z, {
                                    className: T().titleText,
                                    query: "span",
                                    initial: k,
                                    enter: W,
                                    isVisible: n,
                                    children: t.textTitle.split(" ").map((e, s) => {
                                        if (t.words.includes(e)) {
                                            let r = t.words.indexOf(e);
                                            return (0, i.jsx)(x, {
                                                index: r + 1,
                                                word: e,
                                                descriprion: t.popupTitles[r],
                                                text: t.descriptions[r]
                                            }, s)
                                        }
                                        return (0, i.jsx)("div", {
                                            className: T().word,
                                            children: (0, i.jsx)("span", {
                                                children: "".concat(e, " ")
                                            })
                                        }, s)
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: T().navWrapper,
                                children: (0, i.jsx)("div", {
                                    className: T().nav,
                                    children: t.navigation.map(e => (0, i.jsxs)("button", {
                                        className: T().navItem,
                                        type: "button",
                                        onClick: () => l(e.title),
                                        children: [(0, i.jsx)("span", {
                                            className: T().squere
                                        }), (0, i.jsx)("span", {
                                            className: T().text,
                                            children: e.title
                                        })]
                                    }, e.title))
                                })
                            })]
                        }), (0, i.jsx)(b, {
                            videoContent: t.video
                        })]
                    })
                },
                E = s(1859),
                Z = s(5608),
                H = s(2418),
                L = s(6590),
                P = s.n(L),
                S = r.memo(e => {
                    let {
                        img: t,
                        title: s,
                        subtitle: n,
                        text: o,
                        setPopup: l,
                        isShowPopup: d
                    } = e, p = (0, H.Z)({
                        popup: r.createRef()
                    }), _ = r.useCallback(() => {
                        l(!1)
                    }, [l]);
                    return (0, a.Z)(p.popup, _, d), (0, i.jsx)("div", {
                        className: (0, c.Z)(P().root, {
                            [P().visible]: d
                        }),
                        children: (0, i.jsxs)("div", {
                            className: P().popup,
                            ref: p.popup,
                            "data-lenis-prevent": "",
                            children: [(0, i.jsx)(m, {
                                className: P().closeButton,
                                onClick: () => l(!1)
                            }), (0, i.jsxs)("div", {
                                className: P().content,
                                children: [(0, i.jsx)("div", {
                                    className: P().image,
                                    children: (0, i.jsx)(Z.X, {
                                        objSource: t
                                    })
                                }), (0, i.jsx)("h2", {
                                    className: P().title,
                                    children: s
                                }), (0, i.jsx)(E.Z, {
                                    as: "h3",
                                    className: P().subtitle,
                                    content: n
                                }), (0, i.jsx)("div", {
                                    className: P().bio,
                                    children: "[BIO]"
                                }), (0, i.jsx)("div", {
                                    className: P().text,
                                    children: (0, i.jsx)(E.Z, {
                                        content: o
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: P().brackets,
                                    children: [(0, i.jsx)("div", {
                                        children: "["
                                    }), (0, i.jsx)("div", {
                                        children: "]"
                                    })]
                                })]
                            })]
                        })
                    })
                });
            let A = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, i.jsx)("svg", { ...r,
                    ref: t,
                    className: s,
                    width: "330",
                    height: "100%",
                    viewBox: "0 0 330 439",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "none",
                    children: (0, i.jsxs)("g", {
                        children: [(0, i.jsx)("mask", {
                            id: "path-1-inside-1_991_985",
                            fill: "white",
                            children: (0, i.jsx)("path", {
                                d: "M0.171875 0.0332031H329.182V438.35H0.171875V0.0332031Z"
                            })
                        }), (0, i.jsx)("path", {
                            d: "M-0.228006 0.333362L328.782 438.65L329.582 438.05L0.571756 -0.266956L-0.228006 0.333362ZM0.571756 438.65L329.582 0.333362L328.782 -0.266956L-0.228006 438.05L0.571756 438.65ZM0.171875 0.0332031V-0.966797H-0.828125V0.0332031H0.171875ZM329.182 0.0332031H330.182V-0.966797H329.182V0.0332031ZM329.182 438.35V439.35H330.182V438.35H329.182ZM0.171875 438.35H-0.828125V439.35H0.171875V438.35ZM0.171875 1.0332H329.182V-0.966797H0.171875V1.0332ZM328.182 0.0332031V438.35H330.182V0.0332031H328.182ZM329.182 437.35H0.171875V439.35H329.182V437.35ZM1.17188 438.35V0.0332031H-0.828125V438.35H1.17188Z",
                            fill: "currentColor",
                            mask: "url(#path-1-inside-1_991_985)"
                        })]
                    })
                })
            });
            var I = r.memo(A),
                R = s(162),
                B = s.n(R),
                V = e => {
                    let {
                        img: t,
                        title: s,
                        subtitle: n,
                        text: a
                    } = e, [c, d] = (0, r.useState)(!1), p = (0, r.useRef)(), m = (0, r.useRef)(), _ = (0, r.useRef)(), u = (0, o.LZ)();
                    return (0, r.useEffect)(() => {
                        u && (c ? (u.stop(), _.current.play()) : (u.start(), _.current.reverse()))
                    }, [u, c]), (0, r.useEffect)(() => {
                        _.current = l.ZP.timeline({
                            poused: !0
                        }).fromTo(p.current, {
                            opacity: 1
                        }, {
                            opacity: 0
                        }).fromTo(m.current, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, "<")
                    }, []), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(S, {
                            setPopup: d,
                            img: t,
                            title: s,
                            subtitle: n,
                            text: a,
                            isShowPopup: c
                        }, s), (0, i.jsxs)("button", {
                            type: "button",
                            className: B().root,
                            onClick: () => d(!0),
                            children: [(0, i.jsxs)("div", {
                                className: B().imgWrapper,
                                children: [(0, i.jsx)(Z.X, {
                                    ref: p,
                                    className: B().image,
                                    alt: s,
                                    objSource: t
                                }), (0, i.jsx)(I, {
                                    ref: m,
                                    className: B().placeholder
                                })]
                            }), (0, i.jsxs)("div", {
                                className: B().text,
                                children: [(0, i.jsx)("h4", {
                                    className: B().cardTitle,
                                    children: s
                                }), (0, i.jsx)(E.Z, {
                                    className: B().cardSubtitle,
                                    content: n
                                })]
                            })]
                        })]
                    })
                },
                M = s(6314),
                O = s.n(M),
                G = e => {
                    let {
                        content: t
                    } = e;
                    return (0, i.jsxs)("section", {
                        className: O().root,
                        id: "team",
                        children: [(0, i.jsx)("h3", {
                            className: O().title,
                            children: t.title
                        }), (0, i.jsx)("div", {
                            className: O().teamList,
                            children: t.cards.map(e => (0, i.jsx)(V, {
                                img: e.img,
                                title: e.title,
                                subtitle: e.subtitle,
                                text: e.bio
                            }, e.title))
                        })]
                    })
                },
                D = s(9634),
                F = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: "45",
                        height: "45",
                        viewBox: "0 0 45 45",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t,
                        children: (0, i.jsx)("path", {
                            d: "M1.17871 1.19922H43.8487M43.8487 1.19922V43.8728M43.8487 1.19922L1.17871 43.8728",
                            stroke: "#211D1D"
                        })
                    })
                },
                q = s(1305),
                U = s.n(q),
                X = e => {
                    let {
                        content: t
                    } = e;
                    return (0, i.jsxs)("section", {
                        className: U().root,
                        id: "careers",
                        children: [(0, i.jsx)("div", {
                            className: U().titleWrapper,
                            children: (0, i.jsx)("h2", {
                                className: U().title,
                                children: t.textTitle
                            })
                        }), (0, i.jsxs)("div", {
                            className: U().info,
                            children: [(0, i.jsx)("p", {
                                className: U().subtitle,
                                children: t.title
                            }), (0, i.jsxs)(D.Z, {
                                href: t.button.link.url,
                                className: U().positions,
                                blank: !0,
                                children: [(0, i.jsx)("span", {
                                    children: t.button.title
                                }), (0, i.jsx)("div", {
                                    className: U().iconContainer,
                                    children: (0, i.jsx)(F, {
                                        className: U().icon
                                    })
                                })]
                            }), (0, i.jsx)(E.Z, {
                                className: U().text,
                                content: t.emailText
                            })]
                        })]
                    })
                },
                z = s(4715),
                K = s(4349),
                Y = s(7589),
                J = s(4758),
                Q = s(1742),
                $ = s.n(Q),
                ee = e => {
                    let {
                        onOpenGallery: t,
                        openGallery: s,
                        images: n,
                        current: o
                    } = e, {
                        isTouchDevice: a
                    } = (0, j.Yi)(), [c, d] = (0, r.useState)(0), p = (0, r.useRef)(), m = (0, r.useRef)();
                    return (0, r.useEffect)(() => (m.current = l.ZP.timeline({
                        poused: !0
                    }).fromTo(p.current, {
                        opacity: 0,
                        display: "none"
                    }, {
                        opacity: 1,
                        display: "block"
                    }), () => {
                        m.current.kill()
                    }), [t]), (0, r.useEffect)(() => {
                        s ? m.current.play() : m.current.reverse()
                    }, [s]), r.useEffect(() => {
                        let e = (null == n ? void 0 : n.length) || 1,
                            t = t => {
                                let {
                                    clientX: i
                                } = t;
                                (!a || s) && d(Math.floor(i / (window.innerWidth / e)))
                            };
                        return window.addEventListener("mousemove", t), () => {
                            window.removeEventListener("mousemove", t)
                        }
                    }, [n, s, a]), r.useEffect(() => {
                        let e = null == n ? void 0 : n.length,
                            t = () => {
                                if (!s) return null;
                                d(t => (t + 1) % e)
                            };
                        return window.addEventListener("touchstart", t), () => {
                            window.removeEventListener("touchstart", t)
                        }
                    }, [n, s]), r.useEffect(() => (s && setTimeout(() => {
                        J.n.send("type", {
                            type: "text",
                            value: "close gallery"
                        })
                    }, 100), () => {
                        J.n.send("clear")
                    }), [s]), r.useEffect(() => {
                        let e = () => {
                            t(!1)
                        };
                        return s && (window.addEventListener("mousedown", e), window.addEventListener("touchstart", e)), () => {
                            window.removeEventListener("mousedown", e), window.removeEventListener("touchstart", e)
                        }
                    }, [s, t]), (0, i.jsx)("div", {
                        className: $().rootWrapper,
                        ref: p,
                        children: (0, i.jsx)("div", {
                            className: $().root,
                            children: (0, i.jsx)("div", {
                                className: $().imageWrapper,
                                children: n.map((e, t) => (0, i.jsx)("img", {
                                    className: $().popupImg,
                                    style: {
                                        opacity: t === c ? "1" : "0"
                                    },
                                    src: e[o].url,
                                    alt: c
                                }, e[o].url))
                            })
                        })
                    })
                },
                et = s(2610),
                es = s.n(et);
            let ei = e => {
                    let {
                        title: t,
                        subtitle: s
                    } = e;
                    return (0, i.jsxs)("h2", {
                        className: es().title,
                        children: [(0, i.jsx)("span", {
                            children: t
                        }), (0, i.jsx)("span", {
                            children: s
                        })]
                    })
                },
                er = e => {
                    let {
                        content: t,
                        isVisible: s,
                        onChange: r
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: (0, c.Z)(s ? "visible" : "invisible"),
                        onClick: () => r(!0),
                        "data-cursor": "",
                        children: [(0, i.jsxs)("div", {
                            className: es().galleryTitle,
                            children: [(0, i.jsx)("p", {
                                className: es().galleryTitleItem,
                                children: t.gallery.title.left
                            }), (0, i.jsx)("p", {
                                className: es().galleryTitleItem,
                                children: t.gallery.title.right
                            })]
                        }), (0, i.jsx)(Z.X, {
                            objSource: t.gallery.mainImg
                        })]
                    })
                },
                en = e => {
                    let {
                        isVisible: t,
                        onChange: s
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: (0, c.Z)(es().imageCloseGallery, t ? "visible" : "invisible"),
                        onClick: () => s(!1),
                        children: [(0, i.jsx)(K.Z, {
                            isDesktop: !1,
                            children: (0, i.jsx)("div", {
                                className: es().textCloseGallery,
                                children: "CLOSE GALLERY"
                            })
                        }), (0, i.jsx)("img", {
                            src: "/images/About/imageCloseGallery.png",
                            alt: "cross"
                        })]
                    })
                },
                eo = e => {
                    let {
                        className: t,
                        items: s,
                        isVisible: n
                    } = e, [o, a] = r.useState(!1), c = r.useRef(null);
                    return (0, z.V)(() => {
                        n && !o && l.ZP.fromTo(c.current, {
                            opacity: 0,
                            delay: .3,
                            duration: .4,
                            onComplete: () => {
                                a(!0)
                            }
                        }, {
                            opacity: 1
                        })
                    }, {
                        dependencies: [n, o]
                    }), (0, i.jsx)("div", {
                        ref: c,
                        className: t,
                        children: s.map(e => (0, i.jsxs)("div", {
                            className: es().item,
                            children: [(0, i.jsx)("h3", {
                                className: es().itemTitle,
                                children: e.title
                            }), (0, i.jsx)(E.Z, {
                                content: e.text
                            })]
                        }, e.title))
                    })
                };
            var el = e => {
                    let {
                        content: t
                    } = e, [s, n] = (0, r.useState)(!1), l = (0, o.LZ)(), [a, d] = (0, r.useState)("DESKTOP"), p = (0, j.Yi)();
                    return (0, r.useEffect)(() => {
                        p.isDesktop ? d("DESKTOP") : p.isMobile ? d("MOBILE") : p.isTablet && d("TABLET")
                    }, [p.isDesktop, p.isMobile, p.isTablet]), r.useEffect(() => {
                        l && l[s ? "stop" : "start"]()
                    }, [l, s]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: es().root,
                            id: "approach",
                            children: [(0, i.jsx)(ei, {
                                title: t.title,
                                subtitle: t.subtitle
                            }), (0, i.jsx)("div", {
                                className: (0, c.Z)(es().galleryWrapper, {
                                    [es().galleryOpen]: s
                                }),
                                children: (0, i.jsx)("div", {
                                    className: es().gallery,
                                    children: (0, i.jsxs)("div", {
                                        className: es().galleryButton,
                                        children: [(0, i.jsx)(er, {
                                            content: t,
                                            isVisible: !s,
                                            onChange: n
                                        }), (0, i.jsx)(en, {
                                            isVisible: s,
                                            onChange: n
                                        })]
                                    })
                                })
                            }), !s && (0, i.jsx)(Y.Z, {
                                className: es().colLeft,
                                bottomOffset: .5,
                                children: (0, i.jsx)(eo, {
                                    className: es().col,
                                    content: t,
                                    items: t.text.left
                                })
                            }), !s && (0, i.jsx)(Y.Z, {
                                className: es().colRight,
                                bottomOffset: .5,
                                children: (0, i.jsx)(eo, {
                                    className: es().col,
                                    content: t,
                                    items: t.text.right
                                })
                            })]
                        }), (0, i.jsx)(ee, {
                            img: t.gallery.mainImage,
                            images: t.gallery.insideImgs,
                            onOpenGallery: n,
                            openGallery: s,
                            current: a
                        })]
                    })
                },
                ea = s(9469),
                ec = s.n(ea),
                ed = e => {
                    let {
                        content: t
                    } = e;
                    return (0, i.jsxs)("section", {
                        className: ec().root,
                        id: "awards",
                        children: [(0, i.jsx)("div", {
                            className: ec().left,
                            children: (0, i.jsxs)("div", {
                                className: ec().titleWrapper,
                                children: [(0, i.jsx)("span", {
                                    className: ec().dot,
                                    children: "."
                                }), (0, i.jsx)("h3", {
                                    className: ec().title,
                                    children: t.title
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: ec().right,
                            children: t.items.map(e => (0, i.jsx)(Y.Z, {
                                children: (0, i.jsxs)(h.Z, {
                                    className: ec().awardsItem,
                                    initial: {
                                        opacity: 0
                                    },
                                    enter: {
                                        opacity: 1,
                                        delay: .3
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        className: ec().yearWrapper,
                                        children: [(0, i.jsx)("span", {
                                            className: ec().dot,
                                            children: "."
                                        }), (0, i.jsx)("div", {
                                            className: ec().year,
                                            children: e.year
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: ec().textBlock,
                                        children: [(0, i.jsx)("p", {
                                            className: ec().textTitle,
                                            children: e.title
                                        }), (0, i.jsx)("p", {
                                            className: ec().textSubTitle,
                                            children: e.subtitle.first
                                        }), (0, i.jsx)("p", {
                                            className: ec().textSubTitle,
                                            children: e.subtitle.second
                                        }), (0, i.jsx)("p", {
                                            className: ec().textComment,
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, e.title))
                        })]
                    })
                },
                ep = s(7937),
                em = s.n(ep),
                e_ = r.memo(e => {
                    let {
                        data: t,
                        footer: s
                    } = e;
                    return r.useEffect(() => (document.querySelector("#__next").style.background = "#b4aea7", () => {
                        document.querySelector("#__next").style.background = ""
                    }), []), (0, i.jsx)(n.Z, {
                        footer: s,
                        syncTouch: !1,
                        children: (0, i.jsxs)("section", {
                            className: em().root,
                            children: [(0, i.jsx)(C, {
                                content: t.hero
                            }), (0, i.jsx)(G, {
                                content: t.team
                            }), (0, i.jsx)(el, {
                                content: t.approach
                            }), (0, i.jsx)(X, {
                                content: t.workWithUs
                            }), (0, i.jsx)(ed, {
                                content: t.awards
                            })]
                        })
                    })
                }),
                eu = s(1117),
                ex = !0,
                eh = (0, r.memo)(e => {
                    let {
                        data: t,
                        footer: s,
                        seo: r,
                        defaultSeo: n
                    } = e;
                    return (0, i.jsx)(eu.Z, {
                        seo: r,
                        defaultSeo: n,
                        children: (0, i.jsx)(e_, {
                            data: t.about,
                            footer: s
                        })
                    })
                })
        },
        6722: function(e) {
            e.exports = {
                root: "CloseButton_root__lcxct"
            }
        },
        2563: function(e) {
            e.exports = {
                root: "Popup_root__y7E19",
                windowWrapper: "Popup_windowWrapper__2X0JQ",
                window: "Popup_window__5_BPB",
                index: "Popup_index__Ifkfj",
                windowTitle: "Popup_windowTitle__Pmc_j",
                mask: "Popup_mask__aIdet",
                buttonTitle: "Popup_buttonTitle__6wtCb",
                popupButton: "Popup_popupButton__qrR3s",
                buttonText: "Popup_buttonText__Bb4DI",
                hiddenText: "Popup_hiddenText__YwQQh"
            }
        },
        6590: function(e) {
            e.exports = {
                root: "TeamPopup_root__P0BEc",
                visible: "TeamPopup_visible__tcDz5",
                popup: "TeamPopup_popup__nSilR",
                content: "TeamPopup_content__wLcjo",
                closeButton: "TeamPopup_closeButton__yfCdD",
                image: "TeamPopup_image__4WACT",
                title: "TeamPopup_title__I4Nof",
                subtitle: "TeamPopup_subtitle__zDXg6",
                bio: "TeamPopup_bio__exbHl",
                text: "TeamPopup_text__C1Wsv",
                brackets: "TeamPopup_brackets__NsbwQ"
            }
        },
        7937: function(e) {
            e.exports = {
                root: "About_root__2mkn3"
            }
        },
        2610: function(e) {
            e.exports = {
                root: "Approach_root__bFhwd",
                galleryWrapper: "Approach_galleryWrapper__kYy9c",
                galleryOpen: "Approach_galleryOpen__PbMqo",
                gallery: "Approach_gallery__wZFBH",
                textCloseGallery: "Approach_textCloseGallery____XDJ",
                galleryButton: "Approach_galleryButton__bRdnj",
                imageCloseGallery: "Approach_imageCloseGallery__ljpuo",
                placeholder: "Approach_placeholder__rY_gW",
                galleryTitle: "Approach_galleryTitle__ZX2Kd",
                galleryTitleItem: "Approach_galleryTitleItem__XrHEM",
                title: "Approach_title__SRS5l",
                textWrapper: "Approach_textWrapper__aE5bk",
                itemTitle: "Approach_itemTitle__U0lZT",
                col: "Approach_col__88Gp4",
                colLeft: "Approach_colLeft__iPH6D",
                colRight: "Approach_colRight__gvyFe",
                item: "Approach_item__EuqNy",
                closeButton: "Approach_closeButton__H08QX"
            }
        },
        1742: function(e) {
            e.exports = {
                rootWrapper: "GalleryPopup_rootWrapper__VcJzX",
                root: "GalleryPopup_root__SYGLf",
                imageWrapper: "GalleryPopup_imageWrapper__CKzaW",
                popupImg: "GalleryPopup_popupImg__q4gij"
            }
        },
        9469: function(e) {
            e.exports = {
                root: "Awards_root__ReWmz",
                titleWrapper: "Awards_titleWrapper__Iadnm",
                dot: "Awards_dot__bb2u6",
                title: "Awards_title__Srkos",
                awardsItem: "Awards_awardsItem__ODFWT",
                textBlock: "Awards_textBlock__Ji2xK",
                yearWrapper: "Awards_yearWrapper__v_cRn",
                year: "Awards_year__QbGed",
                left: "Awards_left__tGTSb",
                right: "Awards_right__B_qT_",
                textTitle: "Awards_textTitle__wphDE",
                textSubTitle: "Awards_textSubTitle__WhcZE",
                textComment: "Awards_textComment___7dP7"
            }
        },
        443: function(e) {
            e.exports = {
                rootWrapper: "Hero_rootWrapper__RdS_m",
                titleLeft: "Hero_titleLeft__bTax0",
                titleRight: "Hero_titleRight__9rQkM",
                section: "Hero_section__vdqRC",
                textInWrapper: "Hero_textInWrapper__eR2Zl",
                textIn: "Hero_textIn____vs5",
                root: "Hero_root__1_vPD",
                titleTextWrapper: "Hero_titleTextWrapper__Evv3D",
                titleText: "Hero_titleText__xpmpt",
                navWrapper: "Hero_navWrapper__451qf",
                nav: "Hero_nav__EICKs",
                navItem: "Hero_navItem__7hlGn",
                text: "Hero_text__4Co6u",
                squere: "Hero_squere__cMwPy",
                videoWrapper: "Hero_videoWrapper__lepbU",
                word: "Hero_word__x8aRs"
            }
        },
        162: function(e) {
            e.exports = {
                root: "Card_root__w_9pv",
                title: "Card_title__SSHDZ",
                imgWrapper: "Card_imgWrapper__okl9J",
                imageFilter: "Card_imageFilter__CQ1uK",
                placeholder: "Card_placeholder__ig82v",
                image: "Card_image__6158p",
                text: "Card_text__wUly9",
                cardTitle: "Card_cardTitle__SJCLW",
                cardSubtitle: "Card_cardSubtitle__iEiWs"
            }
        },
        6314: function(e) {
            e.exports = {
                root: "Team_root__N_m_M",
                title: "Team_title__FR27Y",
                teamList: "Team_teamList__b__MY"
            }
        },
        7929: function(e) {
            e.exports = {
                video: "Video_video__KXsOJ",
                section: "Video_section__sBoKA",
                textInWrapper: "Video_textInWrapper___o1rn",
                textIn: "Video_textIn__j3JRi"
            }
        },
        1305: function(e) {
            e.exports = {
                root: "WorkWithUs_root__H2pZW",
                titleWrapper: "WorkWithUs_titleWrapper__K_p1U",
                title: "WorkWithUs_title__1vuJl",
                info: "WorkWithUs_info__UOFus",
                subtitle: "WorkWithUs_subtitle__fEKIn",
                positions: "WorkWithUs_positions__GTG_H",
                iconContainer: "WorkWithUs_iconContainer__7FLC5",
                icon: "WorkWithUs_icon__OXDoy",
                text: "WorkWithUs_text__CBY_3"
            }
        },
        9008: function(e, t, s) {
            e.exports = s(7828)
        }
    },
    function(e) {
        e.O(0, [35, 307, 888, 774, 179], function() {
            return e(e.s = 1012)
        }), _N_E = e.O()
    }
]);