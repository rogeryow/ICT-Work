import {getPath} from './library.js'

export const styleFiles = [
	`${getPath.path}assets/bootstrap/css/bootstrap.min.css`,
	`${getPath.path}assets/datatables/css/dataTables.bootstrap.css`,
	`${getPath.path}assets/bootstrap-datepicker/css/bootstrap-datepicker3.min.css`,
	`${getPath.path}assets/css/JFC.css`,
]

export const scriptFiles = [
	`${getPath.path}assets/jquery/jquery-2.1.4.min.js`,
	`${getPath.path}assets/bootstrap/js/bootstrap.min.js`,
	`${getPath.path}assets/datatables/js/jquery.dataTables.min.js`,
	`${getPath.path}assets/datatables/js/dataTables.bootstrap.js`,
	`${getPath.path}assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js`,
]

export const tableDisability = {
	dataTable: null,
	tableID: '#table',
	dataUrl: `${getPath.path}control/getTableUsers`,
	columns: [
		{
			title: 'ID',
			data:  'id',
			className: 'hidden'
		},
		{
			title: 'Name',
			data:  'name',
			width: '90%'	
		},
	]	
}

export const linkDisability = {
	url:   'control/getDataByID', 
	table: 'vw_Disability_list', 
	field: 'id', 
	value: ''
}