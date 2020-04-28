import * as helper from './library/library.js'
import * as vars from './library/variables.js'
import { DataTable } from './library/dataTable.js'

const basePath = helper.getPath.basePath + '/DTR/Control'
console.log(basePath)

const tableOption = {
	id: '#demo',
	ajax: {
    	url: `${helper.getPath.path}control/getTableUsers`,
    	data: function(data) {
    		data['name'] = document.getElementById('search').value
    		data['date_start'] = document.getElementById('date-start').value
    		data['date_end'] = document.getElementById('date-end').value
    	},
	}, 
	columns: [
		{ title: 'ID', data:  'user_id',},
		{ title: 'Name', data:  'name',  },
		{ title: 'Date', data:  'date', },
		{ title: 'Morning In', data: 'morning_in', },
		{ title: 'Morning Out', data: 'morning_out', },
		{ title: 'Afternoon In', data: 'afternoon_in', },
		{ title: 'Afternoon Out', data: 'afternoon_out', },
	],
}

class dataTable extends DataTable {
	constructor() {
		super(tableOption)
	}

	search() {
		this.delay = 1000
		this.search = helper.delay(() => this.refresh() , this.delay)
		document.getElementById('search').addEventListener('keyup', (ev) => {
	  		this.search()
		}) 
		document.getElementById('date-start').addEventListener('change', (ev) => {
			this.refresh()
		})
		document.getElementById('date-end').addEventListener('change', (ev) => {
			this.search()
		})
	}

}

function eventListeners() {

	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(vars.styleFiles)
		helper.loadScript(vars.scriptFiles)
	})

	window.addEventListener('load', function() {
		const table = new dataTable(tableOption)
		table.createTable()
		table.search()
	})

	document.getElementById('btn-print').addEventListener('click', getLog)
}

function getLog() {
	let name = document.getElementById('search').value
	let dateStart = document.getElementById('date-start').value
	let dateEnd = document.getElementById('date-end').value

	$.ajax({
        url : `${basePath}/getLogs/${name}/${dateStart}/${dateEnd}`,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {
        	console.log('success')
        	console.log(data)
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
        	console.log('error')
            console.log(jqXHR.responseText)
        }
    })
}
eventListeners()
