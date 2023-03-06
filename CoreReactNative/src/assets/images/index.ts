const images = {
  ic_history: require('./icons/history.png'),
  ic_check_square: require('./icons/ic_check_square.png'),
  ic_arrow_back: require('./icons/ic_arrow_back.png'),
  ic_close: require('./icons/ic_close.png'),
  ic_fail_alert: require('./notifications/ic_fail_alert.png'),
  ic_success_alert: require('./notifications/ic_success_alert.png'),
  ic_warning_alert: require('./notifications/ic_warning_alert.png'),
  ic_info_alert: require('./notifications/ic_info_alert.png'),
  ic_categories_check_circle: require('./icons/ic_categories_check_circle.png'),
  ic_categories_check_circle_toast: require('./icons/ic_categories_check_circle_toast.png'),
  minus: require('./icons/minus.png'),
}

export default images

export type IconTypes = keyof typeof images
