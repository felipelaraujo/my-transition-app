import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { AuthProvider } from '../context/AuthContext'
import { ForgotPassword } from '../screens/ForgotPassword'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

export type StackParamList = {
  SignIn: undefined
  ForgotPassword: { previousEmail?: string }
  Home: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

export const Router = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)

    return subscriber
  }, [])

  return (
    <AuthProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: false,
          statusBarColor: 'black',
          statusBarStyle: 'light',
        }}
      >
        {user ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </AuthProvider>
  )
}
