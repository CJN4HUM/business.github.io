const email = document.getElementById("email")
const password = document.getElementById("password")

const text = document.getElementById("text")
const signupEmail = document.getElementById("email1")
const signupPassword = document.getElementById("password1")

const login = document.getElementById("submit")

function Login(){
    if (email.value == localStorage.getItem("email1") && password.value == localStorage.getItem("password1")){
        alert("Login Successful.")
        location.href = 'Home.html'
    }else{
        alert("Username or Password is Invalid.")
    }
}

function Singup(){
    localStorage.setItem('text', text.value)
    localStorage.setItem('email1', signupEmail.value)
    localStorage.setItem('password1', signupPassword.value)
    alert("Registered Successfully.")
}