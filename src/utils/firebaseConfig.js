import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";


export const firebaseConfig = {

  apiKey: "AIzaSyAwfUbCrsJUIurHCXWgRX34SPQFqvUMSf4",

  authDomain: "scrum-board-234e9.firebaseapp.com",

  databaseURL: "https://scrum-board-234e9-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "scrum-board-234e9",

  storageBucket: "scrum-board-234e9.appspot.com",

  messagingSenderId: "62018710990",

  appId: "1:62018710990:web:82c14d4b73aeeadb164f9f",

};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const assignmentRef = ref(db, '/assignment');

