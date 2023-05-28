import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.danger};
`
