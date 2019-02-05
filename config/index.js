const sites = require('./sites')

const config = {
	viewsPath: ['templates/v1/pages'],
	hbsPartialsPath: ['templates/v1/layout', 'templates/v1/components'],
	targetBuildFolder: 'build',
	staticFilesBaseUrl: 'resources/okchem',
	sites
}

module.exports = config
