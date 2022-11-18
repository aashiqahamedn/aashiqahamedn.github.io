 var firebaseConfig = {
    apiKey: "AIzaSyBptERHq-vydXf_WQsXQHVCUCaidfeMv1U",
    authDomain: "apsite-4a3fa.firebaseapp.com",
    databaseURL: "https://apsite-4a3fa.firebaseio.com",
    projectId: "apsite-4a3fa",
    storageBucket: "apsite-4a3fa.appspot.com",
    messagingSenderId: "675457588917"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
alert(“Signed Up”);
}
function signIn(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
}
function signOut(){
auth.signOut();
alert(“Signed Out”);
}
auth.onAuthStateChanged(function(user){
if(user){
var email = user.email;
alert(“Active User “ + email);
//Take user to a different or home page
//is signed in
}else{
alert(“No Active User”);
//no user is signed in
}
});