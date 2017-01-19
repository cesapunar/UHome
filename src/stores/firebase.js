import { initializeApp } from 'firebase'

let config = {
    apiKey: 'AIzaSyA5VCkB3TNE7vqKZPXF1LGGLSYpQv-gwUE',
    authDomain: 'sdespierto-f1e65.firebaseapp.com',
    databaseURL: 'https://sdespierto-f1e65.firebaseio.com',
    storageBucket: 'sdespierto-f1e65.appspot.com'
}

// Initialize Firebase
const firebase = initializeApp(config)

export const database = firebase.database()
export const storage = firebase.storage()
export const auth = firebase.auth()

export function uid () {
	return auth.currentUser.uid
}

export default firebase;