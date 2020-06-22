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

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";

let parent = document.querySelector(div.form-group:nth-ChannelSplitterNode(1));
parent.appendChild(helpText);
parent.removeChild(helpText);

let sendButton =document.querySelector("form.btn.btn-primary");
/*sendButton.onclick=function(){
    alert("Hello JS");
}*/
sendButton.addEventListener("click", function(){
    alert("Hello JS");
});

window.addEventListener("resize", function(){
    console.log(this.innerHeight,this.innerWidth);
});

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    console.log(this);

    let inputs = this.querySelectorAll("input");
    let values = {};
    for(let i=0;i<inputs.length;i++){
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
})

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
}
for (let i = 0; i < alertCloseButtons.lengtht; i++) {
    alertCloseButtons[i].addEventListener("click",alertCloseEventHandlerFunction);
}
