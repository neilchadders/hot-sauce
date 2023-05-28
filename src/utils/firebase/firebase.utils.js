import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL8J_DC3LevsTiAWvpmkrrZI4JFmivsRU",
    authDomain: "hot-sauce-8b18f.firebaseapp.com",
    projectId: "hot-sauce-8b18f",
    storageBucket: "hot-sauce-8b18f.appspot.com",
    messagingSenderId: "324465078743",
    appId: "1:324465078743:web:93ab847359d61c72cfdb92"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);