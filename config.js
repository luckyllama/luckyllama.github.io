(function() {
  var config = {
    build: {
      browsers: [
        "ie >= 8",
    		"ie_mob >= 10",
    		"ff >= 25",
    		"chrome >= 25",
    		"safari >= 7",
    		"opera >= 23",
    		"ios >= 7",
    		"android >= 4.4",
    		"bb >= 10"
      ],
      paths: {
        src: "src/",
        dest: "build/",
        vendorSrc: 'bower_components/**/*',
        jsVendorDest: 'build/scripts/vendor',
        cssVendorDest: 'build/styles/vendor',
        css: "src/assets/styles/*.css",
        scss: "src/assets/styles/*.scss",
        less: "src/assets/styles/main.less",
        styles: "src/assets/styles/**/*",
        js: ['src/**/*.js'],
        coffee: ['src/**/*.coffee'],
        typescript: ['typings/**/*.ts', 'src/**/*.ts'],
        static: ['src/assets/**/*',
          '!src/assets/**/*.{html,scss,less,css,coffee,ts}',
          "!src/assets/{root,root/**,templates,templates/**}"
        ],
        root: "src/assets/root/*",
        rootBase: "src/assets/root",
        articles: "src/content/articles/**/*.md",
        pagesHtml: "src/content/pages/*.html",
        pagesMarkdown: "src/content/pages/*.md",
        htmlWatch: ["src/content/**/*", "src/assets/templates/**/*"],

        clean: ["build/**/*"],

        templates: {
          base: "src/assets/templates",
          article: "src/assets/templates/article.html",
          articleJson: "src/assets/templates/article.json.js",
          page: "src/assets/templates/page.html",
          pageJson: "src/assets/templates/page.json.js"
        }
      },
      gulpSettings: { base: "src/assets" }
    },

    site: {
       title: "frank hadder",
       locale: "en_US",
       url: "http://frankhadder.com",
       owner: {
          name: "frank hadder",
          avatar: "https://s.gravatar.com/avatar/66c9ff85009c90f497921783acce4b41?s=200",
          bio: "",
          email: "",
          "disqus-shortname": "luckyllama",
          twitter: "luckyllamas",
          facebook: "#username",
          google: {
             plus: "frankhadderrocks",
             analytics: "UA-941162-5",
             verify: "",
             "ad-client": "",
             "ad-slot": ""
          },
          "bing-verify": "",
          github: "luckyllama",
          stackoverflow: "3617/frank-hadder",
          linkedin: "",
          instagram: "luckyllama",
          lastfm: "luckyllama",
          tumblr: "luckyllama",
          pinterest: "",
          foursquare: "",
          steam: "",
          dribbble: ""
       }
    },

    server: {
      port: 2200,
      routes: { '/bower_components': 'bower_components' }
    }
  };

  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = config;
  } else {
    window.Config = config;
  }
})()
