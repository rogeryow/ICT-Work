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
                        <div class="paper-info">
                            <div class="row paper-row">
                                <div class="col-sm-2 paper-title">Name</div>
                                <div class="col-sm-4">Roger Pantil</div>
                                <div class="col-sm-2 paper-title">Birth Date</div>
                                <div class="col-sm-4">05/09/1994</div>
                            </div>

                            <div class="row paper-row">
                                <div class="col-sm-2 paper-title">Address</div>
                                <div class="col-sm-4">1343 Roxas Ext.</div>
                                <div class="col-sm-2 paper-title">Phone</div>
                                <div class="col-sm-4">09193952211</div>
                            </div>

                            <div class="row paper-row">
                                <div class="col-sm-2 paper-title">Barangay</div>
                                <div class="col-sm-4">Digos City zone 2</div>
                                <div class="col-sm-2 paper-title">City</div>
                                <div class="col-sm-4">Davao Del Sur</div>
                            </div>
                        </div>
                    </div>

                    <div class="paper-header">Disability</div>
                    <div class="paper-body">
                        <div class="paper-info">
                            <div class="row paper-row">
                                <div class="col-sm-6 paper-title">Types</div>
                                <div class="col-sm-6 paper-title">Causes</div>
                            </div>
                            <div class="row paper-row">
                                <div class="col-sm-6">
                                    <ul class="paper-list">
                                        <li>unde omnis iste natus</li>
                                        <li>inventore veritatis et quasi</li>
                                        <li>ipsum quia dolor sit amet</li>
                                        <li>molestiae consequatur</li>
                                        <li>illum qui dolorem</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="paper-list">
                                        <li>eius modi tempora</li>
                                        <li>voluptas sit</li>
                                        <li>numquam eius</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="paper-header">Assistance</div>

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