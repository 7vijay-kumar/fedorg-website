module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-aws')

    grunt.initConfig({
        aws: grunt.file.readJSON('credentials.json'),
        s3: {
            options: {
                accessKeyId: '<%= aws.accessKeyID %>',
                secretAccessKey: '<%= aws.secretAccessKey %>',
                cache: false,
                gzip: false,
            },
            build: {
                cwd: 'build/',
                src: '**',
            },
        },
        cloudfront: {
            options: {
                accessKeyId: '<%= aws.accessKeyID %>',
                secretAccessKey: '<%= aws.secretAccessKey %>',
            },
            html: {
                options: {
                    invalidations: ['/*'],
                },
            },
        },
    })

    //Prod deployment configurations
    grunt.registerTask('deploy', 'Build with production options', function() {
        grunt.config.set('s3.options.bucket', 'fedorg-main-website')
        //grunt.config.set('cloudfront.options.distributionId', 'EG6ZA0Q0HBH7E')
        grunt.task.run('s3')
        //grunt.task.run('cloudfront')
    })
}

