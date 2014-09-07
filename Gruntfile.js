module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		cssmin : {
			css : {
				src : '_site/css/blog.css',
				dest : '_site/css/blog.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('minify-css', ['cssmin:css']);
}