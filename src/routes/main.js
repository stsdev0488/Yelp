import { createStackNavigator } from 'react-navigation-stack';
import Screens from '../screens';

export default createStackNavigator({
  Home: Screens.Home,
  Detail: Screens.Detail,
});
