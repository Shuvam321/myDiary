const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInForm = document.getElementById('signInForm')
const signOutForm = document.getElementById('signOutForm')
const container = document.getElementById('container');

signUpButton.addEventListener("click", () =>
  container.classList.add('right-panel-active'),
  // console.log("hello world")
);

signInButton.addEventListener("click", () =>
  container.classList.remove('right-panel-active'));

//PASSWORD TAKING AND SENDING
var sigUpData = [];

function signUp() {
  console.log('Hello you are l in signup page')
  var signUpUserName = document.getElementById('signUp-userName').value;
  console.log(signUpUserName);
  var signUpUserEmail = document.getElementById('signUp-userEmail').value;
  console.log(signUpUserEmail);
  var password = document.getElementById('signUp-password').value;
  console.log(password);
  var repassword = document.getElementById('signUp-repassword').value;
  console.log(repassword);

  var userData = {
    'user': signUpUserName,
    'email': signUpUserEmail,
    'password': password,
    'repassword': repassword,
  }

  console.log(userData);

  sigUpData.push(userData);
  console.log(sigUpData);

  // var sendData = localStorage.setItem('sendData', JSON.stringify(sigUpData));
  console.log(localStorage.setItem('sendData', JSON.stringify(sigUpData)));
 
  // console.log(sendData);
  // window.localStorage(signInpage)

  // var anchor = document.createElement('a');
  // anchor.href = "#signInPage";
  // console.log(anchor.href)
  // var signUpButton = document.getElementById('signUp');
  // signUpButton.appendChild(anchor);

  signOutForm.addEventListener("click", () =>
  container.classList.remove('right-panel-active'),
  // console.log("hello world")
);

// signInForm.addEventListener("click", () =>
//   container.classList.remove('right-panel-active'));


}

function signIn(){
  console.log("Hello you are l Signin page");
  var logInUserEmail = document.getElementById('logIn-userEmail').value;
  console.log(logInUserEmail);
  var logInUserPassword = document.getElementById('password').value;
  console.log(logInUserPassword);

  console.log(localStorage.getItem('sendData'));
  var recieved = localStorage.getItem('sendData');
  console.log(typeof(recieved))
  var recievedData = JSON.parse(recieved);
  console.log(recievedData);
  console.log(typeof(recievedData));

  console.log(recievedData.length);
  window.location = "../index.html";

  for(var i=0; i<recievedData.length;i++){
    console.log(recievedData[i].email)
    console.log(recievedData[i].password)
  

  if(parseInt(logInUserPassword)===parseInt(recievedData[i].password) && logInUserEmail === recievedData[i].email){
    console.log("You are right user");
    window.location.href = "../index.html";
   
  }

}


}