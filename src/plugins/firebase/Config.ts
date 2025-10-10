import { getAnalytics } from 'firebase/analytics'
// src/firebase/config.ts
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useAppStore } from '@/stores/app'

const firebaseConfig = {
  apiKey: 'AIzaSyClC7aCDlXZA12L1a9JcjWOgd5-W6LKs3M',
  authDomain: 'maptree-f825f.firebaseapp.com',
  projectId: 'maptree-f825f',
  storageBucket: 'maptree-f825f.appspot.com',
  messagingSenderId: '447838904319',
  appId: '1:447838904319:web:e733509723a29e726dd1ca',
  measurementId: 'G-XJ37QT4RF1',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

// 🔹 Login com popup (em vez de redirect)
export async function loginWithGooglePopup () {
  try {
    const result = await signInWithPopup(auth, provider)
    const store = useAppStore()
    store.setUser(result.user)
    return result.user
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error)
    return null
  }
}

// 🔹 Logout
export async function logoutGoogle () {
  await signOut(auth)
}
