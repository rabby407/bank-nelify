document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawFieldString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawToal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = withdrawAmount + previousWithdrawToal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
})