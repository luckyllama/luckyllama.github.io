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

		config: {
			src: "src",
			dest: "build"
		},

		watch: {
			assemble: {
				files: ["<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}"],
				tasks: ["assemble"]
			},
			livereload: {
				options: {
					livereload: "<%= connect.options.livereload %>"
				},
				files: [
                    "<%= config.dest %>/{,*/}*.html",
                    "<%= config.dest %>/assets/{,*/}*.css",
                    "<%= config.dest %>/assets/{,*/}*.js",
                    "<%= config.dest %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
				]
			},
			styles: {
				files: ["<%= config.src %>/assets/css/**/*.less"],
				tasks: ["less", "autoprefixer"],
				options: {
					nospawn: true
				}
			},
			otherAssets: {
				files: ["assets/**/*.{js,css}"],
				tasks: ["sync:build"]
			},
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

		sync: {
			build: {
				files: [{
					src: ["<%= config.src %>/assets/**/*.{css,js}"],
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
			pages: {
				options: {
					flatten: true,
					assets: "<%= config.dest %>/assets",
					layout: "<%= config.src %>/templates/layouts/default.hbs",
					data: "<%= config.src %>/data/*.{json,yml}",
					partials: "<%= config.src %>/templates/partials/*.hbs",
					plugins: ["assemble-contrib-permalinks", "assemble-contrib-sitemap"],
				},
				files: {
					"<%= config.dest %>/": ["<%= config.src %>/templates/pages/*.hbs"]
				}
			}
		},

		// Before generating any new files,
		// remove any previously-created files.
		clean: ["<%= config.dest %>/**/*.{html,xml}"]

	});

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("build", ["clean", "less", "autoprefixer", "assemble", "sync:build"])
};
