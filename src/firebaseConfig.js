// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from 'dotenv';

dotenv.config();

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
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const storage = getStorage(app);
export { app, storage };

