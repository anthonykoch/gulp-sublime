
var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var babel         = require('gulp-babel');
var config        = require('../config').js;
var handleError   = require('../utils/handle-error')
var sublime       = require('../../../index');

// Compress and concat js
gulp.task('javascript', function(done) {

	return gulp.src(config.src)
		.pipe(plumber(handleError('javascript')))
		.pipe(babel())
});



