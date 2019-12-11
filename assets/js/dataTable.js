export class dataTable{
	options = {}

	default = {
		'bLengthChange': false,
        'bFilter': false,
        'bDestroy': true,
        'processing': true, 
        'serverSide': true, 
	}

	serverSide = {
		'ajax': {
	        'url': '',
	        'type': 'POST',
    	}
	}

	data = {
		columns: []
	}

	cols = ['title', 'data', 'width']

	constructor(table,tableId,url) {
		this.table = table
		this.tableId = tableId
		this.url = url
	}

	start() {
		this.serverSide.ajax.url = this.url
		this.options = Object.assign(this.default, this.serverSide, this.data)
		this.table = $(this.tableId).dataTable(this.options)
	}

	setColumns(data) {
		data.map((row, key) =>{
			let getRow = {}
			data[key].map((val, i) => {
				Object.assign(getRow, { [this.cols[i]]: val })
			}, {})
			this.data.columns.push(getRow)
		})
	}

	refresh() {
		this.table.fnClearTable()
		this.table.fnDraw()
	}

}