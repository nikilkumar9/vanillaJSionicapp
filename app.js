const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearButton = document.querySelector('#btn-cancel');
const addButton = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alert = document.querySelector('ion-alert-controller');

var totalexpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}


console.log('Script works!')

addButton.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 
        || enteredAmount <= 0 
        || enteredAmount.trim().length <= 0) {
            alert.create({
                message: 'Please enter valid reason and input',
                header: 'Invalid Inputs',
                buttons: ['Okay']
            }).then(alertElement => {
               alertElement.present(); 
            });
            return;
    } else {
        console.log(enteredReason, enteredAmount);
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': HKD$' + enteredAmount;
    expenses.appendChild(newItem);

    totalexpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalexpenses;
});

clearButton.addEventListener('click', clear);

