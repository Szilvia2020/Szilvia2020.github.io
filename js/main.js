function calcAmount(){
    let price=1000;
    let amountInput=document.querySelector("input [name='amount-input']");
    let amountNumber=parseInt(amountInput.value);
    amountNumber=isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price,amountNumber){
    amountNumber=amountNumber || 0;
    let showAmount=document.querySelector("span.showAmount");
    if (amountNumber>10){
        alert("Maximum 10 db-ot vehet!");
    }else if(amountNumber<1){
        alert("Minimum 1 db-ot lehet vásárolni!");
    }else{
    
    let amount=parseInt(amountInput.value)* price;
    
    showAmount.innerHTML = amount;
    }
}