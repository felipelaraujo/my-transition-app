import styled from 'styled-components/native'
import { RNResponsive } from '../../config/RNResponsive'

const { fontSizeToDP } = RNResponsive

export const Container = styled.View`
  flex: 1;
  background-color: #18181b;
  align-items: center;
  justify-content: center;
`

export const BlueTitle = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: ${fontSizeToDP(20)}px;
  color: #5bcefa;
`

export const PinkTitle = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: ${fontSizeToDP(20)}px;
  color: #f5a9b8;
`
