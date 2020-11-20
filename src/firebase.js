import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyC1w1785uEruiMGFoz4fPg72teB3Gv8Hyw',
    authDomain: 'instagram-clone-2317.firebaseapp.com',
    databaseURL: 'https://instagram-clone-2317.firebaseio.com',
    projectId: 'instagram-clone-2317',
    storageBucket: 'instagram-clone-2317.appspot.com',
    messagingSenderId: '898804592872',
    appId: '1:898804592872:web:b7c51304497810ecfc595d',
    measurementId: 'G-3X0YDLLXN0',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db;