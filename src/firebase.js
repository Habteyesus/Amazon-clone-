// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAmvfop5Nx_Ii9XDW2GXelmhw7J-7tr9hE",
    authDomain: "clone-d8c5a.firebaseapp.com",
    projectId: "clone-d8c5a",
    storageBucket: "clone-d8c5a.appspot.com",
    messagingSenderId: "552989094697",
    appId: "1:552989094697:web:cf87468c9f4e77cfe5bd38",
    measurementId: "G-GP1TQ32F9J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };