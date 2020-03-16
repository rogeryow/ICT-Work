const ONE_SEC_IN_MILISEC = 1000
const ONE_MIN_IN_SEC =  60

const schedule = {
	morningIn:    ['7:00', '8:00'],
	morningOut:   ['12:00', '12:30'],
	afternoonIn:  ['12:31', '13:00'],
	afternoonOut: ['17:00', '17:30'],
}

const testSched = [
	{
		date: '3/16/2020',
		time: [
			'7:30',
			'8:05',
			'8:09',
			'12:00',
			'13:00',
			'13:09',
			'16:49',
		]
	},
	{
		date: '3/24/2020',
		time: [
			'7:30',
			'8:15',
			'8:10',
			'12:01',
			'13:35',
		]
	}
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


function calcuateDTR(schedule, dtr) {
	console.log(schedule)
	console.log(dtr)
}

calcuateDTR(schedule, testSched)