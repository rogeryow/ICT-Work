export class DataTable{
	options = {

		bLengthChange: false,
        bFilter: false,
        bDestroy: true,
        bProcessing: true, 
        bServerSide: true, 
		bRetrieve: true,
        order: [],
    	columns: [],

		ajax: {
	        url: '',
	        type: 'POST',
	        data: {} 
    	},

		dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" + 
			 "<'row'<'col-sm-12'tr>>" + 
			 "<'row'<'col-sm-5'i><'col-sm-7'p>>", 

	}


	constructor(data) {
		this.tableID = data.tableId
		this.options.ajax.url = data.dataUrl
		this.options.columns = data.columns
	}


	createTable() {
		this.table = $(this.tableID).dataTable(this.options)
	}

	refresh() {
		this.table.fnDraw()
	}

}