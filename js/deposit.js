

document.getElementById("btn-Deposit").addEventListener("click", function () {
   const depositField = document.getElementById('deposit-field');
   const newDepositAmonutString = depositField.value;
   const newDepositAmonut = parseFloat(newDepositAmonutString);



   //   console.log(typeof newDepositAmonut);


   //    get the current deposit total


   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);

   const currentDepositTotal = previousDepositTotal + newDepositAmonut;

   depositTotalElement.innerText = currentDepositTotal;


   // step-important "balanceTotalElement"

   // const balanceTotalElement = document.getElementById('balance-total');
   // const previousBalanceTotalString = balanceTotalElement.innerText;
   // const previousBalanceTotal = parseFloat(previousBalanceTotalString);


   // step-6
   const currentBalanceTotal = previousBalanceTotal + newDepositAmonut;
   balanceTotalElement.innerText = currentBalanceTotal;












   // clear and update 
   depositField.value = '';

})