import firebase from "firebase";

 const firebaseConfig = {
    // paste your firebase config object here
    
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        
            apiKey: "AIzaSyCceCITw5DY93lI_tlJgigsLtxNR4usU4Q",
            authDomain: "clone-278d9.firebaseapp.com",
            databaseURL: "https://clone-278d9.firebaseio.com",
            projectId: "clone-278d9",
            storageBucket: "clone-278d9.appspot.com",
            messagingSenderId: "293941548210",
            appId: "1:293941548210:web:a1d5dbf1640e3053b5a5ab",
            measurementId: "G-3GZHKYP6P1"
        };
    
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };