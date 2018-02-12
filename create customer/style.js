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

function addCustomer() 
{
    
    var customer = document.getElementById('customerName').value;
    var union = document.getElementById('unionName').value;
    var village = document.getElementById('villageName').value;
    var bank = document.getElementById('bankName').value;
    var account = document.getElementById('bankAccount').value;
    var bankOptional = document.getElementById('bankName1').value;
    var accountOptional = document.getElementById('bankAccount1').value;
    var mobile = document.getElementById('mobileNumber').value;
    var mobileOptional = document.getElementById('mobileNumber1').value;
    var balance = document.getElementById('balance').value;
    var purchase = document.getElementById('purchase').value;
    
    var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp AC : '+account;
    var bankName2 = 'Bank Name : '+bankOptional+'&nbsp&nbsp&nbsp AC :'+accountOptional;
    var mobileNumber = 'Number 1 : '+mobile+'<br>Number 2 : '+mobileOptional;
    var total = 'Total : '+ balance;

    var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
    var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
    var details = '<button class="btn btn-primary btn-xs" id="detailsButton" data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button>'
    if(customer == '' || union=='Union' || village == '' || mobile == '')
    {
        alert('Please Check Your All Inputs..!!')
    }
    else
    {
        
        counter = counter+1;
        var table = $('#mytable').DataTable();
        table.row.add( [ counter, customer, union, village, details,editButton, deleteButton ] ).draw();  
        $('#customerName').val('')
        $('#unionName').val('')
        $('#villageName').val('')
        $('#bankName').val('')
        $('#bankAccount').val('')
        $('#bankName1').val('')
        $('#bankAccount1').val('')
        $('#mobileNumber').val('')
        $('#mobileNumber1').val('')
        $('#balance').val('')
        

        //$('#createProcuct').modal('hide');
        document.getElementById('customerNameDetails').innerHTML = customer;
        document.getElementById('mobileNumberDetails').innerHTML = mobileNumber;
        document.getElementById('bankAccountDetails').innerHTML = bankName;
        document.getElementById('bankAccountDetails2').innerHTML = bankName2;
        document.getElementById('balanceDetails').innerHTML = total;
    }
}
    

var counter = 0;
function addCustomerByKey(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') 
    {
        
        var customer = document.getElementById('customerName').value;
        var union = document.getElementById('unionName').value;
        var village = document.getElementById('villageName').value;
        var bank = document.getElementById('bankName').value;
        var account = document.getElementById('bankAccount').value;
        var bankOptional = document.getElementById('bankName1').value;
        var accountOptional = document.getElementById('bankAccount1').value;
        var mobile = document.getElementById('mobileNumber').value;
        var mobileOptional = document.getElementById('mobileNumber1').value;
        var balance = document.getElementById('balance').value;
        
        var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp AC : '+account;
        var bankName2 = 'Bank Name : '+bankOptional+'&nbsp&nbsp&nbsp AC :'+accountOptional;
        var mobileNumber = 'Number 1 : '+mobile+'<br>Number 2 : '+mobileOptional;
        var total = 'Total : '+ balance;
    
        var editButton = '<button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>';
        var deleteButton = '<button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button>';
        var details = '<button class="btn btn-primary btn-xs" id="detailsButton" data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button>'
        if(customer == '' || union=='Union' || village == '' || mobile == '')
        {
            alert('Please Check Your All Inputs..!!')
        }
        else
        {
            
            counter = counter+1;
            var table = $('#mytable').DataTable();
            table.row.add( [ counter, customer, union, village, details,editButton, deleteButton ] ).draw();  
            $('#customerName').val('')
            $('#unionName').val('')
            $('#villageName').val('')
            $('#bankName').val('')
            $('#bankAccount').val('')
            $('#bankName1').val('')
            $('#bankAccount1').val('')
            $('#mobileNumber').val('')
            $('#mobileNumber1').val('')
            $('#balance').val('')
            
    
            //$('#createProcuct').modal('hide');
            document.getElementById('customerNameDetails').innerHTML = customer;
            document.getElementById('mobileNumberDetails').innerHTML = mobileNumber;
            document.getElementById('bankAccountDetails').innerHTML = bankName;
            document.getElementById('bankAccountDetails2').innerHTML = bankName2;
            document.getElementById('balanceDetails').innerHTML = total;
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
function details()
{
    alert('Customer Details')
} 


    

    


    

    