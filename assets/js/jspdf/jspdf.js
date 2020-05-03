const docs = {}	
const arrNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']
const iframePdfId = 'iframePDF'
const strHeadIct = 'INFORMATION AND COMMUNICATION TECHNOLOGY DIVISION'
let logs = ''

function getPdfSrc(key) { 
	if(docs.hasOwnProperty(key)) {
		src = docs[key]()
	}

	return src
}

document.addEventListener('DOMContentLoaded', function() {
	pdfToIframe(getPdfSrc(), iframePdfId)
})

function getBase64Image(img) {
	let canvas = document.createElement('canvas')
	canvas.width = img.width
	canvas.height = img.height
	let ctx = canvas.getContext('2d')
	ctx.drawImage(img, 0, 0)
	let dataURL = canvas.toDataURL('image/png')
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
}

class Page {
	size = {
		a4: [612, 950],
		legal: [612, 950],
		short: [612, 950],
	}
	leftMargin = 45
	constructor(format = 'a4', orientation = 'p') {			
		if (this.size.hasOwnProperty(format)) {
			switch(orientation) {
				case 'p':
					this.format = this.size[format]
				break;
				case 'l':
					let width = this.size[format][1]
					let height = this.size[format][0]
	 				this.landscape = [width, height]
	 				this.format = this.landscape
				break;
				default:
			}
		}else {
			// default
			this.format = this.size['a4']
		}
	}
	getWidth() {
		return this.format[0]
	}
	getHeight() {
		return this.format[1]
	}
	alignLeft() {
		return this.leftMargin
	}
	alignRight() {
		return this.format[0] - this.leftMargin
	}
	alignCenter() {
		return this.format[0]/2
	}
}

function docAddGovHeader(doc, option) {	
	let dispTitle = option.title || ''
	let fontSizeTitle = option.fontSizeTitle || 14 
	let pageWidth = getPageWidth()
	let pageCenter = pageWidth/2
	let addMoreUnderLine = option.addMoreUnderLine || 0
	let dispDate = typeof option.date !== 'undefined' ? option.date : true
	let yMargin = option.yMargin || 0
	console.log(option)
	console.log(yMargin)
	offsetY = 50
	strSpacing = 15
	strHeadMargin = 30
	leftMargin = 45
	// original page header
	// doc.addImage(img.govLogo, 'PNG', pageCenter-261, 42, 80, 80)
	doc.addImage(img.govLogo, 'PNG', pageCenter-261, 30 + yMargin, 80, 80)
	doc.setFontSize(11)
	doc.text('Republic of the Philippines', pageCenter, offsetY + yMargin, 'center')
	doc.text('Province of Davao del Sur', pageCenter, offsetY + 14 + yMargin, 'center')
	doc.setFontType('bold')
	doc.text('CITY OF DIGOS', pageCenter, offsetY + 31 + yMargin, 'center')
	doc.setFontSize(14)
	doc.text('OFFICE OF THE CITY MAYOR', pageCenter, offsetY + 48 + yMargin, 'center')
	doc.setFontSize(11)
	doc.text('CITY SPECIAL PROGRAM AND MANAGEMENT OFFICE', pageCenter, offsetY + 62 + yMargin, 'center')
	
	doc.setFontSize(fontSizeTitle)
	doc.text(dispTitle, pageCenter, offsetY+78, 'center')
	doc.text(drawUnderline(doc.getTextWidth(dispTitle) -5 + addMoreUnderLine), pageCenter, offsetY + 78 + yMargin, 'center')
	setSizeAndFont(12, 'normal')

	if(dispDate) {
		let strDate = 'Date: ______________'
		let strDateSize = doc.getTextWidth(strDate)
		doc.text(strDate, pageWidth-(strDateSize+leftMargin), offsetY+95 + yMargin)
	}

}

function drawUnderline(width) {
	let line = '_'
	let textWidth = Math.round(width)
	let lineSize = Math.round(doc.getTextWidth(line))
	let totalLines = Math.round(textWidth / lineSize) 
	let underline = ''
	
	for (i = 0; i <= totalLines; i++) {
		underline += line
	}	

	doc.setFontStyle('normal')
	return underline
}

function setSizeAndFont(size, type){
	fontSize = size || 12
	fontType = type || 'normal'
	doc.setFontSize(fontSize)
	doc.setFontType(fontType)
}

function addPageNumber(x, y) {
	let height = doc.internal.pageSize.getHeight()
	let pageCount = doc.internal.getNumberOfPages()
	let pageX = x || 40
	let pageY = y || height - 25
	doc.setFontType('normal')
	doc.setTextColor('gray')
	doc.setFontSize(10)
	for(i = 0; i < pageCount; i++) { 
		doc.setPage(i); 
		doc.text(pageX, pageY, 'Page ' + doc.internal.getCurrentPageInfo().pageNumber + " of " + pageCount)
	}
}


function getPageWidth() {
	let pageWitdh = doc.internal.pageSize.getWidth()
	return pageWitdh 
}

function getPageHeight() {
	let PageHeight = doc.internal.pageSize.getHeight() 
	return PageHeight
}

function getPageDim() {
	let pageDim = []
	pageDim.push(getPageWidth())
	pageDim.push(getPageHeight())
	return pageDim
}

function getPageCenter() {
	let pageCenter = getPageWidth()/2
	return pageCenter
}

function pdfDownload(doc) {
	doc.save('autoprint.pdf')
}

function pdfToWindow(doc) {
	// doc.autoPrint({letiant: 'non-conform'});
	doc.output('dataurlnewwindow')
}

function pdfToIframe(doc, iframeID) {
	let blob = doc.output('blob')
	let blobURL = URL.createObjectURL(blob)
	iframePDF = document.getElementById(iframeID)
	iframePDF.src = blobURL
}

// const logs = [
// 	[
// 		'Roger Pantil',
// 		'2020/01/01',
// 		'2020/02/01',
// 		[
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2020'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 		]
// 	],
// 	[
// 		'Naruto Uzumaki',
// 		'2020/02/01',
// 		'2020/02/29',
// 		[
// 			[['1/1/2020 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], ['7:30 PM'], ['1:30 AM']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 			[['1/1/2021 We'], ['7:53 AM'], ['12:08 PM'], ['12:57 PM'], ['5:08 PM'], [''], ['']],
// 		]
// 	],
// ]

function setLogs(value) {
	logs = value
}

docs.dtr = function() {
	doc = new jsPDF('portrait', 'pt', 'a4')
	option = {
		title: strHeadIct,
		date: false,
		fontSizeTitle: 12,
		addMoreUnderLine: 20,
	}
	
	var requiredPages = logs.length

	for(var i = 0; i < requiredPages; i++){
		docAddGovHeader(doc, option)
		
		let leftMargin = 40

		doc.setFontType('bold')
		doc.text('Daily Time Record', getPageCenter(), 170, 'center')
		
		setSizeAndFont(11, 'bold')
		doc.text('Name: ', leftMargin, 210)
		setSizeAndFont(11, 'normal')
		doc.text(logs[i][0], leftMargin + 40, 210)

		setSizeAndFont(11, 'bold')
		doc.text('Start Date: ', leftMargin, 225)
		setSizeAndFont(11, 'normal')
		doc.text(logs[i][1], leftMargin + 60, 225)

		setSizeAndFont(11, 'bold')
		doc.text('End Date: ', leftMargin, 240)
		setSizeAndFont(11, 'normal')
		doc.text(logs[i][2], leftMargin + 60, 240)

		let imgQrCode = img.qrCodeSamp
		doc.addImage(imgQrCode, 'PNG', getPageWidth()-90, 200, 45, 45)
		
		doc.autoTable({
			startY: 270,
			headStyles:{
				fillColor: '#ffffff',
				cellPadding: 5,
				halign: 'center',
	        	valign: 'middle',
			},
			styles: {
				overflow: 'linebreak',
				halign: 'justify',
				fontSize: 9,
				cellPadding: 3,
				valign: 'middle',
				halign: 'center',
				textColor: '#000',
			},
			theme: 'striped',	
			head: [
				// [[''], ['IN'], ['OUT'], ['IN'], ['OUT'], ['IN'], ['OUT']]
				[['DATE'], ['IN'], ['OUT'], ['IN'], ['OUT']]
			],
			body: logs[i][3],

		})

		if(i < (requiredPages - 1)) {
			doc.addPage()
		}
		
	}

	return doc
}