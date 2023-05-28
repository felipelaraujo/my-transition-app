import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.zinc900};
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(40)}px;
`

export const BlueLogo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.primary};
`

export const PinkLogo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const FormContainer = styled.View`
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

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.danger};
  margin-top: ${RFValue(5)}px;
`
