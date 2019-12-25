export const getPath = {
	basePath:  window.location.origin,
	baseFolder: window.location.pathname,
	path: window.location.origin + window.location.pathname
	.substring( 0, window.location.pathname.lastIndexOf( "/" ) + 1),
}

export function loadCSS(url){
	const urlSet = new Set(url)
	urlSet.forEach((link) => {
		const head = document.querySelector('head')
		const styleTag = document.createElement('link')
		styleTag.rel = 'stylesheet'
		styleTag.type = 'text/css'
		styleTag.href = link
		head.appendChild(styleTag)
   })
}
	
export async function loadScript(files){
	for(const file of files) {
		await createScriptTag(file)
	}
}

function createScriptTag(file){
	const body = document.querySelector('body')
	const scriptTag = document.createElement('script')
	scriptTag.type = 'text/javascript'
	scriptTag.async = false
	scriptTag.src = file
	body.prepend(scriptTag)
}

export function getDataByField(data) {
	const url = `${data.url}/${data.table}/${data.field}/${data.value}`
	return XMLRequest(url)
}

function XMLRequest(test = '') {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest()
		const url = test

		xhr.onload = function() {
			if(this.readyState == 4 && this.status == 200){
				const response = JSON.parse(this.responseText)
				resolve(response)
			}
		}

		xhr.onerror = function() {
			reject(new Error('Network Error'))
		}

		xhr.open('GET', url, true)
		xhr.send()
	})	
}

export function getTableRow(ev) {
	const rowData = []
	Array.from(ev.target.parentNode.getElementsByTagName('td')).map((element) => {
		rowData.push(element.textContent)
	})
	return rowData
}