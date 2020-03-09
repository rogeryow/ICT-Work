<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="wrapper">
		<button class="btn" id="btnGetUnixTime">Get Unix Time Now</button>
		<input class="inpDtr" type="input" name="" placeholder="Enter DTR Schedule">
		<ul id="elList"></ul>
	</div>

	<script src="js/dtr.js" type="text/javascript"></script>
</body>
</html>

<!-- convertUnixtimeToDate(1583736118 *1000)
Sat Aug 07 52156 11:26:40 GMT+0800 (Singapore Standard Time)
new Date('2012.08.10').getTime() / 1000
1344528000
convertUnixtimeToDate(1344528000)
Fri Aug 10 2012 00:00:00 GMT+0800 (Singapore Standard Time)
new Date('2012.08.10 13:39:44').getTime() / 1000
1344577184
convertUnixtimeToDate(1344577184)
Fri Aug 10 2012 13:39:44 GMT+0800 (Singapore Standard Time) -->