<!DOCTYPE html>
<html>
    <head> 
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Daily Time Record</title>
        <link href="<?php echo base_url('assets/bootstrap/css/bootstrap.min.css')?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/css/global/style.css')?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/datatables/css/dataTables.bootstrap.css')?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/bootstrap-datepicker/css/bootstrap-datepicker3.min.css')?>" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    </head> 
<body>
    <div class="container">

        <input id="file-upload" type="file">

        <br>
        <button class="btn btn-danger">Remove</button> <button id="btn-upload-db" class="btn btn-success">Upload to DB</button>
        <br><br>
        <table id="table-dtr" class="display" width="100%"></table>     
    </div>

    <script src="<?php echo base_url('assets/jquery/jquery-2.1.4.min.js')?>"></script>
    <script src="<?php echo base_url('assets/bootstrap/js/bootstrap.min.js')?>"></script>
    <script src="<?php echo base_url('assets/datatables/js/jquery.dataTables.min.js')?>"></script>
    <script src="<?php echo base_url('assets/datatables/js/dataTables.bootstrap.js')?>"></script>
    <script src="<?php echo base_url('assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js')?>"></script>
    <script src="<?php echo base_url('assets/js/global/util.js')?>"></script>
    <script src="<?php echo base_url('assets/js/upload/upload.js')?>"></script>
    <script src="<?php echo base_url('assets/js/upload/main.js')?>"></script>

    <!-- cdn start -->
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <!-- cdn end -->

</body>
</html>