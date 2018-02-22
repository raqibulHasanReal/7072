$(document).ready(function(){

//for delete
    var table = $('#unitTable').DataTable();
 
    $('#unitTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#deleteUnit').click( function () {
        table.row('.selected').remove().draw( false );       
            counter-- ;     
    } );




    $("#unitTable #checkall").click(function () {
            if ($("#unitTable #checkall").is(':checked')) {
                $("#unitTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#unitTable input[type=checkbox]").each(function () {
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
    var unitEntry=
    {
        unitName:unit

    }

    if(unit == '')
    {
        alert('Pls Type Unit Name..')
    }
    else
    {
        
        var table = $('#unitTable').DataTable();
        table.row.add( [ counter, unit, editButton, deleteButton ] ).draw();  
        $('#unitName').val('')
        var addSerialNumber = function () 
        {
            $('table tr').each(function(index) {
                $(this).find('td:nth-child(1)').html(index);
        
            });
        };  
        addSerialNumber();
    }
}

var counter = 0;
function addUnitByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
       addUnit();   
    }
}





    