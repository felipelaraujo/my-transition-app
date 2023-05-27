import { Dimensions, PixelRatio } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercentageToDP = (widthPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100)
}

const heightPercentageToDP = (heightPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100)
}

const fontSizeToDP = (size: number) => {
  return RFValue(size)
}

export const RNResponsive = {
  widthPercentageToDP,
  heightPercentageToDP,
  fontSizeToDP,
}
