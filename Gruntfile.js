/*
 * Generated on 2014-08-12
 * generator-assemble v0.4.13
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */
"use strict";

// # Globbing
// for performance reasons we"re only matching one level down:
// "<%= config.src %>/templates/pages/{,*/}*.hbs"
// use this if you want to match all subfolders:
// "<%= config.src %>/templates/pages/**/*.hbs"

module.exports = function(grunt) {

	require("time-grunt")(grunt);

	grunt.loadNpmTasks("assemble");
	require("load-grunt-tasks")(grunt);

	// Project configuration.
	grunt.initConfig({
        site: grunt.file.readYAML("src/data/site.yml"),

		config: {
			src: "src",
			dest: "build"
		},

		watch: {
			assemble: {
				files: ["<%= config.src %>/{content,data,templates}/**/*.{md,hbs,yml}"],
				tasks: ["assemble"]
			},
			styles: {
				files: ["<%= config.src %>/assets/css/**/*.less"],
				tasks: ["less:development", "autoprefixer"],
				options: {
					nospawn: true
				}
			},
			otherAssets: {
				files: [
					"<%= config.src %>/assets/**/*.css",
					"<%= config.src %>/assets/**/*.js",
					"!<%= config.src %>/assets/js/global/*.js",
					"<%= config.src %>/assets/images/**/*",
					"<%= config.src %>/assets/fonts/**/*"
             ],
				tasks: ["sync:build"]
			},
			uglify: {
				files: ["<%= config.src %>/assets/js/global/*.js"],
				tasks: ["uglify"]
			},
			typescript: {
				files: ["<%= config.src %>/assets/js/**/*.ts"],
				tasks: ["ts"]
			},
			coffee: {
				files: ["<%= config.src %>/assets/js/**/*.coffee"],
				tasks: ["coffee"]
			}
		},

		less: {
			development: {
				options: {
					compress: true,
					sourceMap: true,
					sourceMapFilename: "<%= config.dest %>/assets/css/main.css.map",
					sourceMapURL: "/assets/css/main.css.map",
                    sourceMapBasepath: "src/",
					sourceMapRootpath: "/",
                    outputSourceFiles: true
				},
				files: {
					// target.css file: source.less file
					"<%= config.dest %>/assets/css/main.css": "<%= config.src %>/assets/css/main.less"
				}
			}
		},
		autoprefixer: {
			options: {},
			files: {
				src: "<%= config.dest %>/assets/css/main.css"
			},
		},

		uglify: {
			development: {
				files: {
					"<%= config.dest %>/assets/js/global.js": "<%= config.src %>/assets/js/global/*.js"
				},
				options: {
					preserveComments: false
				}
			}
		},
		ts: {
			development: {
				src: ["<%= config.src %>/assets/js/**/*.ts"],
				outDir: "<%= config.dest %>/assets/js/",
				options: {
					comments: true,
				}
			}
		},
		coffee: {
			development: {
				options: {
					sourceMap: true,
				},
				expand: true,
				cwd: "<%= config.src %>/assets/js/",
				src: "**/*.coffee",
				dest: "<%= config.dest %>/assets/js/",
				ext: ".js"
			},
		},

		sync: {
			build: {
				files: [{
                    cwd: "<%= config.src %>",
					src: [
                        "assets/**/*.{js,css}",
                        "!assets/js/global/*",
                        "assets/images/**/*",
                        "assets/fonts/**/*"
                    ],
					dest: "<%= config.dest %>",
				}],
				verbose: true
			}
		},

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to "0.0.0.0" to access the server from outside
				hostname: "localhost"
			},
			livereload: {
				options: {
					open: true,
					base: [
						"<%= config.dest %>"
					]
				}
			}
		},

		assemble: {
            options: {
               flatten: true,
               assets: "<%= config.dest %>/assets",
               layoutext: ".hbs",
               layoutdir: "<%= config.src %>/templates/layouts/",
               data: "<%= config.src %>/data/*.{json,yml}",
               partials: "<%= config.src %>/templates/partials/*.hbs",
               plugins: ["assemble-contrib-permalinks", "assemble-contrib-sitemap", "assemble-middleware-rss"],
               sitemap: {
               	dest: "<%= config.dest %>",
               },
               rss: {
                  title: "<%= site.title %>",
                  description: "RSS feed description.",
                  format: true
               },
               collections: [{
                  name: "article",
                  sortby: "date",
                  sortorder: "descending"
               }],
					marked: {
						highlight: function (code) {
							return require("highlight.js").highlightAuto(code).value;
						}
					}
            },
            site: {
                options: {
                    layout: "default",
                    permalinks: {
                        structure: ":basename/index.html"
                    },
                },
                files: [{
                    cwd: "<%= config.src %>/templates/pages/",
                    dest: "<%= config.dest %>/",
                    expand: true,
                    src: "**/*.hbs"
                }, {
                    cwd: "<%= config.src %>/content/",
                    dest: "<%= config.dest %>",
                    expand: true,
                    src: "**/*.hbs"
                }]
            }
		},

		// Before generating any new files,
		// remove any previously-created files.
		clean: ["<%= config.dest %>/**/*"]

	});

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("build", [
		"clean",
		"less", "autoprefixer",
		"uglify", "ts", "coffee",
		"assemble",
		"sync:build"
	])
};
