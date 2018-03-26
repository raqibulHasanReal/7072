$(document).ready(function () {
    document.getElementById("expenceSave").disabled = true;

    $("#incomeAmount #checkall").click(function () {
        if ($("#incomeAmount #checkall").is(':checked')) {
            $("#incomeAmount input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#incomeAmount input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });


});
var counter = 0;

function addIncome()
{
     income = document.getElementById('incomeAmount').value;
     
     incomeSource = document.getElementById('incomeSources').value;
     date = document.getElementById('calender').value;
     editButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"> <button style="text-align:center" class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
     deleteButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button style="text-align:center" class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';

    if (income == '' || incomeSource == '' || date == '') 
    {
        alert('entry error..!')
    } 
    else 
    {
        if(income <= 0)
        {
            alert("pls input proper Income..!")

        }
        else
        {
            counter = counter + 1;

            var table = $('#incomeTable').DataTable();
            table.row.add([counter,incomeSource, date, income,editButton,deleteButton,]).draw();


            document.getElementById('totalIncome').innerHTML = getColumnTotalForIncome(3);

            
            $('#').val('')
            $('#').val('')
            $('#').val('')

            document.getElementById("expenceSave").disabled = false;
            calculateCashInHand()
        }

    }
}
function addExpence()
{
     expence = document.getElementById('expenceAmount').value;
     expenceSource = document.getElementById('expenceSources').value;
     editButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Edit"> <button style="text-align:center" class="btn btn-primary btn-xs" id="EditButton" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p>';
     deleteButton ='<p data-placement="top" style="text-align:center" data-toggle="tooltip" title="Delete"><button style="text-align:center" class="btn btn-danger btn-xs"id="DeleteButton"  data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p>';
     date = document.getElementById('calender').value;
    if (expence == '' || expenceSource == '' || date == '') 
    {
        alert('entry error..!')
    } 
    else 
    {
        if(expence <= 0)
        {
            alert("pls input proper expence..!")

        }
        else
        {
            counter = counter + 1;

            var table = $('#expenceTable').DataTable();
            table.row.add([counter,expenceSource, date, expence,editButton,deleteButton,]).draw();


            document.getElementById('totalExpence').innerHTML = getColumnTotalForExpence(3);
            onHand = getColumnTotalForIncome(3) - getColumnTotalForExpence(3);

            
            $('#').val('')
            $('#').val('')
            $('#').val('')
            calculateCashInHand()
        }
    }    
}

function calculateCashInHand() {

    var totalIncome = document.getElementById('totalIncome').innerHTML || 0;
    var totalExpense = document.getElementById('totalExpence').innerHTML || 0;

    var onHand = parseFloat(totalIncome) - parseFloat(totalExpense);

    document.getElementById('totalCash').innerHTML = onHand;
}

function getColumnTotalForIncome(columnIndex) 
{
    var totalIncome = $('#incomeTable').DataTable().column(3).data().reduce(function (a, b) 
    {
        return parseFloat(a) + parseFloat(b);
    });

    return totalIncome;
}

function getColumnTotalForExpence(columnIndex) {
    var totalExpence = $('#expenceTable').DataTable().column(3).data().reduce(function (c, d) {
        return parseFloat(c) + parseFloat(d);
    });

    return totalExpence;
}