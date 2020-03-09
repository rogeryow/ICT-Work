const elList = document.getElementById('elList')
const btnGetUnixTime = document.getElementById('btnGetUnixTime')

btnGetUnixTime.addEventListener('click', function() {
	let unixTime = getUnixTime()
	let convertedUnixTime = convertUnixtimeToDate(unixTime)

	addToList(`${unixTime} - ${convertedUnixTime}`)
})

function getUnixTime() {
	return Math.round((new Date()).getTime() / 1000)
}

function convertUnixtimeToDate(unixTime) {
	return new Date(unixTime * 1000)
}


function addToList(string) {
	let listItem = document.createElement('li')
	listItem.innerHTML = string
	elList.appendChild(listItem)
}