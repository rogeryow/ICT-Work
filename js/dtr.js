const elListUnix = document.getElementById('elListUnix')
const btnGetUnixTime = document.getElementById('btnGetUnixTime')
const btnConvertUnixTime = document.getElementById('btnConvertUnixTime')
let inpDTR = document.getElementById('inpDtr')

btnGetUnixTime.addEventListener('click', displayUnixNowAndDate)
btnConvertUnixTime.addEventListener('click', displayConvertedUnix)

function displayConvertedUnix() {
	console.log(inpDTR.value)
}

function displayUnixNowAndDate() {
	let unixTime = getUnixTimeToday()
	let convertedUnixTime = convertUnixToDate(unixTime)
	addToList(`${unixTime} - ${convertedUnixTime}`, elListUnix)
}

function addToList(string, ul) {
	let listItem = document.createElement('li')
	listItem.innerHTML = string
	ul.appendChild(listItem)
	ul.scrollIntoView(false)
	ul.scrollTop = ul.scrollHeight
}
const schedule = {
	morningInA: '5:00', 
	morningInB: '11:59',
	morningOutA: '12:00',
	morningOutB: '12:30',
}

function getUnixTimeToday() {
	return Math.round((new Date()).getTime() / 1000)
}

function convertDateToUnix(date) {
	return Math.round(new Date(date).getTime() / 1000)
}

function convertUnixToDate(unixTime) {
	return new Date(unixTime * 1000)
}

function getDateToday() {
	return new Date().toJSON().slice(0,10).replace(/-/g,'.');
}

const testB = [
	['3/13/2020', '6:52'],
	['3/13/2020', '6:59'],
	['3/13/2020', '7:00'],
	['3/13/2020', '7:52'],
	['3/13/2020', '7:54'],
	['3/13/2020', '7:55'],
	['3/13/2020', '7:58'],
	['3/13/2020', '8:05'],
	['3/13/2020', '8:10'],
	['3/13/2020', '11:10'],
	['3/13/2020', '11:10'],
	['3/13/2020', '11:29'],
	['3/13/2020', '11:30'],
	['3/13/2020', '12:00'],
	['3/13/2020', '12:10'],
	['3/13/2020', '12:30'],
	['3/13/2020', '12:31'],
	['3/13/2020', '13:00'],
	['3/13/2020', '13:01'],
	['3/13/2020', '16:59'],
	['3/13/2020', '17:00'],
	['3/13/2020', '17:30'],
	['3/13/2020', '17:31'],
]

const testA = [
	// test one 
	// ['2/3/2020', '7:42'],
	// ['2/3/2020', '12:00'],
	// ['2/3/2020', '12:46'],
	// ['2/3/2020', '12:47'],
	// ['2/3/2020', '17:00'],
	// test two
	// ['2/3/2020', '8:21'],
	// ['2/3/2020', '17:02'],
	['2/3/2020', '8:09'],
	['2/3/2020', '12:00'],
	['2/3/2020', '13:09'],
	['2/3/2020', '16:49'],
]

const testSchedule = [
	['morningIn', '8:00'],
]

function convertArrayToUnix(array) {
	let arrayUnix = []
	array.map((item) => {
		let date = item[0]
		let time = item[1]
		arrayUnix.push([date, time, convertDateToUnix(`${date} ${time}`)])
	})
	return arrayUnix
}

function calculcateSchedule(userSched) {
	let date = userSched[0][0]
	const schedule = {
		morningInA: '7:00',
		morningInB: '9:00',
		underTimeMnOutA: '11:30',
		underTimeMnOutB: '11:59',
		morningOutA: '12:00',
		morningOutB: '12:30',
		afternoonInA: '12:31',
		afternoonInB: '13:00',
		afternoonInLateA: '13:01',
		afternoonInLateB: '13:30',
		underTimeAnOutA: '16:30',
		underTimeAnOutB: '16:59',
		afternoonOutA: '17:00',
		afternoonOutB: '17:30',
	}

	function getFromAndTo(schedule, {date, start, end}) {
		let unixStart = convertDateToUnix(`${date} ${start}`)
		let unixEnd = convertDateToUnix(`${date} ${end}`)
		let unixArray = []
		schedule.forEach((value) => {
			unixTime = value[2]
			if(unixTime >= unixStart && unixTime <= unixEnd) {
				unixArray.push(unixTime)
			}
		})

		return unixArray
	}

	function getMorningIn(unixArray) {
		return Math.min(...unixArray)
	}

	function getMorningOut(unixArray) {
		if(unixArray.length  > 0) {	
			return Math.min(...unixArray)
		} else {
			let aftnoonUnderTimeSched = {
				date: date,  
				start: schedule.underTimeMnOutA, 
				end: schedule.underTimeMnOutB,
			}
			let undertime = getFromAndTo(userSched, aftnoonUnderTimeSched)
			if(undertime.length > 0) {
				return Math.max(undertime)
			} else {
				return 
			}
		}
	}

	function getAfterNoonIn(unixArray) {
		if(unixArray.length  > 0) {	
			return Math.min(...unixArray)
		} else {
			let aftnoonLateTimeSched = {
				date: date,  
				start: schedule.afternoonInLateA, 
				end: schedule.afternoonInLateB,
			}
			let late = getFromAndTo(userSched, aftnoonLateTimeSched)
			if(late.length > 0) {
				return Math.max(late)
			} else {
				return 
			}
		}
	}

	function getAfterNoonOut(unixArray) {
		if(unixArray.length  > 0) {	
			return Math.min(...unixArray)
		} else {
			let aftnoonUnderTimeSched = {
				date: date,  
				start: schedule.underTimeAnOutA, 
				end: schedule.underTimeAnOutB,
			}
			let undertime = getFromAndTo(userSched, aftnoonUnderTimeSched)
			if(undertime.length > 0) {
				return Math.max(undertime)
			} else {
				return 
			}
		}
		return Math.max(...unixArray) 
	}

	let morningInSched = {
		date: date,  
		start: schedule.morningInA, 
		end: schedule.morningInB
	}
	let morningIn = getMorningIn(getFromAndTo(userSched, morningInSched))

	let morningOutSched = {
		date: date,  
		start: schedule.morningOutA, 
		end: schedule.morningOutB,
	}
	let morningOut = getMorningOut(getFromAndTo(userSched, morningOutSched))

	let aftnoonInSched = {
		date: date,  
		start: schedule.afternoonInA, 
		end: schedule.afternoonInB,
	}
	let afternoonIn = getAfterNoonIn(getFromAndTo(userSched, aftnoonInSched))

	let aftnoonOutSched = {
		date: date,  
		start: schedule.afternoonOutA, 
		end: schedule.afternoonOutB,
	}
	let afternoonOut = getAfterNoonOut(getFromAndTo(userSched, aftnoonOutSched))

	console.log('morning in: ' + convertUnixToDate(morningIn))
	console.log('morning out: ' + convertUnixToDate(morningOut))
	console.log('afternoon in: ' + convertUnixToDate(afternoonIn))
	console.log('afternoon out: ' + convertUnixToDate(afternoonOut))
}

const schedTestA = convertArrayToUnix(testA)
calculcateSchedule(schedTestA)

/*
	- Normal Schedule
	morning-in:    5:00 - 11:59 
	morning-out:   12:00 - 12:30
	afternoon-in:  12:31 - 4:59
	afternoon-out: 5:00+ 
*/

/*
	- late
	morning-in: 8:01+
	afternoon late: 1:01+ 
*/

/*
	- undertime: 
	afternoon (11:30) if only first  
*/

/*
convertUnixToDate(1583736118 *1000)
Sat Aug 07 52156 11:26:40 GMT+0800 (Singapore Standard Time)
new Date('2012.08.10').getTime() / 1000
1344528000
convertUnixToDate(1344528000)
Fri Aug 10 2012 00:00:00 GMT+0800 (Singapore Standard Time)
new Date('2012.08.10 13:39:44').getTime() / 1000
1344577184
convertUnixToDate(1344577184)
Fri Aug 10 2012 13:39:44 GMT+0800 (Singapore Standard Time)
*/