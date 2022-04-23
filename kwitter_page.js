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
 room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
