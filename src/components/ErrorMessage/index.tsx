import React from 'react'
import { ErrorText } from './styles'

interface ErrorMessageProps {
  message?: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <ErrorText>{message}</ErrorText>
}
