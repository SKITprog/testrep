console.log("Hello buddy, please tell me you can read this");
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']")
   
    let amountNumber = parseInt(amountInput.value);
amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
   
showSumPrice (price, amountNumber);
}
function showSumPrice (price, amountNumber) {
let showAmount = document.querySelector("span.show-amount");
if (amountNumber > 10) {
    alert("Maximum 10 termék rendelhető");

}
else if (amountNumber < 1)
{ alert("Minimum 1 termék rendelhető"); }
else { 
let amount = amountNumber * price;
showAmount.innerHTML = amount;
}
}

// Űrlap események.
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) { ev.preventDefault(); 
    console.log( this);
});


// Select elem kitöltése
let toppings = [
"Szalonna",
"Hagyma",
"Tükörtojás",
"Paradicsom",
"Szósz"
];
let toppingSelect = document.querySelector('#topInput');
let index = 0;
while(index < toppings.length) { 
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;

}