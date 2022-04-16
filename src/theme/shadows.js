import { Platform } from 'react-native';

const shadow = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  android: {
    elevation: 1

  }
});

export default shadow;
