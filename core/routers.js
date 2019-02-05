const v1Router = require('../routes/v1')

/**
 * All routers defined as below
 */
module.exports = app => {
	app.use('/', v1Router)
}
