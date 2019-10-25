import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeNavigator from './WelcomeNavigator';
import TestNavigator from './TestNavigator';
const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Welcome: WelcomeNavigator,
  Main: MainTabNavigator,
  Test: TestNavigator
});
switchNavigator.path = '';
export default createBrowserApp(switchNavigator, { history: 'hash' });
