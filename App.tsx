import { NavigationContainer } from '@react-navigation/native'
import { Router } from './src/router/router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
