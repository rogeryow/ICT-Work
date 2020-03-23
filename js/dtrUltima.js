const ONE_SEC_IN_MILISEC = 1000
const ONE_MIN_IN_SEC =  60

const workSched = {
	morningIn:    ['7:00', '9:00'],
	morningOut:   ['12:00', '12:30'],
	afternoonIn:  ['12:31', '13:00'],
	afternoonOut: ['17:00', '17:30'],
}

const userSched = [
	{
		ID: '101', dtr:
		[ 
			{
				date: '3/18/2020',
				record:[
					{time: '7:29'},
					{time: '7:30'},
					{time: '7:31'},
					{time: '8:00'},
					{time: '8:05'},
					{time: '8:09'},
					{time: '11:58'},
					{time: '11:59'},
					// {time: '12:00'},
					// {time: '12:00'},
					{time: '13:00'},
					{time: '13:09'},
					{time: '16:49'},
				]
			},
			{
				date: '3/19/2020',
				record: [
					{time: '7:30'},
					{time: '7:31'},
					{time: '8:00'},
					{time: '8:15'},
					{time: '8:10'},
					{time: '12:01'},
					{time: '13:35'},
					{time: '16:59'},
				]
			}
		]
	},

	{
		ID: '102', dtr:
		[ 
			{
				date: '3/20/2020',
				record:[
					{time: '7:31'},
					{time: '8:07'},
					{time: '8:20'},
					// {time: '11:30'},
					{time: '12:00'},
					{time: '12:30'},
					{time: '12:35'},
					{time: '13:01'},
				]
			},
			{
				date: '3/21/2020',
				record: [
					{time: '7:30'},
					{time: '7:31'},
					{time: '8:15'},
					{time: '8:16'},
					{time: '8:10'},
					{time: '12:21'},
					{time: '13:45'},
					{time: '17:00'},
				]
			}
		]
	},
]

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

function pushUnixToDtr(userSched) {
	let userEntries = userSched.entries()
	for (const [index, value] of userEntries) {

		let entry = Object.entries(value['dtr'])
		for (const [key, value] of entry) {

			let date = value['date']
			let records = Object.entries(value['record'])
			for (const [key, value] of records) {
				let timestamp = `${date} ${value['time']}`
				value['unix'] = convertDateToUnix(new Date(timestamp))
			}

			console.log(date)
			
			const morningIn = calculateSched({
				records: value['record'],
				date: date, 
				duration: workSched.morningIn,
				option: 'min',
			})
			
			const morningOut = calculateSched({
				records: value['record'],
				date: date, 
				duration: workSched.morningOut,
				option: 'min',
				other: [
					{duration: ['11:30', '12:00'], option: 'max'},
				],
			})

			const afternoonIn = calculateSched({
				records: value['record'],
				date: date, 
				duration: workSched.afternoonIn,
				option: 'min',
			})

			const afternoonOut = calculateSched({
				records: value['record'],
				date: date, 
				duration: workSched.afternoonOut,
				option: 'max',
				other: [
					{duration: ['16:00', '16:30'], option: 'max'},
					{duration: ['16:30', '17:00'], option: 'max'},
				],
			})

			console.log('morning in: ' + convertUnixToDate(morningIn))
			console.log('morning out: ' + convertUnixToDate(morningOut))
			console.log('afternoon In: ' + convertUnixToDate(afternoonIn))
			console.log('afternoon Out: ' + convertUnixToDate(afternoonOut))
			console.log('')
		}

	}
}

function calculateSched({records, date, duration, option, other}) {
	let timeStart = duration[0]
	let timeEnd = duration[1]
	let unixStart = convertDateToUnix(new Date(`${date} ${timeStart}`))
	let unixEnd = convertDateToUnix(new Date(`${date} ${timeEnd}`))

	let filtered = getBetweenAndUnixOnly(records)
	let getFinalTime = getCalculatedTime(filtered) 	
	checker(records)

	function getBetweenAndUnixOnly(records) {
		let filtered = []

		filtered = filterStartToEnd({
			start: unixStart,
			end: unixEnd,
		})

		if(filtered.length === 0) {
			if(other) {
				let otherEntries = other.entries()
				for (const [index, value] of otherEntries) {
					option = value['option']
					dateStart = value['duration'][0]
					dateEnd = value['duration'][1]

					filtered = filterStartToEnd({
						start: convertDateToUnix(new Date(`${date} ${dateStart}`)),
						end: convertDateToUnix(new Date(`${date} ${dateEnd}`)),
					})

					if(filtered.length > 0) {
						return filtered
						break
					}
				}
			}
		}else if(filtered.length > 0) return filtered
			
		function filterStartToEnd({start, end}) {
			return  records.filter((record) => {
				return record['unix'] >= start && record['unix'] <= end
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

	function checker(record) {
		// console.log(getFinalTime)
		records.forEach((record) => {
			if(record['unix'] == getFinalTime) {
				record['check'] = true
			}
		})	
	}
	
	return getFinalTime
}

pushUnixToDtr(userSched)
console.log(userSched)