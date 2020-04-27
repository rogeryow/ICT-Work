<!DOCTYPE html>
<html>
    <head> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JFC</title>
<body>
    <div class="container">
    	<div>
            <a class="btn btn-success btn-sm btn-space" href="<?php echo base_url('control/upload') ?>">Upload</a>
            <a class="btn btn-success btn-sm btn-space" href="<?php echo base_url('control') ?>">LOGS</a>
        </div>
        <hr>
        <input id="file-upload" type="file">
        <br>
        <button class="btn btn-danger">Remove</button> <button id="btn-upload-db" class="btn btn-success">Upload to DB</button>
        <br><br>
        <table id="table-dtr" class="display" width="100%"></table> 

    </div>
    <script type="module" src="<?php echo base_url('assets/js/upload/upload.js')?>"></script>
</body>
</html>
