import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { Router } from './src/router/router'
import { AppTheme } from './src/styles/AppTheme'

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
    <ThemeProvider theme={AppTheme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  )
}
