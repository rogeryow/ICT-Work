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
	let unixTime = getUnixTime()
	let convertedUnixTime = convertUnixtimeToDate(unixTime)
	addToList(`${unixTime} - ${convertedUnixTime}`, elListUnix)
}

function getUnixTime() {
	return Math.round((new Date()).getTime() / 1000)
}

function convertUnixtimeToDate(unixTime) {
	return new Date(unixTime * 1000)
}

function addToList(string, ul) {
	let listItem = document.createElement('li')
	listItem.innerHTML = string
	ul.appendChild(listItem)
	ul.scrollIntoView(false)
	ul.scrollTop = ul.scrollHeight
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