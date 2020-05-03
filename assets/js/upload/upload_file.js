const ONE_SEC_IN_MILISEC = 1000
const ONE_MIN_IN_SEC =  60
var dtr = []

const workSched = {
	morningIn:    [
		['7:00', '9:00'],
	],
	morningOut:   ['12:00', '12:30'],
	afternoonIn:  ['12:31', '13:00'],
	afternoonOut: ['17:00', '17:30'],
}

function convertDateToUnix(date) {
	date = (typeof date === 'undefined') ? new Date() : date
	return formulaDateToUnix(date)
}

function convertUnixToDate(unix) {
	unix = (typeof unix === 'undefined') ? formulaDateToUnix(new Date()) : unix
	return formulaUnixToDate(unix)
}

function convertMinToUnix(mins) {
	mins = (typeof mins === 'undefined') ? 0 : mins
	return mins * ONE_MIN_IN_SEC
}

function formulaDateToUnix(date) {
	return Math.round(date.getTime() / ONE_SEC_IN_MILISEC)
}

function formulaUnixToDate(unix) {
	return new Date(unix * ONE_SEC_IN_MILISEC)
}

function convertDateToTime(date) {
	if(date == 'Invalid Date') return 0
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12
	minutes = minutes < 10 ? '0' + minutes : minutes
	let strTime = hours + ':' + minutes + ' ' + ampm
	return strTime
}

function ampmTo24(time) {
	if(time == 0) return
	var hours = Number(time.match(/^(\d+)/)[1])
	var minutes = Number(time.match(/:(\d+)/)[1])
	var AP = time.match(/\s(.*)$/)
	if (!AP) AP = time.slice(-2)
	else AP = AP[1]
	if(AP == "PM" && hours < 12) hours = hours+12
	if(AP == "AM" && hours == 12) hours = hours-12
	var Hours24 = hours.toString()
	var Minutes24 = minutes.toString()
	if(hours < 10) Hours24 = "0" + Hours24
	if(minutes < 10) Minutes24 = "0" + Minutes24
	return Hours24 + ":" + Minutes24
}

function calculateSchedule(userSched) {
	console.log(userSched)
	let userEntries = userSched.entries()
	for (const [index, value] of userEntries) {
		let id = value['ID']
		let entry = Object.entries(value['dtr'])
		for (const [key, value] of entry) {
			let date = value['date']

			let records = Object.entries(value['record'])
			for (const [key, value] of records) {
				let timestamp = `${date} ${value['time']}`
				value['unix'] = convertDateToUnix(new Date(timestamp))
			}

			const morningIn = getTimeBetween({
				records: value['record'],
				date: date, 
				duration: [
					{duration: workSched.morningIn[0], option: 'min', status: 'on-time'},
					{duration: ['8:00', '9:00'], option: 'min', status: 'late'},
				],
			})

			const morningOut = getTimeBetween({
				records: value['record'],
				date: date, 
				duration: [
					{duration: ['12:00', '12:30'], option: 'max', status: 'on-time'},
					{duration: ['11:30', '12:00'], option: 'max', status: 'undertime'},
					{duration: ['12:30', '12:45'], option: 'min', status: 'on-time'}, //this
				],
			})

			const afternoonIn = getTimeBetween({
				records: value['record'],
				date: date, 
				duration: [
					{duration: ['12:31', '13:00'], option: 'min', status: 'on-time'}, //this
					{duration: ['13:00', '14:00'], option: 'min', status: 'late'}, 
				],
			})

			const afternoonOut = getTimeBetween({
				records: value['record'],
				date: date, 
				duration: [
					{duration: workSched.afternoonOut, option: 'max', status: 'on-time'},
					{duration: ['17:31', '22:00'], option: 'max', status: 'overtime', },
					{duration: ['14:01', '17:00'], option: 'max', status: 'undertime', },
				],
			})
			// console.log(id)
			// console.log(date)
			// console.log('morning in: ' + convertDateToTime(convertUnixToDate(morningIn)))
			// console.log('morning out: ' + convertDateToTime(convertUnixToDate(morningOut)))
			// console.log('afternoon In: ' + convertDateToTime(convertUnixToDate(afternoonIn)))
			// console.log('afternoon Out: ' + convertDateToTime(convertUnixToDate(afternoonOut)))
			// console.log('')
			let record = []
			record.push(id)
			record.push(date)
			record.push(convertDateToTime(convertUnixToDate(morningIn)))
			record.push(convertDateToTime(convertUnixToDate(morningOut)))
			record.push(convertDateToTime(convertUnixToDate(afternoonIn)))
			record.push(convertDateToTime(convertUnixToDate(afternoonOut)))
			dtr.push(record)
		}
	}
	// console.log(dtr)
	fillTable(dtr)
}

function fillTable(dtr) {
	$('#table-dtr').DataTable( {
		data: dtr,
		columns: [
		    { title: 'ID' },
		    { title: 'Date' },
		    { title: 'Morning In' },
		    { title: 'Morning Out.' },
		    { title: 'Afternoon In' },
		    { title: 'Afternoon Out' }
		],
		'createdRow': function( row, data, dataIndex){
            let morningIn = data[2]
            let morningOut = data[3]
            let afternoonIn = data[4]
            let afternoonOut = data[5]                    
            fillColumnColor({data: morningIn, row: row, index: 2})
            fillColumnColor({data: morningOut, row: row, index: 3})
            fillColumnColor({data: afternoonIn, row: row, index: 4})
            fillColumnColor({data: afternoonOut, row: row, index: 5})
        }
	})	


	// wrong
	function fillColumnColor({data, row, index}) {
		if(data == 0) {
            row.children[index].classList.add('absent')
            row.children[index].innerHTML = ''
        } else {
            row.children[index].classList.add('green')
        	// data = parseInt(data.substring(0,5).replace(':',''))
        }

        // if(data != 0) {
	       //  switch(index) {
	       //  	case 2:
	       //  		if(data <= 800) {
	       //  			row.children[index].classList.add('green')
	       //  		}else if(data > 800) {
	       //  			row.children[index].classList.add('dark-green')
	       //  		}
	       //  	break
	       //  }
        // }
	}
}

function getTimeBetween({records, date, duration}) {
	let status = ''
	let filtered = calculateRecords(records)
	let getFinalTime = getCalculatedTime(filtered) 	
	filterRecords(records)

	function calculateRecords(records) {

		let filtered = []

		if(duration) {
			let otherEntries = duration.entries()
			for (const [index, value] of otherEntries) {
				option = value['option']
				dateStart = value['duration'][0]
				dateEnd = value['duration'][1]
				status = value['status']

				filtered = filterStartToEnd({
					records: records,
					start: convertDateToUnix(new Date(`${date} ${dateStart}`)),
					end: convertDateToUnix(new Date(`${date} ${dateEnd}`)),
				})

				if(filtered.length > 0) {
					return filtered
					break
				}
			}
		}

		function filterStartToEnd({records, start, end}) {
			return  records.filter((record) => {
				if(!record['status']) {
					return record['unix'] >= start && record['unix'] <= end
				}
			}).map((value) => value['unix'])	
		}		
	}

	function getCalculatedTime(filtered) { //invalid or 0 for now
		if(filtered == undefined) return 'invalid'

		if(filtered.length > 0) {
			switch(option) {
				case 'min':
					return Math.min(...filtered)
				break
				case 'max':
					return Math.max(...filtered)
				break
			}
		} else return 'invalid'
	}

	function filterRecords(record) {
		if(isNaN(getFinalTime)) return

		const firstRecord = record[0]['unix']

		records.forEach((record, index, records) => {
			if(!record['status']) {
				recordPushStatus(record)
				recordFilter({
					record: record, 
					index: index,
					records: records,
					start: firstRecord,
					end: getFinalTime,
				})
			}
		})	

		function recordPushStatus(record) {
			if(record['unix'] == getFinalTime && record) {
				record['status'] = status
			}
		}

		function recordFilter({record, index, records, start, end}) {
			if(record['unix'] < getFinalTime && record['unix'] >= firstRecord) {
				records.splice(index, 1)
			}
		}
	}
	
	return getFinalTime
}

function readFile() {
	return new Promise((resolve) => {
		const userSched = new Array()
		const reader = new FileReader()
		reader.onload = function() {
			const lines = reader.result.split('\n')
			const setId =  new Set()
			
			const lineEntries = lines.entries()
			for (const [index, value] of lineEntries) {
				setId.add(value.substring('0','9'))
			}

			const setIdEntries = Array.from(setId).sort().entries()
			for (const [index, value] of setIdEntries) {
				if(value.length > 0) {
					userSched.push({ID: value.trim(), dtr: []})
				}
			}

			const pushDate = new Promise((resolve) => {
				const lineEntries2 = lines.entries()
				for (const [index, value] of lineEntries2) {
					let id = value.substring('0','9').trim()
					let date = value.substr('10','11')

					const userSchedEntries = userSched.entries()
					for (const [index, value] of userSchedEntries) {
						let passer = false
						if(value['ID'] == id) {

							if(value['dtr'].length > 0) {

								const dtrEntries = value['dtr'].entries()
								for (const [index, dtr] of dtrEntries) {	
									if(dtr['date'] != date) {
										passer = true
									}else {
										passer = false
									}
								}

							} else {
								passer = true
							}
							
							if(passer) {
								value['dtr'].push({date: date, record: []})
							} 
						}

					}
				}
				resolve(userSched)
			})

			pushDate.then((userSched) => {
				const lineEntries3 = lines.entries()
				for (const [index, value] of lineEntries3) {
					let id = value.substring('0','9').trim()
					let date = value.substr('10','11')
					let time = value.substring('21','29')

					const userSchedEntries = userSched.entries()
					for (const [index, value] of userSchedEntries) {
						
						if(value['ID'] == id) {
							const dateEntries = value['dtr'].entries()
							for (const [key, value] of dateEntries) {
								if(value['date'] == date) {
									value['record'].push({time: time})
								}
							}
						}
					
					}
				}
				console.log(userSched)
			calculateSchedule(userSched)
			})
		}
		reader.readAsText(fileUpload.files[0])
		resolve(userSched)
	})
}


// 

const btnUploadDb = document.getElementById('btn-upload-db')
const fileUpload = document.getElementById('file-upload')
const basePath = getPath.basePath+ '/DTR'

fileUpload.addEventListener('change', function(evt) {
	readFile()
})

btnUploadDb.addEventListener('click', uploadToDb)

async  function uploadToDb() {
    const dtrChunks = splitArray(dtr, 500)

    console.log(dtrChunks)

    const arrLength = dtrChunks.length
	if(arrLength > 0) {
		for(let index = 0; index < arrLength ; index++){	
			startLoading({ 
				msg: `updating database, please wait... ${index+1}/${arrLength}`,
			})
			
			await insert(dtrChunks[index])
				.then((val) => {
					let inserts = 0
					let dups = 0

					inserts += parseInt(val['inserts'])
					dups += parseInt(val['duplicates'])
					
					console.log(dups)
					displayLoadingMessage({
						insert: inserts,
						dups: dups,
					})	
					console.log(`Chunk ${index} done!`)
				})
				.catch((error) => {
					console.log(error)
				})
    	}		
	} else {
		console.log('Please upload logs')
	}

	stopLoading()

}

function startLoading({msg}) {
	document.getElementsByClassName('loader-wrapper')[0].style.display = "flex"
	document.getElementById('loader-text').textContent = msg
}

function displayLoadingMessage({inserts, dups, }) {
	document.getElementById('new').textContent = `New: ${inserts}`
	document.getElementById('dups').textContent = `Duplicates: ${dups}`
}

function stopLoading() {
	document.getElementsByClassName('loader-wrapper')[0].style.display = "none"
}

function splitArray(array, perChunk) {
    let arrayChunks = []
    const arraySize = array.length
    const numOfLoops = Math.ceil(arraySize/perChunk)

    for(let i = 0; i < numOfLoops ; i++){
        arrayChunks.push(array.splice(0, perChunk))
    }
   
    return arrayChunks
}

function insert(logs) {
	return new Promise(function(resolve, reject) {
		$.ajax({
	        url : `${basePath}/control/upload_logs`,
	        type: 'POST',
	        data: {logs: JSON.stringify(logs)},
	        dataType: 'JSON',
	        success: function(data)
	        {
	        	console.log(data)
	        	resolve(data)
	        },
	        error: function (jqXHR, textStatus, errorThrown)
	        {
	        	console.log(jqXHR.responseText)
	        	reject(jqXHR.responseText)
	        }
	    })
    })
}