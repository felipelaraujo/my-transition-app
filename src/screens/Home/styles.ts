import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.zinc900};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.zinc100};
`
