import { loadCSS,loadScript,getPath } from './library/library.js'
import { dataTable } from './library/dataTable.js'
import * as server from './library/server.js'

const control = {
	table: document.getElementById('table'),
	styleFiles: [
		`${getPath.path}assets/bootstrap/css/bootstrap.min.css`,
		`${getPath.path}assets/datatables/css/dataTables.bootstrap.css`,
		`${getPath.path}assets/bootstrap-datepicker/css/bootstrap-datepicker3.min.css`
	],
	scriptFiles: [
		`${getPath.path}assets/jquery/jquery-2.1.4.min.js`,
		`${getPath.path}assets/bootstrap/js/bootstrap.min.js`,
		`${getPath.path}assets/datatables/js/jquery.dataTables.min.js`,
		`${getPath.path}assets/datatables/js/dataTables.bootstrap.js`,
		`${getPath.path}assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js`
	],
	
	init: function(){
		loadCSS(control.styleFiles)
		loadScript(control.scriptFiles)
	},

	afterInit: function(){
		const tableJFC = new dataTable(table,'#table',`${getPath.path}control/getTableUsers`)		
		const cols = [
			['ID', 'id', '10%'],
			['Name','surname','30%'],
			['Gender','gender','25%'], 
			['Contact','contact',''], 
		]
		tableJFC.setColumns(cols)
		tableJFC.start()

		table.addEventListener('click', control.removeRow)
		document.querySelector('#submit').addEventListener('click', (ev) =>{
			ev.preventDefault()
			control.addRow()
			control.tableLimit()
		})
	},

	getFormData: function() {
		let name = document.querySelector('#name').value
		let gender = document.querySelector('#gender').value
		return [name,'','',gender]
	},

	viewRow: function() {
		table.parentNode.childNodes[0].innerText
	},
	
	addRow: function() {
		let formData = control.getFormData()
		let newRow   = table.insertRow(1);
		formData.map((data, index) => {
			newRow.insertCell(index).innerHTML = data;
		})
	},

	removeRow: function() {
		ev.target.parentNode.remove()
	},

	tableLimit: function() {
		if(table.getElementsByTagName('tbody')[0].childElementCount > 10){		
			table.getElementsByTagName('tbody')[0].deleteRow(numRows - 1)			
		}

	}

}

document.addEventListener('DOMContentLoaded', control.init)
window.onload = control.afterInit

