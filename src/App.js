import './App.css';
import Main from './MainComponent';

import { firebaseConfig } from './firebase.config';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseApp = initializeApp({firebaseConfig});
const firestore = getFirestore(firebaseApp);
const auth = getAuth();

function App() {
  return (
    <div>
        <h1>This is App </h1>
        <Main />
    </div>
  );
}

export default App;
