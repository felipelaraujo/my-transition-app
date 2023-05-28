import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthProvider } from '../context/AuthContext'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
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
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </AuthProvider>
  )
}
