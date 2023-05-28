import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: ${RFValue(300)}px;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.zinc900};
  border-radius: ${RFValue(8)}px;
`

export const CustomTextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.zinc100};
`
