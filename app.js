var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var appendViews = require('./core/views')
var appendStaticFiles = require('./core/staticFiles')
var appendRouters = require('./core/routers')

var app = express()

// define views
appendViews(app)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// define static files
appendStaticFiles(app)

// define routers
appendRouters(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	// res.render('error')
	res.send(err)
})

module.exports = app
