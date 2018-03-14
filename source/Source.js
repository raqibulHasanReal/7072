$(document).ready(function(){
   /* var table = $('#incomeTable').DataTable();
 
    $('#incomeTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    //for delete income
    $('#deleteIncome').click( function () {
        table.row('.selected').remove().draw( false );
        counter--;
            
    } );
    //for delete end

    $("#incomeTable #checkall").click(function () 
    {
            if ($("#incomeTable #checkall").is(':checked')) 
            {
                $("#incomeTable input[type=checkbox]").each(function () 
                {
                    $(this).prop("checked", true);
                });
    
            } else
            {
                $("#incomeTable input[type=checkbox]").each(function () 
                {
                    $(this).prop("checked", false);
                });
            }
    }); */
        

    var table2 = $('#expenceTable').DataTable();
 
    $('#expenceTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table2.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
    
    //for delete expencee
    $('#deleteExpence').click( function () {
        table2.row('.selected').remove().draw( false );
        counter--;
            
    } );
    //for delete end

    $("#expenceTable #checkall").click(function () 
    {
            if ($("#expenceTable #checkall").is(':checked')) {
                $("#expenceTable input[type=checkbox]").each(function () 
                {
                    $(this).prop("checked", true);
                });
    
            } else 
            {
                $("#expenceTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
    });
        
    });
       
function addIncomeSource()
{     

    var source = document.getElementById('sourceName').value;
    var calender = document.getElementById('calender').value;
    var editButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"> <button style="text-align:center" class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
    var deleteButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button style="text-align:center" class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
    var incomeSource={

    }
    if(source == '' || calender =='')
    {
        alert("Pls check all inputs..")
    }
    else
    {
        counter = counter+1;
        var table = $('#incomeTable').DataTable();
        table.row.add( [ counter, source, calender,editButton, deleteButton ] ).draw();  
       //serial sort
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
function addIncomeSourceByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        addIncomeSource();
    }
}

function addExpenceSource()
{
    var expence = document.getElementById('expenceName').value;
    var expenceCalender = document.getElementById('calenderExpence').value;
    var editButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"> <button style="text-align:center" class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
    var deleteButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button style="text-align:center" class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
    if (expence == '' || expenceCalender == '')
    {
        alert("Pls check all inputs..")
    }
    else
    {
        counter = counter +1;
        var table = $('#expenceTable').DataTable();
        table.row.add( [ counter, expence, expenceCalender,editButton, deleteButton ] ).draw();  
       //serial sort
       var addSerialNumber = function () 
       {
           $('table tr').each(function(index) {
               $(this).find('td:nth-child(1)').html(index);
       
           });
       };  
       addSerialNumber();
    }        
}
function addExpenceSourceByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        addExpenceSource();
    }
}

//--------DataTable-------//
$(document).ready(function() {
    var table = $('#incomeTable').DataTable();
    //--------DataTable---End-------//

    $('#incomeTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});



function showIncome()
{
    document.getElementById('income').style.display = "block";
    document.getElementById('expence').style.display = "none";    
}
function showexpence()
{
    $(document).ready(function () {
        $('#expenceTable').DataTable();
    });
    document.getElementById('expence').style.display = "block";  
    document.getElementById('income').style.display = "none";   
}
