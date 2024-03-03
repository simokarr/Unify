import initializeApp from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAN38ASFu-lKabUBAc4Gv0XOIrBkoAyFbc",
  authDomain: "unify.firebaseapp.com",
  projectId: "unify-48ac8",
  storageBucket: "unify-48ac8.appspot.com",
  messagingSenderId: "...",
  appId: "1:....:web:....",
  measurementId: "G-...."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);