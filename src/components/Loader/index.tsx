import { ActivityIndicator } from 'react-native'
import { AppTheme } from '../../styles/AppTheme'

interface LoaderProps {
  size: 'small' | 'large'
}

export const Loader = ({ size }: LoaderProps) => {
  return <ActivityIndicator color={AppTheme.colors.zinc500} size={size} />
}
