import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBZLLMebpkW6uuSFFxDUG1_jo-C1hVixIo",
	authDomain: "blog-react-hooks-5bdae.firebaseapp.com",
	projectId: "blog-react-hooks-5bdae",
	storageBucket: "blog-react-hooks-5bdae.appspot.com",
	messagingSenderId: "953495270710",
	appId: "1:953495270710:web:e1891757d3c202a16c2f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();