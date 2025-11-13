(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335], {
        8105: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return r(2237)
            }])
        },
        1859: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o.Z
                }
            });
            var o = r(8789)
        },
        1117: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var o = r(5893),
                n = r(7294),
                i = r(9008),
                s = r.n(i),
                a = r(1163),
                c = r(6746),
                d = n.memo(e => {
                    var t, r, i, d, l, m, p, x, h;
                    let {
                        seo: u,
                        defaultSeo: j = {},
                        children: _
                    } = e, {
                        asPath: f
                    } = (0, a.useRouter)(), g = (0, n.useMemo)(() => c._n ? new URL(c._n).host : "", []), v = {
                        title: u.title || j.title,
                        description: u.description || j.description,
                        image: (null === (t = u.image) || void 0 === t ? void 0 : t.url) || j.image,
                        imgWidth: (null === (i = u.image) || void 0 === i ? void 0 : null === (r = i.dimensions) || void 0 === r ? void 0 : r.width) || (null === (l = j.image) || void 0 === l ? void 0 : null === (d = l.dimensions) || void 0 === d ? void 0 : d.width),
                        imgHeight: (null === (p = u.image) || void 0 === p ? void 0 : null === (m = p.dimensions) || void 0 === m ? void 0 : m.height) || (null === (h = j.image) || void 0 === h ? void 0 : null === (x = h.dimensions) || void 0 === x ? void 0 : x.height),
                        keywords: u.keywords || j.keywords
                    };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(s(), {
                            children: [(0, o.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1"
                            }), v.title && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("title", {
                                    children: v.title
                                }), (0, o.jsx)("meta", {
                                    property: "og:title",
                                    content: v.title
                                }), (0, o.jsx)("meta", {
                                    property: "twitter:title",
                                    content: v.title
                                }), (0, o.jsx)("meta", {
                                    name: "format-detection",
                                    content: "telephone=no email=no, address=no"
                                })]
                            }), v.description && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("meta", {
                                    name: "description",
                                    content: v.description
                                }), (0, o.jsx)("meta", {
                                    property: "og:description",
                                    content: v.description
                                }), (0, o.jsx)("meta", {
                                    property: "twitter:description",
                                    content: v.description
                                })]
                            }), v.image && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("meta", {
                                    property: "og:image",
                                    content: v.image
                                }), (0, o.jsx)("meta", {
                                    name: "twitter:image",
                                    content: v.image
                                }), v.imgWidth && (0, o.jsx)("meta", {
                                    property: "og:image:width",
                                    content: v.imgWidth
                                }), v.imgHeight && (0, o.jsx)("meta", {
                                    property: "og:image:height",
                                    content: v.imgHeight
                                })]
                            }), v.keywords && (0, o.jsx)("meta", {
                                name: "keywords",
                                content: v.keywords
                            }), g && (0, o.jsx)("meta", {
                                property: "twitter:domain",
                                content: g
                            }), c._n && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("meta", {
                                    property: "og:url",
                                    content: "".concat(c._n).concat(f)
                                }), (0, o.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "".concat(c._n).concat(f)
                                })]
                            }), (0, o.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, o.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "/favicon/apple-touch-icon.png"
                            }), (0, o.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "/favicon/favicon-32x32.png"
                            }), (0, o.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "16x16",
                                href: "/favicon/favicon-16x16.png"
                            }), (0, o.jsx)("link", {
                                rel: "mask-icon",
                                href: "/favicon/safari-pinned-tab.svg",
                                color: "#5bbad5"
                            }), (0, o.jsx)("meta", {
                                name: "msapplication-TileColor",
                                content: "#da532c"
                            }), (0, o.jsx)("meta", {
                                name: "theme-color",
                                content: "#ffffff"
                            })]
                        }), _]
                    })
                })
        },
        2237: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return S
                },
                default: function() {
                    return F
                }
            });
            var o = r(5893),
                n = r(7294),
                i = r(512),
                s = r(7536),
                a = r(1859),
                c = r(9634),
                d = r(1307),
                l = r(4349),
                m = r(1609),
                p = r(3924),
                x = r.n(p);
            let h = n.forwardRef((e, t) => {
                let {
                    placeholder: r,
                    error: n,
                    ...s
                } = e;
                return (0, o.jsx)("div", {
                    className: (0, i.Z)(x().root, n && x().error),
                    children: (0, o.jsx)("textarea", { ...s,
                        ref: t,
                        placeholder: r
                    })
                })
            });
            var u = n.memo(h),
                j = r(956),
                _ = r.n(j);
            let f = n.forwardRef((e, t) => {
                let {
                    placeholder: r,
                    error: n,
                    ...s
                } = e;
                return (0, o.jsx)("div", {
                    className: (0, i.Z)(_().root, n && _().error),
                    children: (0, o.jsx)("input", { ...s,
                        ref: t,
                        placeholder: r
                    })
                })
            });
            var g = n.memo(f),
                v = r(8628),
                y = r(5608),
                b = r(6654),
                C = r.n(b);
            let Z = e => {
                    let {
                        footer: t,
                        contact: r
                    } = e;
                    return (0, o.jsxs)("div", {
                        className: C().mobileContacts,
                        children: [(0, o.jsx)(c.Z, {
                            href: r.addressFirst.url,
                            blank: !0,
                            children: (0, o.jsx)(a.Z, {
                                content: t.address
                            })
                        }), (0, o.jsx)(c.Z, {
                            href: r.addressSecond.url,
                            blank: !0,
                            children: (0, o.jsx)(a.Z, {
                                content: r.contact
                            })
                        }), (0, o.jsxs)("div", {
                            children: [(0, o.jsx)(a.Z, {
                                content: t.contact
                            }), (0, o.jsxs)("div", {
                                children: [(0, o.jsx)("div", {
                                    children: "\xa92024 RAD"
                                }), (0, o.jsx)(m.Z, {})]
                            })]
                        }), (0, o.jsx)(c.Z, {
                            href: "/privacy",
                            children: "Privacy Policy"
                        })]
                    })
                },
                w = e => {
                    let {
                        children: t,
                        disabled: r,
                        isError: n
                    } = e;
                    return (0, o.jsx)("button", {
                        className: (0, i.Z)(C().button, {
                            [C().error]: n
                        }),
                        type: "submit",
                        disabled: r,
                        children: t
                    })
                };
            var N = n.memo(e => {
                    let {
                        contact: t,
                        footer: r
                    } = e, [p, x] = n.useState(!1), [h, j] = n.useState(!1), [_, f] = n.useState(!1), {
                        register: b,
                        handleSubmit: N,
                        formState: {
                            errors: k,
                            isValid: S
                        }
                    } = (0, s.cI)(), F = Object.values(k).length > 0;
                    return (0, o.jsxs)(d.Z, {
                        footer: r,
                        showFooter: !1,
                        children: [(0, o.jsxs)("div", {
                            className: C().root,
                            children: [(0, o.jsxs)("div", {
                                className: C().text,
                                children: [(0, o.jsx)("p", {
                                    children: t.title
                                }), (0, o.jsx)("p", {
                                    children: t.description
                                })]
                            }), (0, o.jsxs)("div", {
                                className: (0, i.Z)(C().form, _ && C().formSubmitted),
                                children: [(0, o.jsxs)("div", {
                                    className: C().submittedText,
                                    children: [(0, o.jsx)("p", {
                                        children: "your message has been received"
                                    }), (0, o.jsx)("p", {
                                        children: "We’ll get back to you soon"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: C().formTitle,
                                    children: "contact form"
                                }), (0, o.jsxs)("form", {
                                    onSubmit: N(e => (f(!0), fetch("/api/mail", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(e)
                                    }))),
                                    children: [(0, o.jsx)(u, { ...b("text", {
                                            required: !0
                                        }),
                                        error: k.text,
                                        placeholder: "Tell us what you’re thinking"
                                    }), (0, o.jsx)(g, { ...b("email", {
                                            required: !0,
                                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                        }),
                                        error: k.email,
                                        placeholder: "What email address can we reach you at?"
                                    }), (0, o.jsxs)("div", {
                                        className: C().formLastLine,
                                        children: [(0, o.jsx)(g, { ...b("name", {
                                                required: !0
                                            }),
                                            error: k.name,
                                            placeholder: "What name do you go by?"
                                        }), (0, o.jsxs)(w, {
                                            isError: F,
                                            disabled: !S,
                                            children: [F && "Error", !F && (0, o.jsxs)(o.Fragment, {
                                                children: [(0, o.jsx)(l.Z, {
                                                    isMobile: !0,
                                                    children: "Send"
                                                }), (0, o.jsx)(l.Z, {
                                                    isMobile: !1,
                                                    children: "Send Message"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: C().imageWrppaer,
                                children: [(0, o.jsx)("div", {
                                    className: C().pictureWrapper,
                                    style: {
                                        opacity: p ? "1" : "0"
                                    },
                                    children: (0, o.jsx)(y.X, {
                                        objSource: t.imageAddressFirst.url,
                                        alt: "map 1",
                                        className: C().mapImg
                                    })
                                }), (0, o.jsx)("div", {
                                    className: C().pictureWrapper,
                                    style: {
                                        opacity: h ? "1" : "0"
                                    },
                                    children: (0, o.jsx)(y.X, {
                                        objSource: t.imageAddressSecond.url,
                                        alt: "map 2",
                                        className: C().mapImg
                                    })
                                })]
                            }), (0, o.jsx)(l.Z, {
                                isMobile: !1,
                                children: (0, o.jsxs)("div", {
                                    className: C().footer,
                                    children: [(0, o.jsx)(c.Z, {
                                        className: C().footerAddress,
                                        href: t.addressFirst.url,
                                        blank: !0,
                                        onMouseEnter: () => x(!0),
                                        onMouseLeave: () => x(!1),
                                        children: (0, o.jsx)(a.Z, {
                                            content: r.address
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: C().footerContact,
                                        children: [(0, o.jsx)(a.Z, {
                                            content: r.contact
                                        }), (0, o.jsxs)("div", {
                                            className: C().footerCopyright,
                                            children: [(0, o.jsx)("div", {
                                                children: "\xa92024 RAD"
                                            }), (0, o.jsx)("div", {
                                                children: (0, o.jsx)(m.Z, {})
                                            })]
                                        })]
                                    }), (0, o.jsx)(c.Z, {
                                        className: C().footerSecondContact,
                                        href: t.addressSecond.url,
                                        blank: !0,
                                        children: (0, o.jsx)(a.Z, {
                                            content: t.contact,
                                            onMouseEnter: () => j(!0),
                                            onMouseLeave: () => j(!1)
                                        })
                                    })]
                                })
                            }), (0, o.jsx)(l.Z, {
                                isMobile: !0,
                                children: (0, o.jsx)(Z, {
                                    footer: r,
                                    contact: t
                                })
                            })]
                        }), (0, o.jsx)(l.Z, {
                            isMobile: !1,
                            children: (0, o.jsx)(c.Z, {
                                href: "/privacy",
                                children: (0, o.jsx)("div", {
                                    className: C().privacy,
                                    children: "Privacy Policy"
                                })
                            })
                        }), (0, o.jsx)(v.Z, {
                            opacity: .1,
                            className: C().background
                        })]
                    })
                }),
                k = r(1117),
                S = !0,
                F = (0, n.memo)(e => {
                    let {
                        footer: t,
                        data: r,
                        seo: n,
                        defaultSeo: i
                    } = e;
                    return (0, o.jsx)(k.Z, {
                        seo: n,
                        defaultSeo: i,
                        children: (0, o.jsx)(N, { ...r,
                            footer: t
                        })
                    })
                })
        },
        956: function(e) {
            e.exports = {
                root: "InputField_root__BOwFd",
                error: "InputField_error__sDN6W"
            }
        },
        3924: function(e) {
            e.exports = {
                root: "TextField_root__CdWgK",
                error: "TextField_error__zZHyF"
            }
        },
        6654: function(e) {
            e.exports = {
                root: "Contact_root__mRLlI",
                text: "Contact_text__BE8oY",
                formTitle: "Contact_formTitle__aA05M",
                form: "Contact_form__WnqT5",
                formLastLine: "Contact_formLastLine__HILbg",
                button: "Contact_button__xXiIp",
                error: "Contact_error__bgEGw",
                footer: "Contact_footer__FrlEq",
                imageWrppaer: "Contact_imageWrppaer__nhDC2",
                pictureWrapper: "Contact_pictureWrapper__8SpBY",
                mobileContacts: "Contact_mobileContacts__kTeL9",
                footerAddress: "Contact_footerAddress___0TZ3",
                footerContact: "Contact_footerContact__U1f_W",
                footerCopyright: "Contact_footerCopyright__XelQP",
                footerSecondContact: "Contact_footerSecondContact__UhhUZ",
                privacy: "Contact_privacy__SiVRp",
                background: "Contact_background__CtDOb",
                submittedText: "Contact_submittedText__LyXkl",
                formSubmitted: "Contact_formSubmitted__Llcjk"
            }
        }
    },
    function(e) {
        e.O(0, [35, 281, 307, 888, 774, 179], function() {
            return e(e.s = 8105)
        }), _N_E = e.O()
    }
]);