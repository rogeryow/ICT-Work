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

        <div class="box-main">
            <div class="inline-block box-space">
                <span>Name or ID</span>
                <input id="search" type="text" name="search" class="form-control">
            </div>
            <div class="inline-block box-space">
                <span>Start Date</span>
                <input id="date-start" type="date" name="date-start" class="form-control">
            </div>
            <div class="inline-block box-space">
                <span>End Date</span>
                <input id="date-end" type="date" name="date-end" class="form-control">
            </div>
        </div>
        
        <div class="row justify-content-md-center"> 
            <div class="col-sm-12">
                <table id="demo" class="table table-bordered" >
                    <thead></thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
    <script type="module" src="<?php echo base_url('assets/js/main.js')?>"></script>
</body>
</html>
