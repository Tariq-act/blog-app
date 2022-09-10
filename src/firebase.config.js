// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChOoj4jcPix7WUnx3CqF_gQAja_L9zJrY',
  authDomain: 'blog-app-511e9.firebaseapp.com',
  projectId: 'blog-app-511e9',
  storageBucket: 'blog-app-511e9.appspot.com',
  messagingSenderId: '827118385408',
  appId: '1:827118385408:web:e928030c6d0521f5b49be5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
