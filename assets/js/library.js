export const getPath = {
	basePath:  window.location.origin,
	baseFolder: window.location.pathname,
	path: window.location.origin + window.location.pathname.substring( 0, window.location.pathname.lastIndexOf( "/" ) + 1),
}

export function loadScript(url){
   url.forEach((link) => {
	   const body = document.querySelector('body');
	   const scriptTag = document.createElement('script');
	   scriptTag.type = 'text/javascript';
	   scriptTag.src = link;
	   body.prepend(scriptTag);
   })
}