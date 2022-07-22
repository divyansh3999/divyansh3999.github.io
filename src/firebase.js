import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyA0zztdSu_U4EZz36Rgcm4XoSt2gHRIwdQ",
        authDomain: "reactformproject.firebaseapp.com",
        databaseURL: "https://reactformproject-default-rtdb.firebaseio.com",
        projectId: "reactformproject",
        storageBucket: "reactformproject.appspot.com",
        messagingSenderId: "575395430668",
        appId: "1:575395430668:web:fdef1a9e108bf7bc9ec929",
      }
);

export const auth = app.auth();
export default app