// 1. Add event handler
document.getElementById('login-btn').addEventListener('click', function(event){
// Prevent browser reload 
    event.preventDefault();
// Get the Phone Number and PIN Number.
    // const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;

<<<<<<< HEAD
    if (pinNumber === '1234'){
=======
    if (phoneNumber === '5' && pinNumber === '1234'){
>>>>>>> 8a43f5bfd66a1a6831c1dfc9753b401bd3da6b42
        window.location.href = './home.html';
    }
    else {
        alert("Wrong Phone And PIN");
    }


})

