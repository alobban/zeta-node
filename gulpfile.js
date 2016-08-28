// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

// Move angular to local directory
gulp.task('scripts', function () {
	return gulp.src('bower_components/angular/angular.js')
		.pipe(gulp.src('bower_components/angular-ui-router/release/angular-ui-router.js'))
		.pipe(gulp.src('bower_components/bootstrap/dist/js/bootstrap.js'))
		.pipe(gulp.src('bower_components/jquery/dist/jquery.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('styles', function () {
	return gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
		.pipe(gulp.src('bower_components/font-awesome/css/font-awesome.css'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('server', function() {
	nodemon({
		script: 'apsi.js',
		ext: 'js',
		env: {
			PORT:3001
		},
		ignore: ['./node_module/**', './bower_components/**', './public/**']
	})
	.on('restart', function() {
		console.log('we have restarted!');
	});
});

gulp.task('default', ['scripts', 'styles', 'server']);