$(document).ready(function(){
    var table = $('#categoryTable').DataTable();
 
    $('#categoryTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#deleteCategory').click( function () {
        table.row('.selected').remove().draw( false );
        counter--;
        
    } );

    $("#categoryTable #checkall").click(function () 
    {
            if ($("#categoryTable #checkall").is(':checked')) {
                $("#categoryTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#categoryTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });
       
function addCategory()
{     

    var category = document.getElementById('categoryName').value;
    var editButton ='<button style="text-align:center" class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
    var deleteButton ='<button style="text-align:center" class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
    var catgoryEntry={
        categoryName:category
    }
    if(category == '')
    {
        alert("Pls Type Category Name..")
    }
    else
    {
        counter = counter+1;
        var table = $('#categoryTable').DataTable();
        table.row.add( [ counter, category, editButton, deleteButton ] ).draw();  
        $('#categoryName').val('')
    }
}    
var counter = 0; 
function addCategoryByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        addCategory();
    }
}
