export class DataTable{
	option = {
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
	        data: {}, 
    	},

		dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" + 
			 "<'row'<'col-sm-12'tr>>" + 
			 "<'row'<'col-sm-5'i><'col-sm-7'p>>", 
	}

	constructor(option) {
		this.id = option.id 
		this.option.ajax.url = option.ajax.url
		this.option.ajax.data = option.ajax.data || ''
		this.option.columns = option.columns

	}

	createTable() {
		this.table = $(this.id).dataTable(this.option)
	}

	refresh() {
		console.log('nice')
		this.table.fnDraw()
	}

}