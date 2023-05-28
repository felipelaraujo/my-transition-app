import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.zinc900};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.zinc100};
`

export const FormContainer = styled.View``

export const FormItemContainer = styled.View`
  padding: ${RFValue(14)}px;
`
