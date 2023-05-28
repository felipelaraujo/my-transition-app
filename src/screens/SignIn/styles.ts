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
