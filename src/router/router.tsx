import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignIn } from '../screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  )
}
