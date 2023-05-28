import * as yup from 'yup'

const signIn = yup.object({
  email: yup.string().email().required('Informe seu e-mail.'),
  password: yup.string().required('Informe sua senha.'),
})

const forgotPassword = yup.object({
  email: yup.string().email().required('Informe seu e-mail.'),
})

export const ValidationSchemas = {
  signIn,
  forgotPassword,
}
