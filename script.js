const firstClassPlusBtn = document.getElementById('first-class-plus-btn');
const firstClassMinusBtn = document.getElementById('first-class-minus-btn');
const economyPlusBtn = document.getElementById('economy-plus-btn');
const economyMinusBtn = document.getElementById('economy-minus-btn');
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

bookNow.addEventListener('click', function(){
    const mainContent = document.getElementById('main-content');
    mainContent.parentNode.removeChild(mainContent)
    const mainDiv = document.createElement('div');
    mainDiv.style.border = '3px solid green';
    mainDiv.style.height = '500px';
    mainDiv.style.width = '300px';
    mainDiv.style.backgroundColor = 'red';
    mainContent.appendChild(mainDiv);
    mainDiv.style.display = 'block';
    
})


function calculateTotal() {
    const firstClassInput = document.getElementById('first-class-input');
    const economyInput = document.getElementById('economy-input');

    if(firstClassInput.value == ''){
        firstClassInput.value = 0;
    }
    if(economyInput.value == ''){
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

function ticketGenerate(){
    const mainContent = document.getElementById('main-content');
    const destination = document.getElementById('destination');
    const journeyStart = document.getElementById('journey-start')
    const departureDate = document.getElementById('departure-date');
    const returnDate = document.getElementById('return-date');
    const totalFirstClassSeat = document.getElementById('first-class-input');
    const economyClassSeat = document.getElementById('economy-input');
    const totalAmout = document.getElementById('total');

    

}