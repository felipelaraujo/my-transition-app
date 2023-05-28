import 'styled-components'
import { AppTheme } from './AppTheme'

export type ITheme = typeof AppTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
