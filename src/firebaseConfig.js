// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//require('dotenv').config();

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// };


// const firebaseConfig = {
//     apiKey: "AIzaSyDhVCOuSWs7Aeyre1rux_AZVc4APgb7QG4",
//     authDomain: "apptesting-3dac2.firebaseapp.com",
//     databaseURL: "https://apptesting-3dac2.firebaseio.com",
//     projectId: "apptesting-3dac2",
//     storageBucket: "apptesting-3dac2.appspot.com",
//     messagingSenderId: "765651729938",
//     appId: "1:765651729938:web:865649aef98d170f61a2cb",
//     measurementId: "G-BMWJLR00KD"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCWvYtEEqQEcf35jbbVjqthQOyboDqVu7Q",
    authDomain: "delviewsx.firebaseapp.com",
    databaseURL: "https://delviewsx.firebaseio.com",
    projectId: "delviewsx",
    storageBucket: "delviewsx.appspot.com",
    messagingSenderId: "107992186512",
    appId: "1:107992186512:web:a334ebc02cbeaeed852215",
};



// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const storage = getStorage(app);
export { app, storage };




// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import 'firebase/compat/storage';

// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//     apiKey: "AIzaSyDdB8m5d0koNZTfb6ISweNT7a8XM36RTXg",
//     authDomain: "ilivemobile.firebaseapp.com",
//     databaseURL: "https://ilivemobile.firebaseio.com",
//     projectId: "ilivemobile",
//     storageBucket: "ilivemobile.appspot.com",
//     messagingSenderId: "866029169819",
//     appId: "1:866029169819:web:df6595e6e44086e5efea3e",
//     measurementId: "G-CL6W46JDNG"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// export  {app, firebase};



