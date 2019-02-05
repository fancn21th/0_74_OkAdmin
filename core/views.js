const engines = require('consolidate')
const path = require('path')
const { viewsPath } = require('../config')
const registerHelpers = require('../utilities/registerHbsHelper')
const loadHbsPartials = require('../utilities/loadHbsPartials')

/**
 * All views defined as below
 */
module.exports = app => {
	// view engine setup
	app.engine('hbs', engines.handlebars)

	app.set(
		'views',
		viewsPath.map(function(uri) {
			return path.join(__dirname, '../', uri)
		})
	)

	app.set('view engine', 'hbs')

	registerHelpers()

	loadHbsPartials()
}
