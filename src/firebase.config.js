// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAyydAojubszfYwmOntDIU_hhPaoj8BbQQ',
  authDomain: 'blog-app-2dab6.firebaseapp.com',
  projectId: 'blog-app-2dab6',
  storageBucket: 'blog-app-2dab6.appspot.com',
  messagingSenderId: '924199652747',
  appId: '1:924199652747:web:cc8494a22b8498b868f38e',
  measurementId: 'G-308G7PWKPY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
