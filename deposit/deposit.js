//step-1 add eventlistener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2 get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

     if(newDepositAmmount<0)
    {
        alert("Please provide a valid Number");
        return;
    }
    
    if(isNaN(newDepositAmmount))
    {
        alert('Please Provide a valid number');
        return;
    }


    
    //step-3 get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepostitTotalString = depositTotalElement.innerText;
    const previousDepostitTotal = parseFloat(previousDepostitTotalString);
    
    //step-4 add numbers to set the total deposit
    const currentDepositTotal = previousDepostitTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    
    //step-6 add numbers to set the total balance
    const currentBalanceTotal = newDepositAmmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7 clear the deposit field
    depositField.value = '';
})