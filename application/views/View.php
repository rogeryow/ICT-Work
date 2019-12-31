<!DOCTYPE html>
<html>
    <head> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JFC</title>
<body>
    <div class="container">

        <h2>Disables</h2>

        <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal">new</button>
        <br><br>
        <div class="row">
            <div class="col-sm-3">
                <input type="text" class="form-control" id="searchDisability" name="searchDisability" placeholder="search">
                <table id="tableDisability" class="table-hover" width="100%">
                    <tbody></tbody>
                </table>
            </div>
            <div id="frameDisability" class="col-sm-8 ">
                <div class="paper">
                    <div class="paper-header">Profile</div>
                    <div class="paper-body">
                        something something
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="module" src="<?php echo base_url('assets/js/main.js')?>"></script>
</body>
</html>


<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
            <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>

    </div>
</div>