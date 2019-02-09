'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')
const nodemon = require('gulp-nodemon')
const { reload } = browserSync

gulp.task('nodemon', function(cb) {
	var called = false
	return nodemon({
		script: 'server.js',
		ext: 'hbs',
		ignore: ['gulpfile.js', 'node_modules/']
	})
		.on('start', function() {
			if (!called) {
				called = true
				cb()
			}
		})
		.on('restart', function() {
			setTimeout(function() {
				reload({ stream: false })
			}, 1000)
		})
})

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: 'localhost:3000', // local node app address
		port: 5000, // use *different* port than above
		notify: true
	})
})

// gulp.task('js', function() {
// 	return gulp.src('public/**/*.js')
// 	// do stuff to JavaScript files
// 	//.pipe(uglify())
// 	//.pipe(gulp.dest('...'));
// })

// gulp.task('css', function() {
// 	return gulp.src('public/**/*.css').pipe(browserSync.reload({ stream: true }))
// })

// gulp.task('bs-reload', function() {
// 	browserSync.reload()
// })

gulp.task('default', gulp.series('nodemon', 'browser-sync'), function() {
	// gulp.watch('public/**/*.js', ['js', browserSync.reload])
	// gulp.watch('public/**/*.css', ['css'])
	// gulp.watch('public/**/*.html', ['bs-reload'])
	// gulp.watch('templates/**/*.hbs', gulp.series('nodemon', reload))
})
