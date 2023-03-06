import {StyleSheet} from 'react-native'

import {BG_SUCCESS} from './Constants'
import {Theme} from 'contextAPI/ThemeContext'
import colors from 'themes/colors'

export const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      minHeight: 50,
      paddingHorizontal: 15,
      zIndex: 10000000,
    },
    itemBar: {
      flexDirection: 'row',
      borderLeftWidth: 3,
      borderLeftColor: BG_SUCCESS,
      paddingHorizontal: 15,
    },
    defaultView: {
      backgroundColor: theme.colors?.bgTooltip,
      shadowColor: theme.dark ? colors.darkBackgroundHover : 'rgba(0, 0, 0, 0.3)',
      // theme.dark
      // ? hexRgb(colors.darkBackgroundHover, {alpha: 0.2, format: 'rgba'})
      // : 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
      height: 52,
      borderRadius: 6,
      position: 'absolute',
      width: '100%',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    block: {
      flex: 1,
    },
  })
