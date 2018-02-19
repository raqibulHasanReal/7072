$(document).ready(function(){
    $("#productTable #checkall").click(function () {
            if ($("#productTable #checkall").is(':checked')) {
                $("#productTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#productTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });

function addProduct() 
{
    counter = counter+1;
    var product = document.getElementById('productName').value;
    var category = document.getElementById('categoryName').value;
    var unit = document.getElementById('unitName').value;
    var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
    var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
  
    if(product == '' || category=='Category' || unit== 'Unit')
    {
        alert('Please Check Your All Inputs..!!')
    }
    else
    {
        var table = $('#productTable').DataTable();
        table.row.add( [ counter, product, category, unit,editButton, deleteButton ] ).draw();  
        $('#productName').val('')
        $('#categoryName').val('')
        $('#unitName').val('')
        //$('#createProcuct').modal('hide');
    }
}
    

var counter = 0;
function addProductByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        counter = counter+1;
        var product = document.getElementById('productName').value;
        var category = document.getElementById('categoryName').value;
        var unit = document.getElementById('unitName').value; 
        var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
        var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
  
        if(product == '' || category=='Category' || unit== 'Unit')
        {
            alert('Please Check Your All Inputs..!!')
        }
        else
        {
            var table = $('#productTable').DataTable();
            table.row.add( [ counter, product, category, unit, editButton, deleteButton ] ).draw();  
            $('#productName').val('')
            $('#categoryName').val('')
            $('#unitName').val('')

            //$('#createProcuct').modal('hide');
        }   
    }
}

function deleteRow()
{
    var table = $('#productTable').DataTable();
    var rows = table
    .rows()
    .remove()
    .draw();

}
    

    


    

    