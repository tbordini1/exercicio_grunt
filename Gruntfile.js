module.exports = function(grunt) {
  // Carrega os plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Configuração das tarefas
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'assets/css/style.css': 'assets/css/main.less'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/main.min.js': ['assets/js/main.js']
        }
      }
    }
  });

  // Registra a tarefa default
  grunt.registerTask('default', ['less', 'uglify']);
};
