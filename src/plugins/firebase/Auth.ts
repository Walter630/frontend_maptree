import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseApp } from './index'

const auth = getAuth(firebaseApp)

export default class Auth {
  constructor () {}

  async login (email, senha) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, senha)
      this.user = result.user
      return result.user
    } catch (error) {
      console.error(error)
    }
  }

  async logout () {
    try {
      await signOut(auth)
      this.user = null
    } catch (error) {
      console.error(error)
    }
  }

  getAuthInstance () {
    return auth
  }

  user = null
}
