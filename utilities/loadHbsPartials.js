const Handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')
const { hbsPartialsPath } = require('../config')

const loadParthialByPath = (partialsDir, prefix) => {
	const filenames = fs.readdirSync(partialsDir)
	filenames.forEach(filename => {
		if (fs.lstatSync(`${partialsDir}/${filename}`).isDirectory()) {
			loadParthialByPath(`${partialsDir}/${filename}`, `${filename}.`)
		} else {
			const matches = /^([^.]+).hbs$/.exec(filename)
			if (!matches) {
				return
			}
			const name = `${prefix || ''}${matches[1]}`
			const template = fs.readFileSync(`${partialsDir}/${filename}`, 'utf8')
			Handlebars.registerPartial(name, template)
		}
	})
}

module.exports = () =>
	hbsPartialsPath.forEach(uri =>
		loadParthialByPath(path.join(__dirname, '../', uri))
	)
