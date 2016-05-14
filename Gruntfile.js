module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		cssmin : {
			css : {
				src : '_site/css/v8-main.css',
				dest : '_site/css/v8-main.css'
			}
		},
		htmlmin : {
			dist : {
				options : {
					removeComments : true,
					collapseWhitespace: true
				},
				files: [{
			        expand: true,
			        cwd: './',
			        src: ['_site/**/*.html'],
			        dest: './'
			    }]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['cssmin:css', 'htmlmin:dist']);
}