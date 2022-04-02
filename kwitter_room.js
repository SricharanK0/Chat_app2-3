const firebaseConfig = {
    apiKey: "AIzaSyCaDiL9ICBqhrDZnYtoGDOjxVeHsmARiCw",
    authDomain: "kwitter-37e8d.firebaseapp.com",
    databaseURL: "https://kwitter-37e8d-default-rtdb.firebaseio.com",
    projectId: "kwitter-37e8d",
    storageBucket: "kwitter-37e8d.appspot.com",
    messagingSenderId: "559621896830",
    appId: "1:559621896830:web:552b8904fe9c2e3c90762f"
  };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "add room"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}