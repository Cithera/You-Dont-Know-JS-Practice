const PHONE_COST = 99.99;
const TAX_RATE = 0.08;
const ACCESSORY_COST = 9.99;
const SPENDING_THRESHOLD = 200;

var bankBalance = 302.13;
var total = 0;

function findTax(total) {
    return total * TAX_RATE;
}

function  formatPrice(total) {
    return "$" + parseFloat(total).toFixed(2);
}

while (total < bankBalance) {
    total += PHONE_COST;
    if (total < SPENDING_THRESHOLD) {
        total += ACCESSORY_COST;
    }

}

total += findTax(total);

console.log(formatPrice(total));

if (total < bankBalance) {
    console.log("You can afford this purchase.")
} else {
    console.log("You can't afford this purchase.")
}