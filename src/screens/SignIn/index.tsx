import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ActivityIndicator, ScrollView } from 'react-native'
import { TextInputControl } from '../../components/TextInputControl'
import { useAuth } from '../../context/AuthContext'
import { AppTheme } from '../../styles/AppTheme'
import { ValidationSchemas } from '../../utils/validation.schemas'
import {
  BlueLogo,
  Button,
  Container,
  ErrorText,
  FormContainer,
  FormItemContainer,
  ItemLabel,
  LogoContainer,
  PinkLogo,
  PinkTitle,
  SubmitButton,
  Title,
} from './styles'

interface ISignInForm {
  email: string
  password: string
}

export const SignIn = () => {
  const [isLoading, setLoading] = useState(false)
  const { onSignIn } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(ValidationSchemas.signIn),
  })

  const onSubmit = async (data: ISignInForm) => {
    setLoading(true)

    onSignIn(data)

    setLoading(false)
  }

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

        <FormContainer>
          <FormItemContainer>
            <ItemLabel>E-mail</ItemLabel>
            <TextInputControl
              control={control}
              formFieldName="email"
              placeholder="Insira seu e-mail"
              keyboardType="email-address"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </FormItemContainer>

          <FormItemContainer>
            <ItemLabel>Senha</ItemLabel>
            <TextInputControl
              control={control}
              formFieldName="password"
              placeholder="Insira sua senha"
              secureTextEntry={true}
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </FormItemContainer>

          <FormItemContainer>
            <SubmitButton disabled={isLoading} onPress={handleSubmit(onSubmit)}>
              {isLoading ? (
                <ActivityIndicator color={AppTheme.colors.zinc500} />
              ) : (
                <Title>Login</Title>
              )}
            </SubmitButton>
          </FormItemContainer>

          <FormItemContainer>
            <Button>
              <PinkTitle>Esqueceu a senha?</PinkTitle>
            </Button>
          </FormItemContainer>

          <FormItemContainer>
            <Button>
              <PinkTitle>Criar conta</PinkTitle>
            </Button>
          </FormItemContainer>
        </FormContainer>
      </Container>
    </ScrollView>
  )
}
