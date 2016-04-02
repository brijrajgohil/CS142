const SPENDINGTHRESHOLD = 200;
const TAXRATE = 0.08;
const PHONEPRICE = 99.99;
const ACCESSORYPRICE = 9.99;

var bankBalance = 303.91;
var amount = 0;


function calculateTax(amount) {
    return amount * TAXRATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}
while(amount < bankBalance) {
    amount += PHONEPRICE;
    if(amount < SPENDINGTHRESHOLD) {
        amount += ACCESSORYPRICE;
    }
}

amount += calculateTax(amount);
console.log("Your purchase: " + formatAmount(amount));

if(amount > bankBalance) {
    console.log("You can afford");
}
