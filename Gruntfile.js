module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                browser: true,
                curly: true,
                eqnull: true,
                eqeqeq: true,
                strict: false
            },
            files: ['dist/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
}