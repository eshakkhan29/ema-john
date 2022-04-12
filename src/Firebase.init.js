import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAcbawrtO9WYpZQHod-KiABx3_eaNGekXI",
  authDomain: "ema-john-e7d92.firebaseapp.com",
  projectId: "ema-john-e7d92",
  storageBucket: "ema-john-e7d92.appspot.com",
  messagingSenderId: "1046533838696",
  appId: "1:1046533838696:web:58602e2fc16eaccfc7a8dd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;