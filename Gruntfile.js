/* global module */

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // compass: {
        //     deploy: {
        //         options: {
        //             config: 'config.rb',
        //             sassDir: 'sass',
        //             cssDir: 'deploy/styles'
        //         }
        //     }
        // },

        copy: {
            assets: {
                files: [
                    { src: 'assets/img/avatar_default.jpg', dest: 'deploy/img/avatar_default.jpg' }
                    //{ src: 'assets/shared/img/favicon.ico', dest: 'deploy/shared/img/favicon.ico' }
                    //{ expand: true, cwd: 'assets/img/', src: '**', dest: 'deploy' }
                ]
            },
            vendor: {
                files: [
                    { src: 'vendor/html5shim.js', dest: 'deploy/core/js/html5shim.js' },
                    { src: 'vendor/json2.js', dest: 'deploy/core/js/json2.js' },
                    { src: 'vendor/jquery-1.10.2.js', dest: 'deploy/core/js/jquery-1.10.2.js' },
                    { src: 'vendor/ie7hacks.js', dest: 'deploy/core/js/ie7hacks.js' }
                ]
            },
            login: {
                files:[
                    { src: 'apps/login/index.html', dest:'deploy/login/index.html' },
                    { src: 'assets/config/configuration.json', dest:'deploy/config/configuration.json' },
                    //{ expand: true, cwd: 'scripts/vendor/', src: 'jquery-1.10.2.js', dest: 'deploy/login/js/vendor' },
                    { expand: true, cwd: 'apps/login/', src: 'img/**', dest: 'deploy' }
                    //{ expand: true, cwd: 'assets/shared', src: 'img/**/**', dest: 'deploy' }
                ]
            },
            // portal: {
            //     files:[
            //         { src: 'apps/portal/index.html', dest:'deploy/index.html' },
            //         { src: 'assets/config/configuration.json', dest:'deploy/config/configuration.json' },
            //         { src: 'ie8-and-down.css', dest: 'deploy/styles/ie8-and-down.css'},
            //         //{ expand: true, cwd: 'scripts/vendor/', src: 'jquery-1.10.2.js', dest: 'deploy/portal/js/vendor' },
            //         // { expand: true, cwd: 'apps/portal/', src: 'img/**', dest: 'deploy/portal' },
            //         // { expand: true, cwd: 'assets/shared', src: 'img/**/**', dest: 'deploy/portal' }
            //         { expand: true, cwd: 'assets/images/', src: '**/**', dest: 'deploy/img/' }
            //     ]
            // },
            contacts: {
                files:[
                    { src: 'apps/contacts/index.html', dest:'deploy/index.html' },
                    { src: 'assets/config/configuration.json', dest:'deploy/config/configuration.json' },
                    { src: 'ie8-and-down.css', dest: 'deploy/styles/ie8-and-down.css'}
                    //{ expand: true, cwd: 'scripts/vendor/', src: 'jquery-1.10.2.js', dest: 'deploy/portal/js/vendor' },
                    // { expand: true, cwd: 'apps/portal/', src: 'img/**', dest: 'deploy/portal' },
                    // { expand: true, cwd: 'assets/shared', src: 'img/**/**', dest: 'deploy/portal' }
                    //{ expand: true, cwd: 'assets/images/', src: '**/**', dest: 'deploy/img/' }
                    //{ expand: true, cwd: 'assets/img/', src: 'img/**', dest: 'deploy' }
                ]
            }
        },

        // jshint: {
        //     options: {
        //         jshintrc: '.jshintrc'
        //     },
        //     all: [ 'Gruntfile.js', 'apps/**/*.js' ]
        // },

        concat: {
            login_plugins: {
                options: {
                    banner: '//concat plugins\n',
                    footer: '//end concat plugins\n'
                },
                dest: 'deploy/login/js/plugins.js',
                src: [
                    'vendor/plugins/backbone/backbone-validation.js',
                    'vendor/plugins/serialize-object.js',
                    'vendor/bootstrap/js/bootstrap.js',
                    'assets/shared/js/validate.js',
                    'assets/shared/js/ui.js'
                ]
            },
            // portal_plugins: {
            //     options: {
            //         banner: '//concat plugins\n',
            //         footer: '//end concat plugins\n'
            //     },
            //     dest: 'deploy/portal/js/plugins.js',
            //     src: [
            //         'vendor/plugins/backbone/backbone-validation.js',
            //         'vendor/plugins/serialize-object.js',
            //         'vendor/plugins/jquery/file-upload/vendor/jquery.ui.widget.js',
            //         'vendor/plugins/jquery/file-upload/jquery.fileupload.js',
            //         'vendor/bootstrap/js/bootstrap.js',
            //         'vendor/moment.js',
            //         'assets/shared/js/validate.js',
            //         'assets/shared/js/ui.js',
            //         'assets/shared/js/session-timer.js'
            //     ]
            // },
            contacts_plugins: {
                options: {
                    banner: '//concat plugins\n',
                    footer: '//end concat plugins\n'
                },
                dest: 'deploy/contacts/js/plugins.js',
                src: [
                    'vendor/plugins/backbone/backbone.paginator.js',
                    'vendor/plugins/backbone/backbone-validation.js',
                    'vendor/plugins/serialize-object.js',
                    'vendor/plugins/jquery/file-upload/vendor/jquery.ui.widget.js',
                    'vendor/plugins/jquery/file-upload/jquery.fileupload.js',
                    'vendor/bootstrap/js/bootstrap.js',
                    'vendor/moment.js',
                    'assets/shared/js/validate.js',
                    'assets/shared/js/ui.js',
                    'assets/shared/js/session-timer.js'
                ]
            }
        },

        clean: [
            'deploy'
        ],

        watch: {
            login_scripts: {
                files: ['apps/login/**/*.js', 'apps/login/**/*.jst', 'vendor/**/*.js', 'assets/**/*.js'],
                tasks: ['requirejs:login', 'copy','notify:scripts'],
                options: { livereload: true }
            },
            // portal_scripts: {
            //     files: ['apps/portal/**/*.js','apps/portal/**/*.jst', 'vendor/**/*.js'],
            //     tasks: ['requirejs:portal', 'copy','notify:scripts'],
            //     options: { livereload: true }
            // },
            contacts_scripts: {
                files: ['apps/contacts/**/*.js','apps/contacts/**/*.jst', 'vendor/**/*.js'],
                tasks: ['requirejs:contacts', 'copy','notify:scripts'],
                options: { livereload: true }
            },
            // compass: {
            //     files: ['sass/**/*.scss', 'assets/blocks/**/*.scss'],
            //     tasks: ['compass', 'notify:compass'],
            //     options: { livereload: true }
            // },
            templates: {
                files: ['**/*.html', '!deploy/**/*.html'],
                tasks: ['copy', 'notify:templates'],
                options: { livereload: true }
            },
            copy: {
                files: ['assets/**/*.json'],
                tasks: ['copy', 'notify:copy']
                // options: {livereload: true}
            },
            conditional: {
                files: ['ie8-and-down.css'],
                tasks: ['copy', 'notify:copy']
                // options: {livereload: true}
            }
        },

        notify: {
            build: {
                options: {
                    message: 'Site built successfully.'
                }
            },
            scripts: {
                options: {
                    message: 'Scripts combined successfully.'
                }
            },
            // compass: {
            //     options: {
            //         message: 'Sass compiled successfully.'
            //     }
            // },
            templates: {
                options: {
                    message: 'Templates compiled successfully.'
                }
            },
            copy: {
                options: {
                    message: 'Files copied successfully'
                }
            }
        },
        requirejs: {
            options:{
                optimize: 'none'
            },
            // portal: {
            //     options: {
            //         baseUrl: 'apps/portal',
            //         mainConfigFile: 'apps/portal/config/require_config.js',
            //         out: 'deploy/portal/js/main.js',
            //         generateSourceMaps: false,
            //         useSourceUrl: false

            //     }
            // },
            // portal_prod: {
            //     options: {
            //         baseUrl: 'apps/portal',
            //         mainConfigFile: 'apps/portal/config/require_config.js',
            //         out: 'deploy/portal/js/main.js',
            //         optimize: 'uglify2'
            //     }
            // },
            contacts: {
                options: {
                    baseUrl: 'apps/contacts',
                    mainConfigFile: 'apps/contacts/config/require_config.js',
                    out: 'deploy/contacts/js/main.js',
                    generateSourceMaps: false,
                    useSourceUrl: false

                }
            },
            contacts_prod: {
                options: {
                    baseUrl: 'apps/contacts',
                    mainConfigFile: 'apps/contacts/config/require_config.js',
                    out: 'deploy/contacts/js/main.js',
                    optimize: 'uglify2'
                }
            },
            contactsCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "css/contacts.css",
                    out: "deploy/styles/contacts.min.css"
                }
            },
            login: {
                options: {
                    baseUrl: 'apps/login',
                    mainConfigFile: 'apps/login/config/require_config.js',
                    out: 'deploy/login/js/main.js',
                    generateSourceMaps: false,
                    useSourceUrl: false

                }
            },
            login_prod: {
                options: {
                    baseUrl: 'apps/login',
                    mainConfigFile: 'apps/login/config/require_config.js',
                    out: 'deploy/login/js/main.js',
                    optimize: 'uglify2'
                }
            }
        },
        gitinfo:{},
        // compress: {
        //     options:{
        //         mode: 'tgz'
        //     },
        //     physician: {
        //         options:{
        //             archive: 'deploy/physician_'+new Date().getTime()+'_<%= gitinfo.local.branch.current.name %>_<%= gitinfo.local.branch.current.shortSHA %>.tgz'
        //         },
        //         expand: true,
        //         cwd: 'deploy',
        //         src: ['**/*']
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-gitinfo');
    //grunt.loadNpmTasks('grunt-contrib-compress');
    //grunt.loadNpmTasks('grunt-contrib-jshint');


    //base build taks
    //grunt.registerTask('base', ['clean', 'compass', 'concat', 'copy', 'gitinfo']);
    grunt.registerTask('base', ['clean', 'concat', 'copy', 'gitinfo']);

    // only build login for development
    //grunt.registerTask('login', ['base','requirejs:login','notify:build', 'compress']);
    grunt.registerTask('login', ['base','requirejs:login','notify:build']);

    // only build portal for development
    //grunt.registerTask('portal', ['base','requirejs:portal','notify:build', 'compress']);
    //grunt.registerTask('portal', ['base','requirejs:portal','notify:build']);

    // only build contacts for development
    //grunt.registerTask('portal', ['base','requirejs:portal','notify:build', 'compress']);
    grunt.registerTask('contacts', ['base','requirejs:contacts','requirejs:contactsCSS','notify:build']);

    // build portal and login for development
    //grunt.registerTask('dev', ['base', 'jshint', 'requirejs:login','requirejs:portal','notify:build', 'compress']);
    //grunt.registerTask('dev', ['base', 'requirejs:login','requirejs:portal','notify:build', 'compress']);
    //grunt.registerTask('dev', ['base', 'requirejs:login','requirejs:portal','notify:build']);
    grunt.registerTask('dev', ['base', 'requirejs:login','requirejs:contacts','requirejs:contactsCSS','notify:build']);

    // only build portal and login for production
    //grunt.registerTask('prod', ['base', 'requirejs:login_prod','requirejs:portal_prod', 'compress']);
    //grunt.registerTask('prod', ['base', 'requirejs:login_prod','requirejs:portal_prod']);
    grunt.registerTask('prod', ['base', 'requirejs:login_prod','requirejs:contacts_prod','requirejs:contactsCSS']);

    //default task runs complete dev build
    grunt.registerTask('default', ['dev']);
};
