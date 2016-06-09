/* global __dirname */
'use strict';
let path = require('path');
let gulp = require('gulp');
let sass = require('gulp-sass');
let webpack = require('webpack-stream');
let uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Sass
gulp.task('sass', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist'));
});

// Frontend
gulp.task('frontend', ['sass'], function() {
  gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch(['src/**/*.js*'], function(){
		gulp.src('src/**/*.js')
			.pipe(webpack({
				module:{
					loaders:[
						{
							test: /\.jsx?$/,
							loader: 'babel',
							query: {
								presets: ['react', 'es2015']
							},
							resolve: {
								root: path.join(__dirname),
								fallback: path.join(__dirname, 'node_modules'),
								modulesDirectories: ['node_modules'],
								extensions: ['', '.json', '.js', '.jsx', '.scss', '.png', '.jpg', '.jpeg', '.gif']
							}
						},
					]
				},
				output: {
					filename: "bundle.js"
				}
			}))
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'))
	});
});