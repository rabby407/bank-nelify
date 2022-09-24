document.getElementById('btn-diposit').addEventListener('click', function () {


    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const depositAmount = parseFloat(depositFieldString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = depositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + currentDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';


})