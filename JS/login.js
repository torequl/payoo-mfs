// 1. Add event handler
document.getElementById('login-btn').addEventListener('click', function(event){
// Prevent browser reload 
    event.preventDefault();
// Get the Phone Number and PIN Number.
    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = './home.html';
    }
    else {
        alert("Wrong Phone And PIN");
    }


})

