import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  block: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  shadow: {
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
});
