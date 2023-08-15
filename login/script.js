//step-1 add click event handler with the login button
document.getElementById('btn-login').addEventListener('click', function () {
    //step-2 get the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value; 

    //step-3 get the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value; 

    if(email === 'taka@bank.com' && password === 'secret')
    {
        window.location.href = 'bank.html';
    }
    else{
        alert('ivalid');
    }
})





