var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Implement:
// https://www.npmjs.com/package/node-json-db
//
app.get('/api/orders', cors(), (req, res) => {
  res.send(
    {
      orders: [
        { name: "order1", value: "$100", complete?: "false" },
        { name: "order2", value: "$100", complete?: "false" },
        { name: "order3", value: "$100", complete?: "false" },
        { name: "order4", value: "$100", complete?: "false" }
      ]
    }
  )
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
