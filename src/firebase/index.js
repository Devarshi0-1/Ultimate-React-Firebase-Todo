import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDdVmOpqYwqSIyp3fAj2xQ9ckt6LZ8l2S0',
    authDomain: 'todo-reactjs-9eff9.firebaseapp.com',
    projectId: 'todo-reactjs-9eff9',
    storageBucket: 'todo-reactjs-9eff9.appspot.com',
    messagingSenderId: '62673256413',
    appId: '1:62673256413:web:f7e9a881f7043774228034',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
