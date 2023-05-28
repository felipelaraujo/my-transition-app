import auth from '@react-native-firebase/auth'
import React, { ReactElement, createContext, useContext } from 'react'

interface ICredentials {
  email: string
  password: string
}

interface AuthProps {
  onSignUp: (credentials: ICredentials) => void
  onSignIn: (credentials: ICredentials) => void
  onSignOut: () => void
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const signUp = ({ email, password }: ICredentials) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.info(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error({
          errorCode,
          errorMessage,
        })
      })
  }

  const signIn = ({ email, password }: ICredentials) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.info(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error({
          errorCode,
          errorMessage,
        })
      })
  }

  const signOut = () => {
    auth()
      .signOut()
      .catch((error) => console.error(error))
  }

  const value = {
    onSignUp: signUp,
    onSignIn: signIn,
    onSignOut: signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
