const getPath = {
	basePath:  window.location.origin,
	baseFolder: window.location.pathname,
	path: window.location.origin + window.location.pathname
	.substring( 0, window.location.pathname.lastIndexOf( "/" ) + 1),
}

function delay(callback, ms) {
	let timer
	return function(...args) {
		clearTimeout(timer)
		timer = setTimeout(callback.bind(this, ...args), ms)
	}
}