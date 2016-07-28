
'use strict';
var path = require('path');
var fs=require('fs');
var gulp = require('gulp')
var webpack = require('webpack')

var gutil = require('gulp-util')

var webpackConf = require('./webpack.config')
var config = require('./config.json')

var src = path.resolve(process.cwd(), config.devPath);
var assets = path.resolve(process.cwd(), config.buildPath);

gulp.task('new', () => {
    var page=gulp.env.page;
    var html=path.resolve(src, page+'.html');
    var js=path.resolve(src+'/javascripts', page+'.js');
    var css=path.resolve(src+'/stylesheets', page+'.css');
    var tmpl=path.resolve(src+'/templates', page+'.tmpl');
    if(page){
        fs.exists(html, function (exists) {
            if(exists){
                console.log('请勿重复创建');
            }else{
                fs.writeFile(html,'',function (err) {
                  if (err) throw err;
                });
                fs.writeFile(js,'',function (err) {
                  if (err) throw err;
                });
                fs.writeFile(css,'',function (err) {
                  if (err) throw err;
                });
                fs.writeFile(tmpl,'',function (err) {
                  if (err) throw err;
                });
            }
        })
    }else{
        console.log('请输入filename');
    }
})
// js check
gulp.task('hint', () => {
    var jshint = require('gulp-jshint')
    var stylish = require('jshint-stylish')

    return gulp.src([
            '!' + src + '/javascripts/lib/**/*.js',
            src + '/javascripts/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
})

// clean assets
gulp.task('clean', ['hint'], () => {
    var clean = require('gulp-clean')

    return gulp.src(assets, {read: true}).pipe(clean())
})

// run webpack pack
gulp.task('pack', ['clean'], (done) => {
    webpack(webpackConf, (err, stats) => {
        if(err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({colors: true}))
        done()
    })
})

// html process
gulp.task('default', ['pack'])
/*gulp.task('default', ['pack'], () => {
    let replace = require('gulp-replace')
    let htmlmin = require('gulp-htmlmin')

    return gulp
        .src(assets + '/*.html')
        // @see https://github.com/kangax/html-minifier
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(assets))
})*/

// deploy assets to remote server
gulp.task('deploy', () => {
    var sftp = require('gulp-sftp')
    return gulp.src(assets + '/**')
        .pipe(sftp(config.online?config.onServer.sftp:config.testServer.sftp))
})

