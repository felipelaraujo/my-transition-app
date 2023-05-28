import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import { Router } from './src/router/router'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
