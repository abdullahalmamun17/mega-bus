const firstClassPlusBtn = document.getElementById('first-class-plus-btn');
const firstClassMinusBtn = document.getElementById('first-class-minus-btn');
const economyPlusBtn = document.getElementById('economy-plus-btn');
const economyMinusBtn = document.getElementById('economy-minus-btn');
const confirmPurchase = document.getElementById('confirm-purchase');
const bookNow = document.getElementById('book-now-btn');

firstClassPlusBtn.addEventListener('click', function () {
    const firstClassInput = document.getElementById('first-class-input');
    if (firstClassInput.value === '') {
        firstClassInput.value = 0;
    }
    const firstClassInputNumber = parseInt(firstClassInput.value);
    firstClassInput.value = firstClassInputNumber + 1;
    calculateTotal();
})

firstClassMinusBtn.addEventListener('click', function () {
    const firstClassInput = document.getElementById('first-class-input');
    const firstClassInputNumber = parseInt(firstClassInput.value);
    if (firstClassInputNumber > 0) {
        firstClassInput.value = firstClassInputNumber - 1;
    }
    calculateTotal();
})

economyPlusBtn.addEventListener('click', function () {
    const economyInput = document.getElementById('economy-input');
    if (economyInput.value === '') {
        economyInput.value = 0;
    }
    const economyInputNumber = parseInt(economyInput.value);
    economyInput.value = economyInputNumber + 1;
    calculateTotal();
})

economyMinusBtn.addEventListener('click', function () {
    const economyInput = document.getElementById('economy-input');
    const economyInputNumber = parseInt(economyInput.value);
    if (economyInputNumber > 0) {
        economyInput.value = economyInputNumber - 1;
    }
    calculateTotal();
})

bookNow.addEventListener('click', function () {
    const total = parseInt(document.getElementById('total').innerText);
    if (total > 0) {
        const firstClassInput = document.getElementById('first-class-input');
        const economyInput = document.getElementById('economy-input');

        const confirmFirstClass = document.getElementById('confirm-first-class');
        const firstClassFare = parseInt(firstClassInput.value) * 150;
        confirmFirstClass.innerText = '$' + firstClassFare;
        const confirmEconomy = document.getElementById('confirm-economy');
        const economyFare = parseInt(economyInput.value) * 100;
        confirmEconomy.innerText = '$' + economyFare;
        const confirmSubTotal = document.getElementById('confirm-subtotal');
        const subTotalFare = firstClassFare + economyFare;
        confirmSubTotal.innerText = '$' + subTotalFare;
        const confirmTotal = document.getElementById('confirm-total');
        const totalFare = subTotalFare + (subTotalFare * 0.1);
        confirmTotal.innerText = '$' + totalFare;
    }
    document.getElementById('msg').innerText = '';
})

confirmPurchase.addEventListener('click', function () {
        const msg = document.getElementById('msg');
        msg.innerText = 'Successfully order placed. Thanks for purchase.';
})

function calculateTotal() {
    const firstClassInput = document.getElementById('first-class-input');
    const economyInput = document.getElementById('economy-input');

    if (firstClassInput.value == '') {
        firstClassInput.value = 0;
    }
    if (economyInput.value == '') {
        economyInput.value = 0;
    }
    const firstClassInputNumber = parseInt(firstClassInput.value);
    const economyInputNumber = parseInt(economyInput.value);
    const firstClassSubTotal = firstClassInputNumber * 150;
    const economySubTotal = economyInputNumber * 100;
    //calculating subtotal price
    const subTotal = firstClassSubTotal + economySubTotal;
    document.getElementById('sub-total').innerText = '$' + subTotal;
    //calculating 10% tax
    const tax = subTotal * 0.1;
    document.getElementById('tax').innerText = '$' + tax;
    //calculating total price
    const total = subTotal + tax;
    document.getElementById('total').innerText = '$' + total;
}