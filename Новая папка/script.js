function addExpense() {
    var expenseName = document.getElementById("expense-name").value;
    var expenseAmount = document.getElementById("expense-amount").value;

    if (expenseName && expenseAmount) {
       var expenseList = document.getElementById("expense-list");

       var newRow = expenseList.insertRow(-1);
       var cell1 = newRow.insertCell(0);
       var cell2 = newRow.insertCell(1);

       cell1.innerHTML = expenseName;
       cell2.innerHTML = expenseAmount;

       document.getElementById("expense-name").value = "";
       document.getElementById("expense-amount").value = "";

       updateTotalExpense();
    }
 }

 function updateTotalExpense() {
    var expenseList = document.getElementById("expense-list");
    var totalExpense = 0;

    for (var i = 1; i < expenseList.rows.length; i++) {
       totalExpense += parseFloat(expenseList.rows[i].cells[1].innerHTML);
    }

    document.getElementById("total-expense").innerHTML = "Общая сумма расходов: " + totalExpense.toFixed(2);
 }