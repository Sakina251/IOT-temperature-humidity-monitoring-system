const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(firebaseConfig);
var firebaseRef = firebase.database().ref("okkk");
var x;
firebaseRef.on("value", function (snapshot) {
  x = snapshot.val();
  console.log(x);


})


function login() {
    var username = document.getElementById('name').value
    var pw = document.getElementById('pass').value
    var credentials = {
        username: username,
        pw: pw
    }
    console.log(credentials)

    
    for(credentials in x) {
        if (true) {
            alert('Login Successful');
            window.location="index.html";
            // window.location.replace('home.html');
            // // return false;
        } 
    }

    
}