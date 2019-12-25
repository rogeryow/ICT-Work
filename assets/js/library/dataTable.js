export class DataTable{
	options = {}

	defaultOptions = {
		'bLengthChange': false,
        'bFilter': false,
        'bDestroy': true,
        'processing': true, 
        'serverSide': true, 
        "order": [],
	}

	server = {
		'ajax': {
	        'url': '',
	        'type': 'POST',
    	}
	}

	data = {
		columns: []
	}

	constructor(tableData) {
		this.this = this
		this.tableID = tableData.tableID
		this.server.ajax.url = tableData.dataUrl
		this.data.columns = tableData.columns
	}

	createTable() {
		this.options = Object.assign(
			this.defaultOptions, 
			this.server, 
			this.data,
		)
		this.table = $(this.tableID).dataTable(this.options)
	}

	refresh() {
		this.table.fnClearTable()
		this.table.fnDraw()
	}

}