
$(document).ready(function(){
    $("#cartTable #checkall").click(function () {
            if ($("#cartTable #checkall").is(':checked')) {
                $("#cartTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#cartTable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });
    var counter = 0;
function addToCart()
{
    customer = document.getElementById('customerNamecart').value;
    item = document.getElementById('productCart').value;
    mobile = document.getElementById('mobileCart').value;
    quantity = document.getElementById('quantityCart').value;
    price = document.getElementById('priceCart').value;

    if( customElements == '' || item == "ProductItem" || quantity == '' || price=='')
    {
        alert('entry error..!')
    }
    else
    {
        counter = counter+1;

        total = price*quantity;
    
        var table = $('#cartTable').DataTable();
        table.row.add( [counter,item,quantity,price,total] ).draw();
       
        
        document.getElementById('totalAmount').innerHTML = getColumnTotal(4);

    }
}

function getColumnTotal(columnIndex)
{
    var totalAmount=$('#cartTable').DataTable().column(4).data().reduce( function (a,b) {
        return a + b;
    } );
    
    return totalAmount;
}