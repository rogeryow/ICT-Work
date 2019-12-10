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

		const url = `${getPath.path}control/getTableUsers`
		var tableJFC = ''
		const tableId = '#table'

		tableJFC = new dataTable(url,table,tableId)
		tableJFC.start()

		console.log(tableJFC.table)

	}

}

class dataTable{
	table = ''
	tableId = ''
	url = ''
	options = {}

	default = {
		"bLengthChange": false,
        "bFilter": false,
        "bDestroy": true,
        "processing": true, 
        "serverSide": true, 
	}

	ajax = {
		"ajax": {
	        "url": ``,
	        "type": "POST",
    	}
	}

	constructor(url,table,tableId) {
		this.url = url
		this.table = table
		this.tableId = tableId
	}

	start() {
		this.ajax.ajax.url = this.url
		this.options = Object.assign(this.default, this.ajax)
		this.table = $(this.tableId).dataTable(this.options)
	}

	refresh() {
		this.table.fnClearTable()
		this.table.fnDraw()
		console.log('refreshed Done')
	}

}

document.addEventListener('DOMContentLoaded', control.init)
window.onload = control.afterInit
	

// #if pages close
// window.onunload

// #if person clicks no other tab
// window.onbeforeunload 


// https://javascript.info/onload-ondomcontentloaded

