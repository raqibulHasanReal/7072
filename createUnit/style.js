$(document).ready(function(){
    $("#mytable #checkall").click(function () {
            if ($("#mytable #checkall").is(':checked')) {
                $("#mytable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#mytable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });

function addUnit() 
{
    counter = counter+1;
    var unit = document.getElementById('unitName').value;
    var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
    var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
  
    if(unit == '')
    {
        alert('Pls Type Unit Name..')
    }
    else
    {
        var table = $('#mytable').DataTable();
        table.row.add( [ counter, unit, editButton, deleteButton ] ).draw();  
        $('#unitName').val('')
        //$('#createProcuct').modal('hide');
    }
}
    

var counter = 0;
function addUnitByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        counter = counter+1;
        var unit = document.getElementById('unitName').value;
        var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
        var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
  
        if(unit == '')
        {
            alert('Pls Type Unit Name..')
        }
        else
        {
            var table = $('#mytable').DataTable();
            table.row.add( [ counter, unit, editButton, deleteButton ] ).draw();  
            $('#unitName').val('')
            //$('#createProcuct').modal('hide');
        }   
    }
}
function deleteRow()
{
    var table = $('#mytable').DataTable();
    var rows = table
    .rows()
    .remove()
    .draw();  
}    

    