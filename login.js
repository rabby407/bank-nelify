document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(password, email)
    if (email === 'zulkarnaeem407@gmail.com' || password === '20RABBY02') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Did not math your pasword and email')
    }
})