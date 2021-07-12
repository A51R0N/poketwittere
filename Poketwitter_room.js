
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCdu6KzaCegFE7UTP5U-xEzMiswHzjl8zs",
      authDomain: "classtest-ad196.firebaseapp.com",
      projectId: "classtest-ad196",
      storageBucket: "classtest-ad196.appspot.com",
      messagingSenderId: "112038622693",
      appId: "1:112038622693:web:4b9e1d73b946824d31eb0c",
      measurementId: "G-1BEQ6NQTDL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome" + user_name + "!";
    
    function addRoom()
    { 
          room_name = document.getElementById("room_name").value; 
   firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name); 
    window.location = "Poketwitter_page.html";
  }


       function getData() 
      {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="Poketwitter_page.html";
}
      function logout()
       { localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "Pokedex.html";
      }

       



