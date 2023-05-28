import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { KeyboardTypeOptions } from 'react-native/types'
import { AppTheme } from '../../styles/AppTheme'
import { Container, CustomTextInput } from './styles'

interface TextInputControlProps {
  control: Control<any>
  formFieldName: string
  placeholder: string
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
}

export const TextInputControl = ({
  control,
  formFieldName,
  placeholder,
  keyboardType,
  secureTextEntry,
}: TextInputControlProps) => {
  return (
    <Controller
      control={control}
      name={formFieldName}
      render={({ field: { onChange, onBlur, value } }) => (
        <Container>
          <CustomTextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={AppTheme.colors.zinc500}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        </Container>
      )}
    />
  )
}
