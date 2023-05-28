import React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, Text } from 'react-native'
import { TextInputControl } from '../../components/TextInputControl'
import {
  BlueLogo,
  Button,
  Container,
  FormContainer,
  FormItemContainer,
  ItemLabel,
  LogoContainer,
  PinkLogo,
  PinkTitle,
  SubmitButton,
  Title,
} from './styles'

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: any) => console.log(data)

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
            {errors.email && <Text>This is required.</Text>}
          </FormItemContainer>

          <FormItemContainer>
            <ItemLabel>Senha</ItemLabel>
            <TextInputControl
              control={control}
              formFieldName="password"
              placeholder="Insira sua senha"
              secureTextEntry={true}
            />
            {errors.password && <Text>This is required.</Text>}
          </FormItemContainer>

          <FormItemContainer>
            <SubmitButton onPress={handleSubmit(onSubmit)}>
              <Title>Login</Title>
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
