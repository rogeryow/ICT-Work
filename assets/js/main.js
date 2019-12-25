import * as helper from './library/library.js'
import * as x from './library/variables.js'
import { DataTable } from './library/dataTable.js'

function eventListeners() {

	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(x.styleFiles)
		helper.loadScript(x.scriptFiles)
	})

	window.addEventListener('load', function() {
    	x.tableDisability.dataTable = new DataTable(x.tableDisability)
		x.tableDisability.dataTable.createTable()
		dataTableEvents()
	})

	function dataTableEvents() {
		x.tableDisability.dataTable.this.table[0].tBodies[0]
		.addEventListener('click', function(ev){
			x.linkDisability.value = helper.getTableRow(ev)[0]
			helper.getDataByField(x.linkDisability).then(data => console.log(data[0]))
		})
	}
}

eventListeners()
