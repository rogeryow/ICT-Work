import * as helper from './library/library.js'
import * as vars from './library/variables.js'
import { DataTable } from './library/dataTable.js'

function eventListeners() {

	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(vars.styleFiles)
		helper.loadScript(vars.scriptFiles)
	})

	window.addEventListener('load', function() {
    	tableDisability.init()
		tableDisability.events()
		tableDisability.search()
	})

}

const conns = {
	disability: {
		url:   'control/getDataByID', 
		table: 'vw_Disability_list', 
		field: 'id', 
		value: '',	
	}
}

const tableDisability = {
	dataTable: null,
	tableId: '#tableDisability',
	dataUrl: `${helper.getPath.path}control/getTableUsers`,
	columns: [
		{
			title: 'ID',
			data:  'id',
			className: 'hidden',
		},
		{
			title: 'Recently Added',
			data:  'name',
			width: '90%',	
		},
	],

	init: function() {
		tableDisability.dataTable = new DataTable(tableDisability)
		tableDisability.dataTable.options.dom = 
		"<'row'<'col-sm-6'l><'col-sm-12'f>>" + 
		"<'row'<'col-sm-12'tr>>" + 
		"<'row'<'col-sm-12'p><'col-sm-12'i>>"
		tableDisability.dataTable.options.ajax.data = function(data) {
			data.name = document.getElementById('searchDisability').value
		}
		tableDisability.dataTable.createTable()
	},

	events: function() {
		const firstRow = 0
		tableDisability.dataTable.table[firstRow].tBodies[firstRow]
		.addEventListener('click', function(ev){
			conns.disability.value = helper.getTableRow(ev)[firstRow]
			helper.getDataByField(conns.disability).then((data) => {
				console.log(data[0])
			})
		})
	},

	search: function() {
		const delay = 1000
		const search = helper.delay(() => tableDisability.dataTable.refresh() , delay)
		document.getElementById('searchDisability').addEventListener('keyup', (ev) => {
	  		search()
		}) 
	},

}


eventListeners()
