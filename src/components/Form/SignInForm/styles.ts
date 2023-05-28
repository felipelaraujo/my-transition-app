import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Form = styled.View`
  padding: ${RFValue(12)}px;
  justify-content: space-around;
  align-items: center;
  border-radius: ${RFValue(8)}px;
`

export const FormItemContainer = styled.View`
  padding: ${RFValue(14)}px;
`

export const ItemLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.zinc100};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.zinc800};
`

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.danger};
  margin-top: ${RFValue(5)}px;
`

export const SubmitButton = styled.TouchableOpacity`
  width: ${RFValue(300)}px;
  padding: ${RFValue(10)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${RFValue(8)}px;
`

export const Button = styled.TouchableOpacity``

export const PinkTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`
