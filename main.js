const initialPrice = document.querySelector(`#initial-price`);
const stocksQuantity = document.querySelector(`#stocks-quantity`);
const currentPrice = document.querySelector(`#current-price`);
const submitBtn = document.querySelector(`#submit-btn`);
const outputBox = document.querySelector(`#output-box`);

submitBtn.addEventListener(`click`, submitHandler);

function submitHandler() {
    const int = +initialPrice.value;
    const qty = +stocksQuantity.value;
    const currp = +currentPrice.value;
    calculateProfitAndLoss(int, qty, currp);
}

function calculateProfitAndLoss(initial, quantity, current) {
    const investedAmount = initial * quantity;
    if (initial > current) {
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss/ investedAmount) * 100;

        showOutput(`Loss is ${loss} and the loss% is ${lossPercentage} % 😢 invested amount is ${investedAmount}`);

    } else if (current > initial) {
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit/investedAmount) * 100;

        showOutput(`Profit is ${profit} and the profit% is ${profitPercentage} % 🤩 invested amount is ${investedAmount}`);

    } else {
        showOutput(`No Loss, No Gain 🤐`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}