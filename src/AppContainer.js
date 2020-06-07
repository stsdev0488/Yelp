import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Routes from './routes';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: Routes.MainStack,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
