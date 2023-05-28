import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: ${RFValue(300)}px;
  padding: ${RFValue(10)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${RFValue(8)}px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.zinc800};
`
