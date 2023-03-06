import {Theme} from '.'
import colors from '../../themes/colors'

const ColorsLight: Theme = {
  dark: false,
  colors: {
    primary: colors.darkBlue,
    semiPrimary: colors.grey2,
    secondary: colors.lightInkSecondaryDefault,
    default: colors.black,
    yellow: colors.lightComponentAndSkeletonWarning,

    // Container
    containerBorder: colors.grey4,
    containerWithChart: colors.white,

    // Background
    bgPrimary: colors.white,
    bg2: colors.grey4,
    bg3: colors.white,
    bg4: colors.lightBackgroundDefault2,
    bg5: colors?.white,
    roundBg: colors.lightThemeBg,
    containerBg: colors.lightThemeBg,
    selectedListBg: colors.grey4,
    modalOverlayBg: colors.darkBlue2,
    bgHover: colors.lightBackgroundHover,
    bgPressed: colors.lightBackgroundPressed,
    bgTooltip: colors.lightBackgroundDefault3,
    bgCart: colors.lightThemeBg,
    bgCategory: colors.lightBackgroundDefault2,
    bgNotiInfo: colors.lightBackgroundDefault2,
    bgSearch: colors.grey4,
    bgIconNoti: colors.lightBackgroundDefault2,
    bgNavBar: colors?.white,
    bgTabIndicator: colors.teal,
    bgTabBar: colors.grey4,
    bgActiveTabBar: colors.teal,
    bgLabelActive: colors.teal,
    bgLabelInactive: colors.grey4,
    bgInput: colors.grey4,
    bgBtnPrimary: colors.teal,
    bgBtnSecondary: colors.grey4,
    bgFilter: colors.lightInkSecondaryDefault,

    // Linear blur
    blurFrom: colors.lightThemeBg,
    blurTo: 'rgba(242, 244, 246, 0.5)',

    // Text input
    inpBgDefault: colors.lightBackgroundDefault3,
    inpBgSecondary: colors.lightBackgroundDefault2,
    inpBorderFocus: colors.lightComponentAndSkeletonPressed,
    inpBorderError: colors.sellCriticalDefault,
    inpTextError: colors.lightComponentAndSkeletonError,
    inpSecondaryHover: colors.lightInkSecondaryHover,

    // Button
    btnBuyLight: colors.primaryBuySuccessColorLightDefault,
    btnBuySuccess: colors.primaryBuySuccessColorLightDefault,
    btnBuy: colors.primaryBuySuccessColorPressed,
    btnSellLight: colors.sellCriticalDefault,
    btnSell: colors.sellCriticalPressed,
    btnDisabled: colors.lightBackgroundDefault3,
    btnBgLight: colors.backgroundGreenDefault,

    // List
    underlayColor: colors?.grey3,
    listItemSelected: colors.lightTeal,

    // Divider
    divider: colors.lightComponentAndSkeletonDefault2,
    divider2: colors.lightComponentAndSkeletonDefault,
    divider3: colors.lightComponentAndSkeletonDefault2,

    // Text
    primaryText: colors.darkBlue,
    primaryText2: colors.lightInkPrimaryDisable,
    secondaryText: colors.grey2,
    secondaryText2: colors.grey1,
    secondaryText3: colors.grey1,
    secondaryText4: colors.lightInkSecondaryDefault,
    secondaryTextDisabled: colors.lightInkSecondaryDisable,
    txtTabbarNofi: colors.lightInkPrimaryDefault,
    txtEmpNoti: colors.lightInkSecondaryDefault,
    txtActiveNavBar: colors?.lightInkPrimaryDefault,
    txtTabBar: colors.lightInkSecondaryDefault,
    txtActiveTabBar: colors.white,
    txtTabActive: colors.darkBlue,
    txtTabInactive: colors.grey1,
    txtLabelActive: colors.grey4,
    txtLabelInactive: colors.grey1,
    txtInputPlaceHolder: colors.grey3,
    txtInputText: colors.darkBlue,
    txtInputBorder: colors.grey1,
    txtAssetInputBorder: colors.grey4,
    txtInputActive: colors.teal,
    txtInputError: colors.red,
    txtBtnPrimary: colors.white,
    txtBtnSecondary: colors.teal,

    //icon
    icDefault: colors.lightInkSecondaryDefault,
    icSecondary: colors.lightInkPrimaryDefault,
  },
}

export {ColorsLight}
