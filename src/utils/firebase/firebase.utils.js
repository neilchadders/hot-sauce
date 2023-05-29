import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBL8J_DC3LevsTiAWvpmkrrZI4JFmivsRU",
    authDomain: "hot-sauce-8b18f.firebaseapp.com",
    projectId: "hot-sauce-8b18f",
    storageBucket: "hot-sauce-8b18f.appspot.com",
    messagingSenderId: "324465078743",
    appId: "1:324465078743:web:93ab847359d61c72cfdb92"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

/* 

const firebaseConfig = {
    apiKey: "AIzaSyBL8J_DC3LevsTiAWvpmkrrZI4JFmivsRU",
    authDomain: "hot-sauce-8b18f.firebaseapp.com",
    projectId: "hot-sauce-8b18f",
    storageBucket: "hot-sauce-8b18f.appspot.com",
    messagingSenderId: "324465078743",
    appId: "1:324465078743:web:93ab847359d61c72cfdb92"
};
*/