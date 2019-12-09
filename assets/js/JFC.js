import { loadScript,getPath } from './library.js'

const control = {
	
	init: function(){
		const scriptFiles = [
			`${getPath.path}assets/jquery/jquery-3.4.1.js`,
			`${getPath.path}assets/jquery/sample.js`]
		loadScript(scriptFiles)
		
	}

}

document.addEventListener('DOMContentLoaded', control.init)



