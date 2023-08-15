//step-1 add eventlistener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2 get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    //step-7 clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmmount)) {
        alert('Please Provide a valid number');
        return;
    }

    //step-3 get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5 get total withdraw amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);


    if (newWithdrawAmmount > previousBalanceTotal) {
        alert("Bank e Taka NAI");
        return;
    }

    //step-4 add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    //step-6 minus numbers to set the total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;


})