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

  user_name=localStorage.getItem(user_name);
  
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "Poketwitter_room.html";
  }