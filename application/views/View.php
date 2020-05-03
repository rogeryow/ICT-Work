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
            <div class="inline-block box-space">
                <span>Department</span>
                <select class="form-control" id="department">
                    <option value="">ALL</option>
                </select>
            </div>
            <div class="inline-block box-space">
                <button id="btn-print" class="btn btn-success" data-toggle="modal" data-target="#myModal">Print</button>
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

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Print Preview</h4>
          </div>
          <div class="modal-body">
            <div class="content">
                <iframe id="iframePDF" src=""></iframe>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>



    <script type="module" src="<?php echo base_url('assets/js/main.js')?>"></script>
    <!-- cdn start -->
    <script src="https://cdn.jsdelivr.net/g/filesaver.js"></script>
    <script src="https://unpkg.com/jspdf@1.5.3/dist/jspdf.min.js"></script>
    <script src="https://unpkg.com/jspdf-autotable@3.2.11/dist/jspdf.plugin.autotable.js"></script>
    <!-- cdn end -->


</body>
</html>
