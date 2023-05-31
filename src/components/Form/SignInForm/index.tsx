import React, { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import auth from '@react-native-firebase/auth'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../../router/router'
import { ValidationSchemas } from '../../../utils/validation.schemas'
import { ErrorMessage } from '../../ErrorMessage'
import { Loader } from '../../Loader'
import { TextInputControl } from '../../TextInputControl'
import {
  Button,
  Form,
  FormItemContainer,
  ItemLabel,
  PinkTitle,
  SubmitButton,
  Title,
} from './styles'

interface ISignInForm {
  email: string
  password: string
}

interface SignInFormProps {
  navigation: NativeStackNavigationProp<StackParamList, 'SignIn'>
}

export const SignInForm = ({ navigation }: SignInFormProps) => {
  const [isLoading, setLoading] = useState(false)
  const { navigate } = navigation

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignInForm>({
    resolver: yupResolver(ValidationSchemas.signIn),
  })

  const login = ({ email, password }: ISignInForm) => {
    setLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.info(userCredential.user)
      })
      .catch((error) => {
        Alert.alert(error.message)
      })
      .finally(() => {
        navigate('Home')
      })
  }

  return (
    <Form>
      <FormItemContainer>
        <ItemLabel>E-mail</ItemLabel>
        <TextInputControl
          control={control}
          formFieldName="email"
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </FormItemContainer>

      <FormItemContainer>
        <ItemLabel>Senha</ItemLabel>
        <TextInputControl
          control={control}
          formFieldName="password"
          placeholder="Insira sua senha"
          secureTextEntry={true}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </FormItemContainer>

      <FormItemContainer>
        <SubmitButton disabled={isLoading} onPress={handleSubmit(login)}>
          {isLoading ? <Loader size="small" /> : <Title>Login</Title>}
        </SubmitButton>
      </FormItemContainer>

      <FormItemContainer>
        <Button
          onPress={() =>
            navigate('ForgotPassword', { previousEmail: getValues('email') })
          }
        >
          <PinkTitle>Esqueceu a senha?</PinkTitle>
        </Button>
      </FormItemContainer>

      <FormItemContainer>
        <Button onPress={() => {}}>
          <PinkTitle>Criar conta</PinkTitle>
        </Button>
      </FormItemContainer>
    </Form>
  )
}
