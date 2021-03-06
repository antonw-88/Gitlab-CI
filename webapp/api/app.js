const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const homeRouter = require('./routes/homeRouter');
const messageRouter = require('./routes/messageRouter');

// Allow all CORS
app.use(cors())

const port = process.env.PORT || 4000;

/* // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', homeRouter);
app.use('/api/message/', messageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get(process.env.NODE_ENV) === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
