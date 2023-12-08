import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxs3QdPGprs5C134jM2t__rIBtCTA6zkU",
  authDomain: "foro2-dps-beef6.firebaseapp.com",
  projectId: "foro2-dps-beef6",
  storageBucket: "foro2-dps-beef6.appspot.com",
  messagingSenderId: "971657227906",
  appId: "1:971657227906:web:71aae33199ca4559dc8e9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//Android: 971657227906-i8dm3ksbanav80nfl3qjglheckh712kp.apps.googleusercontent.com