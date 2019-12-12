<!DOCTYPE html>
<html>
    <head> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JFC</title>
<body>
    <div class="container">

        <h2>JFC</h2>

        <div >
            <form class="form-inline">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="gender">Contact</label>
                    <input type="text" class="form-control" id="gender">
                </div>
                <button id="submit" type="submit" class="btn btn-default">Submit</button>
            </form>  
        </div>

        <br>

        <div class="row">
            <div class="col-sm-12">
                <table id="table" class="table table-striped table-bordered table-hover" width="100%">
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>

    <script type="module" src="<?php echo base_url('assets/js/main.js')?>"></script>
</body>
</html>
