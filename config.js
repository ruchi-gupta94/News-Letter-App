import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCDIByF58HGscmUiK_dBTsir60IN1j9QEA",
    authDomain: "newsletter-app-85f5e.firebaseapp.com",
    databaseURL: "https://newsletter-app-85f5e-default-rtdb.firebaseio.com",
    projectId: "newsletter-app-85f5e",
    storageBucket: "newsletter-app-85f5e.appspot.com",
    messagingSenderId: "833460358691",
    appId: "1:833460358691:web:3e682303be788b929eeb96"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.database();