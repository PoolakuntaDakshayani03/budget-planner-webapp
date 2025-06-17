import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJ3JImnJCBPfP6F5VXNRyZJwSiFdFlRw4",
  authDomain: "vue-budget-planner.firebaseapp.com",
  projectId: "vue-budget-planner",
  storageBucket: "vue-budget-planner.appspot.com",
  messagingSenderId: "901130762741",
  appId: "1:901130762741:web:facc03b4ee40f79fa048bc",
  measurementId: "G-34P5KH93YX"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
