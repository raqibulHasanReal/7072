$(document).ready(function () {
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
});

var counter = 0;

function calculate() {
    payment = document.getElementById('payamount').value;
    due = (getColumnTotal(4) - payment);
    document.getElementById('totalDue').innerHTML = due;
}

function addToCart() {
    customer = document.getElementById('customerNamecart').value;
    item = document.getElementById('productCart').value;
    mobile = document.getElementById('mobileCart').value;
    quantity = document.getElementById('quantityCart').value;
    price = document.getElementById('priceCart').value;
    calendar = document.getElementById('calendar').value;
    

    if (calendar == '' || customer == '' || item == "ProductItem" || quantity == '' || price == '') {
        alert('entry error..!')
    } else {
        counter = counter + 1;

        total = price * quantity;

        var table = $('#cartTable').DataTable();
        table.row.add([counter, item, quantity, price, total]).draw();


        document.getElementById('totalAmount').innerHTML = getColumnTotal(4);
        document.getElementById('nameCart').innerHTML = customer;
        document.getElementById('balanceCart').innerHTML = calendar;
        $('#quantityCart').val('')
        $('#priceCart').val('')
        $('#payamount').val('')
        

    }
}

function getColumnTotal(columnIndex) {
    var totalAmount = $('#cartTable').DataTable().column(4).data().reduce(function (a, b) {
        return a + b;
    });

    return totalAmount;
}