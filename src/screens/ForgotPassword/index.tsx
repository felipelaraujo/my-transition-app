import { yupResolver } from '@hookform/resolvers/yup'
import auth from '@react-native-firebase/auth'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { ErrorText } from '../../components/Form/SignInForm/styles'
import { LargeButton } from '../../components/LargeButton'
import { TextInputControl } from '../../components/TextInputControl'
import { StackParamList } from '../../router/router'
import { ValidationSchemas } from '../../utils/validation.schemas'
import { Container, FormContainer, FormItemContainer, Title } from './styles'

interface IForgotPasswordForm {
  email: string
}

interface ForgotPasswordProps
  extends NativeStackScreenProps<StackParamList, 'ForgotPassword'> {}

export const ForgotPassword = ({ route, navigation }: ForgotPasswordProps) => {
  const [isLoading, setLoading] = useState(false)
  const { navigate } = navigation
  const { previousEmail } = route.params

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordForm>({
    defaultValues: {
      email: previousEmail,
    },
    resolver: yupResolver(ValidationSchemas.forgotPassword),
  })

  const sendPasswordResetEmail = ({ email }: IForgotPasswordForm) => {
    setLoading(true)

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Enviado',
          'E-mail de redefinição de senha enviado com sucesso. Cheque sua caixa de entrada ou spam.',
        )
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Usuário não encontrado', 'O e-mail não está cadastrado.')
        }
      })
      .finally(() => {
        navigate('SignIn')
      })
  }

  return (
    <Container>
      <Title>Redefinição de senha</Title>

      <FormContainer>
        <FormItemContainer>
          <TextInputControl
            control={control}
            formFieldName="email"
            placeholder="Insira seu e-mail"
            keyboardType="email-address"
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormItemContainer>

        <FormItemContainer>
          <LargeButton
            title="Enviar e-mail de redefinição"
            onPress={handleSubmit(sendPasswordResetEmail)}
            loading={isLoading}
          />
        </FormItemContainer>
      </FormContainer>
    </Container>
  )
}
