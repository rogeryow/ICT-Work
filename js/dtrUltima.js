const ONE_SEC_IN_MILISEC = 1000

function getDateToday() {
	return new Date().toJSON().slice(0,10).replace(/-/g,'.');
}

function getUnixToday() {
	return Math.round((new Date()).getTime() / ONE_SEC_IN_MILISEC)
}

function convertDateToUnix(date) {
	return Math.round(date.getTime() / ONE_SEC_IN_MILISEC)
}

function convertUnixToDate(unix) {
	return new Date(unix * ONE_SEC_IN_MILISEC)
}

function convertMinToUnix(minutes) {
	const ONE_MIN_IN_SEC =  60
	return minutes * ONE_MIN_IN_SEC
}

console.log(convertUnixToDate(getUnixToday()))
console.log(convertUnixToDate(getUnixToday() + convertMinToUnix(-60)))
