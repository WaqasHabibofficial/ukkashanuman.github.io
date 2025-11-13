self.__BUILD_MANIFEST = function(s, c) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        "/": [s, c, "static/css/acd7fddeda2670b2.css", "static/chunks/pages/index-ecfeebe682fd8f72.js"],
        "/404": [s, c, "static/css/e97b4148ae33a976.css", "static/chunks/pages/404-a622298e17f865ce.js"],
        "/_error": ["static/chunks/pages/_error-77823ddac6993d35.js"],
        "/about": [s, c, "static/css/49cdf323b19b16f6.css", "static/chunks/pages/about-9591e25e7227f98c.js"],
        "/contact": [s, "static/chunks/281-72f586e724c8c003.js", c, "static/css/a9b1222a055b6362.css", "static/chunks/pages/contact-6a7f8920d1a849e7.js"],
        "/privacy": [s, c, "static/css/2d48922e3d32ae2f.css", "static/chunks/pages/privacy-cb4fe11f7e150477.js"],
        "/project/[slug]": [s, c, "static/css/8cac091f2f27dbb3.css", "static/chunks/pages/project/[slug]-945ee15d9a466eb6.js"],
        "/projects": [s, c, "static/css/409c77672a050f00.css", "static/chunks/pages/projects-0616b42cdfd271b9.js"],
        "/robots.txt": ["static/chunks/pages/robots.txt-de53622e1814c455.js"],
        "/sitemap.xml": ["static/chunks/pages/sitemap.xml-eadd4e56cecaf6b3.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/about", "/contact", "/privacy", "/project/[slug]", "/projects", "/robots.txt", "/sitemap.xml"]
    }
}("static/chunks/35-c7bea811f1c19a18.js", "static/chunks/307-924c76d473fe5959.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();