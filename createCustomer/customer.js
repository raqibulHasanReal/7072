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
        var thana = document.getElementById('thanaName').value;
        var balance = document.getElementById('balance').value;
        var purchase = document.getElementById('purchase').value;
        
        var thanaAddress = 'Thana : &nbsp&nbsp&nbsp'+thana;
        var unionAddress = 'Union : &nbsp&nbsp&nbsp'+union;
        var villageAddress = 'Village : &nbsp&nbsp&nbsp'+village;
        var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC : '+account;
        var bankName2 = 'Bank Name : '+bankOptional+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC :'+accountOptional;
       // var address = 'Thana: '+thana+'&nbsp&nbsp&nbsp Union: '+union+'&nbsp&nbsp&nbsp Village: '+village;
        var total = balance+'tk'
    
        var editButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
        var deleteButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
        var details = '<p  data-placement="top" style="text-align:center" data-toggle="tooltip" title="details"><button class="btn btn-primary btn-xs"  data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button></p>'
        if(customer == '' || union=='Union' || village == '' || mobile == '' || thana == 'Thana')
        {
            alert('Please Check Your All Inputs..!!')
        }
        else
        { 
            counter = counter+1;
            var table = $('#mytable').DataTable();
            table.row.add( [ counter, customer, union, purchase, balance, details, editButton, deleteButton ] ).draw();  
           
            //$('#createProcuct').modal('hide');
            if(bank != '' || account!='')
            {
                document.getElementById('bankAccountDetails').innerHTML = bankName;
            }
            if(bankOptional != '' || accountOptional != '')
            {
                document.getElementById('bankAccountDetails2').innerHTML = bankName2;
            }
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
            document.getElementById('mobileNumberDetails2').innerHTML = mobileOptional;
            document.getElementById('customerAdressThanaDetails').innerHTML = thanaAddress;
            document.getElementById('customerAdressUnionDetails').innerHTML = unionAddress;
            document.getElementById('customerAdressVillageDetails').innerHTML = villageAddress;
            
            $('#customerName').val('')
            $('#unionName').val('')
            $('#villageName').val('')
            $('#bankName').val('')
            $('#bankAccount').val('')
            $('#bankName1').val('')
            $('#bankAccount1').val('')
            $('#mobileNumber').val('')
            $('#mobileNumber1').val('')
            $('#thanaName').val('')
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
        var customer = document.getElementById('customerName').value;
        var union = document.getElementById('unionName').value;
        var village = document.getElementById('villageName').value;
        var bank = document.getElementById('bankName').value;
        var account = document.getElementById('bankAccount').value;
        var bankOptional = document.getElementById('bankName1').value;
        var accountOptional = document.getElementById('bankAccount1').value;
        var mobile = document.getElementById('mobileNumber').value;
        var mobileOptional = document.getElementById('mobileNumber1').value;
        var thana = document.getElementById('thanaName').value;
        var balance = document.getElementById('balance').value;
        var purchase = document.getElementById('purchase').value;
        
        var thanaAddress = 'Thana : &nbsp&nbsp&nbsp'+thana;
        var unionAddress = 'Union : &nbsp&nbsp&nbsp'+union;
        var villageAddress = 'Village : &nbsp&nbsp&nbsp'+village;
        var bankName = 'Bank Name : '+bank +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC : '+account;
        var bankName2 = 'Bank Name : '+bankOptional+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AC :'+accountOptional;
       // var address = 'Thana: '+thana+'&nbsp&nbsp&nbsp Union: '+union+'&nbsp&nbsp&nbsp Village: '+village;
        var total = balance+'tk'
    
        var editButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
        var deleteButton = '<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
        var details = '<p  data-placement="top" style="text-align:center" data-toggle="tooltip" title="details"><button class="btn btn-primary btn-xs"  data-title="details" data-toggle="modal" data-target="#details" ><span class="glyphicon glyphicon-user"></span></button></p>'
        if(customer == '' || union=='Union' || village == '' || mobile == '' || thana == 'Thana')
        {
            alert('Please Check Your All Inputs..!!')
        }
        else
        { 
            counter = counter+1;
            var table = $('#mytable').DataTable();
            table.row.add( [ counter, customer, union, purchase, balance, details, editButton, deleteButton ] ).draw();  
           
            //$('#createProcuct').modal('hide');
            if(bank != '' || account!='')
            {
                document.getElementById('bankAccountDetails').innerHTML = bankName;
            }
            if(bankOptional != '' || accountOptional != '')
            {
                document.getElementById('bankAccountDetails2').innerHTML = bankName2;
            }
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
            document.getElementById('mobileNumberDetails2').innerHTML = mobileOptional;
            document.getElementById('customerAdressThanaDetails').innerHTML = thanaAddress;
            document.getElementById('customerAdressUnionDetails').innerHTML = unionAddress;
            document.getElementById('customerAdressVillageDetails').innerHTML = villageAddress;
            
            $('#customerName').val('')
            $('#unionName').val('')
            $('#villageName').val('')
            $('#bankName').val('')
            $('#bankAccount').val('')
            $('#bankName1').val('')
            $('#bankAccount1').val('')
            $('#mobileNumber').val('')
            $('#mobileNumber1').val('')
            $('#thanaName').val('')
            $('#purchase').val('0')
            $('#balance').val('0')
        }
    }
}

function deleteRow()
{
    var table = $('#mytable').DataTable();
    var rows = table
    .row()
    .remove()
    .draw();

}
function details()
{
    alert('Customer Details')
} 


    

    


    

    