import * as helper from './library/library.js'
import * as vars from './library/variables.js'
import { DataTable } from './library/dataTable.js'


function eventListeners() {

	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(vars.styleFiles)
		helper.loadScript(vars.scriptFiles)
	})

	window.addEventListener('load', function() {
		const table = new dataTable(option)
		table.createTable()
		const get = document.getElementById('search').value
		// table.bindData('name', get)
		table.search()
  //   	tables.disability.init()
		// tables.disability.getRowData()
		// this.search()
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

const option = {
	id: '#demo',
	ajax: {
    	url: `${helper.getPath.path}control/getTableUsers`,
    	data: function(data) {
    		data['name'] = document.getElementById('search').value
    	}
	}, 
	columns: [
		{ title: 'ID', data:  'id', },
		{ title: 'Name', data:  'name', width: '90%', },
	],
}

class dataTable extends DataTable {
	constructor() {
		super(option)
	}

	search() {
		this.delay = 1000
		this.search = helper.delay(() => this.refresh() , this.delay)
		document.getElementById('search').addEventListener('keyup', (ev) => {
	  		this.search()
		}) 
	}

}


// tables.disability = {
// 	option: {
// 		id: '#demo',
// 		ajax: `${helper.getPath.path}control/getTableUsers`,
// 		columns: [
// 			{ title: 'ID', data:  'id', },
// 			{ title: 'Name', data:  'name', width: '90%', },
// 		],
// 	},

// 	init: function() {
// 		this.dataTable = new DataTable(this.option)
// 		this.dataTable.options.ajax.data = function(data) {
// 			const searchValue = ''
// 			// const eldocument.getElementById('searchDisability').value
// 			data.name = searchValue
// 		}
// 		this.dataTable.createTable()
// 	},

// 	getRowData: function() {
// 		this.dataTable.table[0].tBodies[0]
// 		.addEventListener('click', function(ev){
// 			conns.disability.value = helper.getTableRow(ev)[0]
// 			helper.getDataByField(conns.disability).then((data) => {
// 				console.log(data[0])
// 			})
// 		})
// 	},

// 	search: function() {
// 		const delay = 1000
// 		const search = helper.delay(() => this.dataTable.refresh() , delay)
// 		document.getElementById('searchDisability').addEventListener('keyup', (ev) => {
// 	  		search()
// 		}) 
// 	},

// }


eventListeners()
