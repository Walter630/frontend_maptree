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
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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
