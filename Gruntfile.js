
module.exports = function(grunt) {

 require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/**",
            "index.html",
            "fonts/**",
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["less/**/*.less"]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg"]
        }]
      }
    }
  });

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "csscomb",
    "imagemin"
    ]);
};
