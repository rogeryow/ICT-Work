import * as helper from './library/library.js'
import * as vars from './library/variables.js'
import { DataTable } from './library/dataTable.js'

const basePath = helper.getPath.basePath + '/DTR/Control'

const tableOption = {
	id: '#demo',
	ajax: {
    	url: `${helper.getPath.path}control/getTableUsers`,
    	data: function(data) {
    		data['name'] = document.getElementById('search').value
    		data['date_start'] = document.getElementById('date-start').value
    		data['date_end'] = document.getElementById('date-end').value
    		data['department'] = document.getElementById('department').value
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
		document.getElementById('department').addEventListener('change', (ev) => {
			this.search()
		})
	}
}

function eventListeners() {
	const btnPrint = document.getElementById('btn-print')
	const selDept = document.getElementById('department')

	document.addEventListener('DOMContentLoaded', function() {
		helper.loadCSS(vars.styleFiles)
		helper.loadScript(vars.scriptFiles)
		helper.loadScript(vars.view)
	})

	window.addEventListener('load', function() {
		const table = new dataTable(tableOption)
		table.createTable()
		table.search()
		setDept(selDept)
	})

	btnPrint.addEventListener('click', getLog)
}

function getLog() {
	let name = document.getElementById('search').value
	let department = document.getElementById('department').value	
	let dateStart = document.getElementById('date-start').value
	let dateEnd = document.getElementById('date-end').value
	let params = ''

	if(name) {
		params += `/name/${name}`
	}
	if(dateStart) {
		params += `/date_start/${dateStart}`
	}
	if(dateEnd) {
		params += `/date_end/${dateEnd}`
	}
	if(department) {
		params += `/department/${department}`
	}

	const url = `${basePath}/getLogs${params}`

	$.ajax({
        url : url,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {
        	const logsPrintFormat = arrangeLogsForPrint(data)
        	setLogs(logsPrintFormat)
        	pdfToIframe(getPdfSrc('dtr'), 'iframePDF')
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log(jqXHR.responseText)
        }
    })
}

function arrangeLogsForPrint(logs) {
	const dateStart = document.getElementById('date-start').value
	const dateEnd = document.getElementById('date-end').value
	const uniqueIds = [...new Set(logs.map((log) => { return log['user_id'] }))]
	const logsPrintFormat  = []


	let entryOfIds = Object.entries(uniqueIds)
	for (const [key, value] of entryOfIds) {
		let arrholder = []
		const id = value

		arrholder.push(id)
		arrholder.push(dateStart)
		arrholder.push(dateEnd)

		let entryLogs = Object.entries(logs)
		let arrLogs = []
		for (const [key, value] of entryLogs) {
			if(value['user_id'] == id) {
				let log = []
				log.push(value['date'])
				log.push(value['morning_in'])
				log.push(value['morning_out'])
				log.push(value['afternoon_in'])
				log.push(value['afternoon_out'])
				arrLogs.push(log)
			}
		}
		arrholder.push(arrLogs)
		logsPrintFormat.push(arrholder)
	}

	return logsPrintFormat
}

function setDept(select) {
	$.ajax({
        url : `${basePath}/getDept`,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {
			data.forEach( (row) => {
				let opt = document.createElement('option')
				opt.value = row['id']
				opt.innerHTML = row['name']
				select.appendChild(opt)
			})
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log(jqXHR.responseText)
        }
    })
}

eventListeners()
