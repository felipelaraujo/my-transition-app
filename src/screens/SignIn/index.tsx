import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView } from 'react-native'
import { SignInForm } from '../../components/Form/SignInForm'
import { StackParamList } from '../../router/router'
import { BlueLogo, Container, LogoContainer, PinkLogo } from './styles'

interface SignInProps
  extends NativeStackScreenProps<StackParamList, 'SignIn'> {}

export const SignIn = ({ navigation }: SignInProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <LogoContainer>
          <BlueLogo>Minha</BlueLogo>
          <PinkLogo>Transição</PinkLogo>
        </LogoContainer>

        <SignInForm navigation={navigation} />
      </Container>
    </ScrollView>
  )
}
