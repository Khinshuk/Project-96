
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCr_bzEoQwWbbr73GF86r6LojmWWoOGgf8",
      authDomain: "kwitter-40163.firebaseapp.com",
      databaseURL: "https://kwitter-40163-default-rtdb.firebaseio.com",
      projectId: "kwitter-40163",
      storageBucket: "kwitter-40163.appspot.com",
      messagingSenderId: "875400971559",
      appId: "1:875400971559:web:ca690d42c578db0cca9502"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            game:"Roblox Bedwars"
        }); 
        localStorage.setItem("room_name",room_name);
        window.location="room_page.html";
    }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="room_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}