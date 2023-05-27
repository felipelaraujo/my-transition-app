import styled from 'styled-components/native'
import { RNResponsive } from '../../config/RNResponsive'

const { fontSizeToDP } = RNResponsive

export const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${fontSizeToDP(20)}px;
  color: black;
`
