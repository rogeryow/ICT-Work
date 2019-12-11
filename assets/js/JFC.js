import { loadCSS,loadScript,getPath } from './library.js'
import { dataTable } from './dataTable.js'

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
		const tableJFC = new dataTable(table,'#table',`${getPath.path}control/getTableUsers`)		
		const cols = [
			['ID', 'id', '10%'],
			['Name','surname','30%'],
			['Gender','gender','25%'], 
			['Contact','contact',''], 
		]
		tableJFC.setColumns(cols)
		tableJFC.start()

		console.log(tableJFC)
	}

}

document.addEventListener('DOMContentLoaded', control.init)
window.onload = control.afterInit
	

// #if pages close
// window.onunload

// #if person clicks no other tab
// window.onbeforeunload 


// https://javascript.info/onload-ondomcontentloaded

