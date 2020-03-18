const ONE_SEC_IN_MILISEC = 1000
const ONE_MIN_IN_SEC =  60

const workSched = {
	morningIn:    ['7:00', '8:00'],
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
					{time: '8:05'},
					{time: '8:09'},
					{time: '12:00'},
					{time: '13:00'},
					{time: '13:09'},
					{time: '16:49'},
				]
			},
			{
				date: '3/25/2020',
				record: [
					{time: '7:30'},
					{time: '8:15'},
					{time: '8:10'},
					{time: '12:01'},
					{time: '13:35'},
				]
			}
		]
	},

	{
		ID: '102', dtr:
		[ 
			{
				date: '3/16/2020',
				record:[
					{time: '7:31'},
					{time: '8:07'},
					{time: '8:20'},
					{time: '12:30'},
					{time: '13:01'},
				]
			},
			{
				date: '3/24/2020',
				record: [
					{time: '7:30'},
					{time: '8:15'},
					{time: '8:10'},
					{time: '12:21'},
					{time: '13:45'},
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

			filterSched({
				records: value['record'],
				date: date, 
				duration: workSched.morningIn,
			})

		}

	}
}

function filterSched({records, date, duration}) {
	timeStart = duration[0]
	timeEnd = duration[1]
	unixStart = convertDateToUnix(new Date(`${date} ${timeStart}`))
	unixEnd = convertDateToUnix(new Date(`${date} ${timeEnd}`))

	console.log(date)
	let record = records.entries()
	for (const [index, value] of record) {
		let unixTime = value['unix']
		max = unixTime
		if(unixTime >= unixStart && unixTime <= unixEnd) {
				
		}
	}
}

pushUnixToDtr(userSched)