

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
//firebase initialization
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const database = firebase.database()

 
var okkk = firebase.database().ref("okkk");

document.getElementById("form").addEventListener('submit', submitForm);
var username;
var pw;
function submitForm(e) {
    e.preventDefault();

    username = getElementVal("name");
    pw = getElementVal("pass");  
    

    saveMessages(username, pw); //sends data to database

    document.querySelector('.alert').style.display = "block";  //displays registration successful

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 10000); //removes registration successful message after 10s

    document.getElementById("form").reset(); //refreshes or resets the form

}


    


const saveMessages = (username, pw) => {
    var newRegistrationForm = okkk.push();

    newRegistrationForm.set({
        username : username,
        password: pw 
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function goToLogin() {
    alert("Successful Registration!")
    window.location="newLogin.html"; //redirect to login page
}
