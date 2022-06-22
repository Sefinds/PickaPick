//FIREBASE
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
    import { getDatabase, set, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
    import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
    import {
      getFirestore,
      collection,
      getDocs,
      doc,
      getDoc,
      setDoc,
      addDoc,
      deleteDoc,
      updateDoc,
      deleteField,
      query,
      where,
      limit,
      orderBy,
      onSnapshot
    } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBBjsMt2Hxo88gw-6wqgd1VkE0XKNonLdY",
      authDomain: "picks-5fe86.firebaseapp.com",
      projectId: "picks-5fe86",
      storageBucket: "picks-5fe86.appspot.com",
      messagingSenderId: "704897507066",
      appId: "1:704897507066:web:1412d543ec7c77b5e87343",
      measurementId: "G-1L5G0F2RM9"
    };

    // init firebase app
    const app = initializeApp(firebaseConfig);
    // init services
    const db = getFirestore(app);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);
    const auth = getAuth();
    const user = auth.currentUser;

    export{db, auth, database, app, user};

    const unsub = auth.onAuthStateChanged((user) => {
      console.log("Auth state has changed!");
      console.log(user);
    });
    unsub();




    /*  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });*/
