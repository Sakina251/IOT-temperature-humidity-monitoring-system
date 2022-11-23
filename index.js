var array = [0, 0, 0, 0];


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

//Temperature
firebase.initializeApp(firebaseConfig);
var firebaseRef = firebase.database().ref("Temperature");
firebaseRef.on("value", function (snapshot) {
  var temp = snapshot.val();
  const [, ...temp1] = array
  temp1.push(temp)
  array = temp1
  // console.log(array)
  document.getElementById('temp').innerText = temp;
})

//Humidity
var firebaseRef = firebase.database().ref("Humidity");
firebaseRef.on("value", function (snapshot) {
  var hum = snapshot.val();
  console.log(hum);
  document.getElementById('hum').innerText = hum;
});

//Fan
var firebaseRef = firebase.database().ref("Fan");
firebaseRef.on("value", function (snapshot) {
  var fan = snapshot.val();

  if (fan == true) {
    document.getElementById('fan').innerHTML = "Fan is turned On";

  }
  else {
    document.getElementById('fan').innerHTML = "Fan is turned Off";

  }
  console.log(fan);
  // document.getElementById('fan').innerText = fan;
});

//Threshold
var firebaseRef = firebase.database().ref("Threshold");
function sendData() {
  var x = document.getElementById("Threshold").value
  firebaseRef.update({
    x
  });
}

  // export {array};