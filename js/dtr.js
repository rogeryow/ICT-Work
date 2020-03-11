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

console.log(getDateToday())
console.log(convertDateToUnix(getDateToday()))

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