const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginUsername.value;
    const password = loginPassword.value;

    const storedUsername = localStorage.getItem('regUsername');
    const storedPassword = localStorage.getItem('regPassword');

    if (storedUsername === username && storedPassword === password) {
        alert('Login successful!');
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password');
    }
});


const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
});

const registrationForm = document.getElementById('registrationForm');
const regUsername = document.getElementById('regUsername');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = regUsername.value;
    const email = regEmail.value;
    const password = regPassword.value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Registration successful!');

    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
});
