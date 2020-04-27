import * as helper from '../library/library.js'
import * as vars from '../library/variables.js'

function eventListeners() {
	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(vars.styleFiles)
		helper.loadScript(vars.scriptFiles)
		helper.loadScript(vars.uploadScripts)
	})
}

eventListeners()
