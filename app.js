var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var config = require('./config.json');
if(config.debug){
  //热部署，部署到线上时必须gulp pack重新打包
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);
  // 为使用nodejs做服务器配置webpack-dev-middleware
  // 如果需要浏览器自动刷新需要webpack-dev-server中间件
  app.use(webpackDevMiddleware(compiler,webpackConfig.devServer));
   // 为实现HMR配置webpack-hot-middleware
  app.use(require("webpack-hot-middleware")(compiler));
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// express.static 可以方便地托管静态文件
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/wechat/v4.0', express.static(config.buildPath));//虚拟目录访问

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
