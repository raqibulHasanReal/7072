$(document).ready(function(){
    var table = $('#customerTable').DataTable();
    $('#customerTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#deleteCustomer').click( function ()
    {
        table.row('.selected').remove().draw( false ); //for row serial 
        counter--; 
        var addSerialNumber = function () 
        {                
            var i = 1;
            $('table tr').each(function(index) 
            {
                $(this).find('td:nth-child(1)').html(index);                
            });
        };  
        addSerialNumber();
    } );
    //for delete
    $("#customerTable #checkall").click(function () {
            if ($("#customerTable #checkall").is(':checked')) 
            {
                $("#customerTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });    
            } 
            else 
            {
                $("#customerTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });

function addCustomer() 
{  
    var customer = document.getElementById('customerName').value;
    var union = document.getElementById('unionName').value;
    var village = document.getElementById('villageName').value;
    var bank = document.getElementById('bankName').value;
    var account = document.getElementById('bankAccount').value;    
    var mobile = document.getElementById('mobileNumber').value;    
    var thana = document.getElementById('thanaName').value;
    var balance = document.getElementById('balance').value;
    var purchase = document.getElementById('purchase').value;    
    var thanaAddress = 'Thana : &nbsp&nbsp&nbsp'+thana+'&nbsp&nbsp&nbsp'+'Union : &nbsp&nbsp&nbsp'+union+'&nbsp&nbsp&nbsp'+'Village : &nbsp&nbsp&nbsp'+village;   
    var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC : '+account;
        
       // var address = 'Thana: '+thana+'&nbsp&nbsp&nbsp Union: '+union+'&nbsp&nbsp&nbsp Village: '+village;
    var total = balance+'tk'
    
    var editButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
    var deleteButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
    var details = '<p  data-placement="top" style="text-align:center" data-toggle="tooltip" title="details"><button class="btn btn-primary btn-xs"  data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button></p>'
    var customerEntry=
    {
        name:customer,
        balance:balance,
    }
        
    if(customer == '' || union=='Union' || village == '' || mobile == '' || thana == 'Thana')
    {
        alert('Please Check Your All Inputs..!!')
    }
    else
    { 
        counter = counter+1;
        var table = $('#customerTable').DataTable();
        table.row.add( [ counter, customer, union, purchase, balance, details, editButton, deleteButton ] ).draw();  
           

        if(balance >= 0)
        {
            document.getElementById('balanceDetailsRed').innerHTML =''
            document.getElementById('balanceDetails').innerHTML = total;
        }
        else
        {
            document.getElementById('balanceDetails').innerHTML=''
            document.getElementById('balanceDetailsRed').innerHTML = total;
        }
        document.getElementById('customerNameDetails').innerHTML = customer;
        document.getElementById('mobileNumberDetails').innerHTML = mobile;
        document.getElementById('customerAdressThanaDetails').innerHTML = thanaAddress;            
        document.getElementById('bankAccountDetails').innerHTML = bankName;
            
        $('#customerName').val('')
        $('#unionName').val('')
        $('#villageName').val('')
        $('#thanaName').val('')
        $('#bankName').val('')
        $('#bankAccount').val('')            
        $('#mobileNumber').val('')                       
        $('#purchase').val('0')
        $('#balance').val('0')                         
    }
}

var counter = 0;
function addCustomerByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        addCustomer() 
    }
}