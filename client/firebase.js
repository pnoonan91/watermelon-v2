import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAwsoukSxd_OTXNE3yvrBckgZz7l7IOM9E",
    authDomain: "watermelon-v2.firebaseapp.com",
    databaseURL: "https://watermelon-v2.firebaseio.com",
    projectId: "watermelon-v2",
    storageBucket: "watermelon-v2.appspot.com",
    messagingSenderId: "230073084309"
}

firebase.initializeApp(config)
export default firebase
