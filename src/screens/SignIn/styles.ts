import styled from 'styled-components/native'
import { RNResponsive } from '../../styles/RNResponsive'

const { fontSizeToDP } = RNResponsive

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`

export const BlueTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${fontSizeToDP(28)}px;
  color: ${({ theme }) => theme.colors.primary};
`

export const PinkTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.alternative};
  font-size: ${fontSizeToDP(28)}px;
  color: ${({ theme }) => theme.colors.secondary};
`
