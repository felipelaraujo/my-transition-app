import React from 'react'
import { Loader } from '../Loader'
import { Button, Title } from './styles'

interface LargeButtonProps {
  title: string
  onPress: () => void
  loading?: boolean
}

export const LargeButton = ({ title, onPress, loading }: LargeButtonProps) => {
  return (
    <Button onPress={onPress}>
      {loading ? <Loader size="small" /> : <Title>{title}</Title>}
    </Button>
  )
}
