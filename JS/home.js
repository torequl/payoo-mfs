document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById('pin-number-input').value;

    if (pinNumberInput === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('add-money-input').value = '';
    } else{
        alert('Incorrect PIN')
    }
})

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOutInput);
    const cashOutPin = document.getElementById('cash-out-pin').value;

    if (cashOutPin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('cash-out-input').value = '';
    } else{
        alert('Incorrect PIN, Please Try Again.')
    }
})