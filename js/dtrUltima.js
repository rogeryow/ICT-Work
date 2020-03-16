const ONE_SEC_IN_MILISEC = 1000
const ONE_MIN_IN_SEC =  60

function getDateToday() {
	return new Date().toJSON().slice(0,10).replace(/-/g,'.');
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

console.log(
	convertUnixToDate(
		convertDateToUnix() + convertMinToUnix()
	)
)
