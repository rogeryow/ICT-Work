export const getPath = {
	basePath:  window.location.origin,
	baseFolder: window.location.pathname,
	path: window.location.origin + window.location.pathname.substring( 0, window.location.pathname.lastIndexOf( "/" ) + 1),
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
