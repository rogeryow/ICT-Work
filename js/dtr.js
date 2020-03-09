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
	morning-in: 5:00 - 8:00, late: 8:01 - 10:00 
	morning-out:

*/