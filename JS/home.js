document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;

    const pinNumberInput = document.getElementById('pin-number-input').value;

    if (pinNumberInput === '1234'){
        console.log('Added Mony')
    } else{
        alert('Incorrect PIN')
    }

    const balance = document.getElementById('balance').innerText;
    
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);

    const newBalance = addMoneyNumber + balanceNumber;

    document.getElementById('balance').innerText = newBalance;

    console.log(newBalance);
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
    } else{
        alert('Incorrect PIN, Please Try Again.')
    }


})