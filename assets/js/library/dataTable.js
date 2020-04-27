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

		createdRow: function( row, data, dataIndex){
            let morningIn = data.morning_in
            let morningOut = data.morning_out
            let afternoonIn = data.afternoon_in
            let afternoonOut = data.afternoon_out               
            fillColumnColor({data: morningIn, row: row, index: 3})
            fillColumnColor({data: morningOut, row: row, index: 4})
            fillColumnColor({data: afternoonIn, row: row, index: 5})
            fillColumnColor({data: afternoonOut, row: row, index: 6})
        }
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

function fillColumnColor({data, row, index}) {
	if(data == 0) {
	    row.children[index].classList.add('absent')
	    row.children[index].innerHTML = ''
	} else {
	    row.children[index].classList.add('green')
	}
}