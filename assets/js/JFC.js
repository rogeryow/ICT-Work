import { loadCSS,loadScript,getPath } from './library.js'

const control = {
		styleFiles: [
			`${getPath.path}assets/bootstrap/css/bootstrap.min.css`,
			`${getPath.path}assets/datatables/css/dataTables.bootstrap.css`,
			`${getPath.path}assets/bootstrap-datepicker/css/bootstrap-datepicker3.min.css`
		],

		scriptFiles: [
			`${getPath.path}assets/jquery/jquery-2.1.4.min.js`,
			`${getPath.path}assets/bootstrap/js/bootstrap.min.js`,
			`${getPath.path}assets/datatables/js/jquery.dataTables.min.js`,
			`${getPath.path}assets/datatables/js/dataTables.bootstrap.js`,
			`${getPath.path}assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js`
		],
	
	init: function(){
		loadCSS(control.styleFiles)
		loadScript(control.scriptFiles)
	},

	afterInit: function(){
			dataTable()	
	}

}

function dataTable(){
	let table = document.querySelector("#table")
	const url = `${getPath.path}control/getTableUsers`
	console.log(url)

	table = $('#table').dataTable({
		"bLengthChange": false,
        "bFilter": false,
        "bDestroy": true,
        "processing": true, 
        "serverSide": true, 

        "ajax": {
            "url": url,
            "type": "POST",
        },
	})
}

document.addEventListener('DOMContentLoaded', control.init)
window.onload = control.afterInit
	

// #if pages close
// window.onunload

// #if person clicks no other tab
// window.onbeforeunload 


// https://javascript.info/onload-ondomcontentloaded

