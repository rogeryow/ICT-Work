const btnUploadDb = document.getElementById('btn-upload-db')
const fileUpload = document.getElementById('file-upload')
const basePath = getPath.basePath + '/dataTable/index.php'

fileUpload.addEventListener('change', function(evt) {
	readFile()
})

btnUploadDb.addEventListener('click', uploadToDb)

function uploadToDb() {
    const dtrChunks = splitArray(dtr, 1000)

	if(dtrChunks.length > 0) {
		insert(dtr) 
	} else {
		console.log('Please upload logs')
	}
}

function splitArray(array, perChunk) {
    let arrayChunks = []
    const arraySize = array.length
    const numOfLoops = Math.ceil(arraySize/perChunk)

    for(let i = 0; i < numOfLoops ; i++){
        arrayChunks.push(array.splice(0, 500))
    }
    
    return arrayChunks
}

function insert(logs) {
    console.log(logs)
	$.ajax({
        url : `${basePath}/person/upload_logs`,
        type: 'POST',
        data: {logs: JSON.stringify(logs)},
        dataType: 'JSON',
        success: function(data)
        {
        	console.log(data)
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
        	console.log(jqXHR.responseText)
        }
    })
}