var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
// initialize the function for checking its input methods as per requirements
function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    if (!ip || !qty || !curr) {
        outputBox.innerText = "Fill all the fields";
    } else if (ip <= 0 || qty <= 0 || curr <= 0) {
        outputBox.innerText = "Please Fill the positive value";
    } else {
        calculateProfitAndLoss(ip, qty, curr);
    }
}
submitBtn.addEventListener("click", submitHandler);

function calculateProfitAndLoss(initialRs, quantity, currentRs) {
    // creating a condition for loss and loss and loss percentage
    if (initialRs > currentRs) {
        var loss = ((initialRs - currentRs) * quantity).toFixed(2);
        var lossPercentage = ((loss * 100) / (initialRs * quantity));
        lossPercentage = lossPercentage.toFixed(2);

        showOutput(`hey the loss is ${loss} and percent is ${lossPercentage}%`)

        // creating a condition for profit and profit percentage
    } else if (initialRs < currentRs) {
        var profit = ((currentRs - initialRs) * quantity).toFixed(2);
        var profitPercentage = ((profit * 100) / (initialRs * quantity));
        profitPercentage = profitPercentage.toFixed(2);
        showOutput(`hey the profit is ${profit} and percent is ${profitPercentage} %`);
    } else {
        showOutput("Don't be lazy, enter something !!")
    }
}
//initializing msg function
function showOutput(msg) {
    outputBox.innerHTML = msg;
}