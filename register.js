const registrationForm = document.getElementById('registration');
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
});
