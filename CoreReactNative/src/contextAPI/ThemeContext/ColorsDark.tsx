import {Theme} from '.'
import colors from '../../themes/colors'

const ColorsDark: Theme = {
  dark: false,
  colors: {
    primary: colors.grey4,
    semiPrimary: colors.darkBlue4,
    secondary: colors.darkBlue6,
    default: colors.white,
    yellow: colors.darkComponentAndSkeletonWarning,

    // Container
    containerBorder: colors.darkBlue3,
    containerWithChart: colors.darkBlue2,

    // Background
    bgPrimary: colors.darkBlue7,
    bg2: colors.darkBlue2,
    bg3: colors.darkBlue2,
    bg4: colors.darkBackgroundDefault2,
    bg5: colors?.darkBackgroundDefault1,
    roundBg: colors.darkBlue2,
    containerBg: colors.darkThemeBg,
    selectedListBg: colors.darkBlue3,
    modalOverlayBg: colors.darkBlue2,
    bgHover: colors.darkBackgroundHover,
    bgPressed: colors.darkBackgroundPressed,
    bgTooltip: colors.darkBackgroundDefault2,
    bgNavBar: colors?.darkBackgroundDefault1,
    bgCategory: colors.darkBackgroundDefault2,
    bgNotiInfo: colors.darkBlue8,
    bgCart: colors.darkBlue8,
    bgSearch: colors.darkBlue3,
    bgIconNoti: colors.darkBackgroundDefault3,
    bgTabBar: colors.darkBlue3,
    bgActiveTabBar: colors.teal,
    bgTabIndicator: colors.teal,
    bgLabelActive: colors.teal,
    bgLabelInactive: colors.darkBlue3,
    bgInput: colors.darkBlue3,
    bgBtnSecondary: colors.darkBlue3,
    bgBtnPrimary: colors.teal,
    bgFilter: colors.darkInkPrimaryDefault,

    // Linear blur
    blurFrom: colors.darkBlue2,
    blurTo: 'rgba(38, 52, 89, 1)',

    // Text input
    inpBgDefault: colors.darkBackgroundDefault3,
    inpBgSecondary: colors.darkBackgroundDefault2,
    inpBorderFocus: colors.darkComponentAndSkeletonDefault2,
    inpBorderError: colors.sellCriticalDefault,
    inpTextError: colors.darkComponentAndSkeletonError,
    inpSecondaryHover: colors.darkInkSecondaryHover,

    // Button
    btnBuyLight: colors.primaryBuySuccessColorLightDefault,
    btnBuySuccess: colors.primaryBuySuccessColorDarkDefault,
    btnBuy: colors.primaryBuySuccessColorPressed,
    btnSellLight: colors.sellCriticalDefault,
    btnSell: colors.sellCriticalPressed,
    btnDisabled: colors.darkBackgroundDefault3,
    btnBgLight: colors.backgroundGreenDefault,

    // List
    underlayColor: colors?.darkBlue4,
    listItemSelected: colors.darkBlue3,

    // Divider
    divider: colors.darkComponentAndSkeletonDefault1,
    divider2: colors.darkComponentAndSkeletonDefault1,
    divider3: colors.darkComponentAndSkeletonDefault2,

    // Text
    primaryText: colors.grey4,
    primaryText2: colors.darkInkPrimaryDisable,
    secondaryText: colors.darkBlue6,
    secondaryText2: colors.darkBlue5,
    secondaryText3: colors.darkInkSecondaryDefault,
    secondaryText4: colors.darkInkSecondaryDefault,
    secondaryTextDisabled: colors.darkInkSecondaryDisable,
    txtTabbarNofi: colors.darkInkPrimaryDefault,
    txtEmpNoti: colors.darkInkSecondaryDefault,
    txtActiveNavBar: colors?.darkInkPrimaryDefault,
    txtTabBar: colors.darkInkSecondaryDefault,
    txtActiveTabBar: colors.white,
    txtTabActive: colors.white,
    txtTabInactive: colors.darkBlue5,
    txtLabelActive: colors.grey4,
    txtLabelInactive: colors.grey4,
    txtBtnPrimary: colors.white,
    txtBtnSecondary: colors.teal,
    txtInputPlaceHolder: colors.darkBlue5,
    txtInputText: colors.grey4,
    txtInputBorder: colors.darkBlue4,
    txtAssetInputBorder: colors.darkBlue3,
    txtInputActive: colors.teal,
    txtInputError: colors.red,

    //icon
    icDefault: colors.darkInkSecondaryDefault,
    icSecondary: colors.darkInkPrimaryDefault,
  },
}

export {ColorsDark}
