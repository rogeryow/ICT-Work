import { loadCSS,loadScript,getPath } from './library.js'

const control = {
		styleFiles: [
			`${getPath.path}assets/bootstrap/css/bootstrap.min.css`,
			`${getPath.path}assets/datatables/css/dataTables.bootstrap.css`,
			`${getPath.path}assets/bootstrap-datepicker/css/bootstrap-datepicker3.min.css`
		],

		scriptFiles: [
			// `${getPath.path}assets/datatables/js/jquery.dataTables.min.js`,
			// `${getPath.path}assets/datatables/js/dataTables.bootstrap.js`,
			// `${getPath.path}assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js`,
			`${getPath.path}assets/bootstrap/js/bootstrap.min.js`,
			`${getPath.path}assets/jquery/jquery-3.4.1.js`
		],
	
	init: function(){
		loadCSS(control.styleFiles)
		loadScript(control.scriptFiles)
	},

	complete: function(){
		
	}

}

document.addEventListener('DOMContentLoaded', control.init)
window.onload = function(){
	// table2 = $('#table2').DataTable({ 

 //        "bLengthChange": false,
 //        "bFilter": false,
 //        "bDestroy": true,
 //        "processing": true,
 //        "serverSide": true, 
 //        "order": [], 

 //        "ajax": {
 //            "url": getPath.path + "disability_list",
 //            "type": "POST",
 //            "data": {
 //                "name": name,
 //            }
 //        },

 //        dom: 'Bfrtip',
 //        buttons: [
 //            {
 //                extend: 'copyHtml5',
 //                exportOptions: {
 //                    columns: [ 0, ':visible' ]
 //                }
 //            },
 //            {
 //                extend: 'csv',
 //                exportOptions: {
 //                    columns: ':visible'
 //                }
 //            },
 //            {
 //                extend: 'excel',
 //                exportOptions: {
 //                    columns: ':visible'
 //                }
 //            },
 //            {
 //                extend: 'pdfHtml5',
 //                exportOptions: {
 //                    columns: [ 0, 1, 2]
 //                },
 //            },
 //            {
 //                extend: 'print',
 //                exportOptions: {
 //                    columns: ':visible'
 //                }
 //            },
 //        ],
        // buttons: [
        //     'copy', 'csv', 'excel', 'pdf', 'print',
        // ]


        // "columnDefs": [ {
        //     "targets": -1,
        //     "data": null,
        //     "defaultContent": "<button>Click!</button>"
        // } ]

        // https://datatables.net/examples/ajax/null_data_source.html

    // });
}
// document.addEventListener('onload', control.complete)

// #if pages close
// window.onunload

// #if person clicks no other tab
// window.onbeforeunload 


// https://javascript.info/onload-ondomcontentloaded

