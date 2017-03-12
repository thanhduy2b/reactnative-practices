import Metrics from './metrics';
import Colors from './colors';

const ApplicationStyles = {
  splashScreen: {
    flex: 1,
    width: null,
    height: null
  },
  inputField: {
    flex: 1,
    paddingHorizontal: Metrics.padding,
    color: Colors.white,
    backgroundColor: Colors.transparent
  },
  iconInputField: {
    height: Metrics.icons.small,
    width: Metrics.icons.small,
    resizeMode: 'contain'
  },
  halfHeight: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quarterHeight: {
    flex: .25,
  }
};

export default ApplicationStyles;
