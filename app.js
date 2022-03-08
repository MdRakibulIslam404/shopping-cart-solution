// console.log("hello from chrome dev tool sources tab");

function updateProductNumber(product, price, isIncreasing) {
    console.count("update func clicked");
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing) { // evabeo kora jay (isIncreasing == true)
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total
function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal / 100) * 10;
    const total = subTotal + tax;
    // update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = total;
}

// handle phone increase and decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 1219, true);
});
// document.getElementById("phone-plus").addEventListener("mousemove", function () {
//     updateProductNumber("phone", 1219, true);
// });
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 1219, false);
});

// handle case increase and decrease events
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 59, false);
});