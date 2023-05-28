import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthProvider } from '../context/AuthContext'
import { ForgotPassword } from '../screens/ForgotPassword'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

export type StackParamList = {
  SignIn: undefined
  ForgotPassword: { previousEmail?: string }
  HomeTabs: undefined
}

export type BottomTabParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<BottomTabParamList>()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export const Router = () => {
  return (
    <AuthProvider>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          statusBarStyle: 'light',
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </AuthProvider>
  )
}
