import firebase from 'firebase';

// const settings = {timestampsInSnapshots: true};

  var firebaseConfig = {
    apiKey:   process.env.React_APP_API_KEY,
    authDomain: "bharat-oxygen-8ab7c.firebaseapp.com",
    databaseURL:"https://bharat-oxygen-8ab7c-default-rtdb.firebaseio.com/",
    projectId:"bharat-oxygen-8ab7c",
    storageBucket:"bharat-oxygen-8ab7c.appspot.com",
    messagingSenderId: "876545805486",
    appId: "1:876545805486:web:7466d7c6cbd2f82560b13f",
    measurementId: "G-5YNPNJWT35",
  };


  // let db = firebase.firestore();

  // db.settings(settings);
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);



  export default firebase;