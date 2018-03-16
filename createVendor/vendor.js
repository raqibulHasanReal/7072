
$(document).ready(function(){
    $('#vendorTable').DataTable();
    var table = $('#vendorTable').DataTable();
 
    $('#vendorTable tbody').on( 'click', 'tr', function () 
    {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
 
    $('#deleteProduct').click( function () 
    {
        table.row('.selected').remove().draw( false );
        counter--;
    });

    $("#vendorTable #checkall").click(function () 
    {
        if ($("#vendorTable #checkall").is(':checked')) {
            $("#vendorTable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
           });
    
        } else {
            $("#vendorTable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
        
        $("[data-toggle=tooltip]").tooltip();
});

var counter = 0;

function addProduct() 
{    
    
    var vendorName = document.getElementById('vendorName').value;
    var address = document.getElementById('vendorAddress').value;
    var bank= document.getElementById('vendorBankName1').value;
    var account = document.getElementById('vendorBankAccount1').value;   
    var balance = document.getElementById('vendorBalance').value;
    var mobile = document.getElementById('vendorMobileNumber').value;
    var accountButton = '<p  data-placement="top" style="text-align:center" data-toggle="tooltip" title="details"><button class="btn btn-primary btn-xs"  data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button></p>';
    var editButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
    var deleteButton = '<p  data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
    
    var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC : '+account;

    var vendorEntry=
    {
        

    }
    if( vendorName == '' || address=='' || bank== '')
    {
        alert('Please Check Your All Inputs..!!')
    }
    else
    {
        counter = counter+1;
        var table = $('#vendorTable').DataTable();
        table.row.add( [ counter,vendorName, address,balance,accountButton,editButton, deleteButton] ).draw(); 

            
            if(balance >= 0)
            {
                document.getElementById('vendoeBalanceDetailsRed').innerHTML =''
                document.getElementById('vendorBalanceDetails').innerHTML = balance;
            }
            else
            {
                document.getElementById('vendorBalanceDetails').innerHTML=''
                document.getElementById('vendoeBalanceDetailsRed').innerHTML = balance;
            }
            document.getElementById('vendorNameDetails').innerHTML = vendorName;
            document.getElementById('vendorMobileNumberDetails').innerHTML = mobile;
            document.getElementById('vendorAdressDetails').innerHTML = address;
            document.getElementById('vendorBankAccountDetails').innerHTML = bankName;


        $('#vendorName').val('')
        $('#vendorAddress').val('')
        $('#vendorBankName1').val('')
        $('#vendorBankAccount1').val('')
        $('#vendorBalance').val('0')
        $('#vendorMobileNumber').val('')

        //$('#createProcuct').modal('hide');

        var addSerialNumber = function () 
       {
           $('table tr').each(function(index) {
               $(this).find('td:nth-child(1)').html(index);      
           });
       };  
       addSerialNumber();
       
    }
}

function addProductByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {   
        addProduct()   
    }
}