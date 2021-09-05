var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);


function submitHandler() {
    var ip = initialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);

}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`hey the loss is ${loss} and percent is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`hey the profit is ${profit} and percent is ${profitPercentage}%`)
    } else {
        showOutput("Don't be lazy, enter something !!")
    }
}


function showOutput(message) {
    outputBox.innerHTML = message;
}