document.getElementById('btn-widraw').addEventListener('click', function () {
    const widrawfield = document.getElementById('widraw-field');
    const widrawValue = widrawfield.value;
    const newwidrawAmount = parseFloat(widrawValue);

    // widrawTotal element 

    const withdrawTotalElement = document.getElementById("widraw-total");
    const previousWidrawString = withdrawTotalElement.innerText;
    const previousWidrawTotal = parseFloat(previousWidrawString);

    // balanceTotalElement

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    // most important 
    widrawfield.value = '';


    if (newwidrawAmount > previousBalanceTotal) {
        alert('Not Much Money');
        return;
    }



    //  currentWidrawTotal

    const currentWidrawTotal = previousWidrawTotal + newwidrawAmount;

    withdrawTotalElement.innerText = currentWidrawTotal;




    // balace totAL

    // step-6
    const currentBalanceTotal = previousBalanceTotal - newwidrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;







})
