import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Encyclopedia from '../screens/Encyclopedia';
import AllLists from '../screens/AllLists';

export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Connexion',
      },
    },
    Encyclopedia: {
      screen: Encyclopedia,
      navigationOptions: {
        tabBarLabel: 'Encyclopédie',
      },
    },
    AllLists: {
      screen: AllLists,
      navigationOptions: {
        tabBarLabel: 'Listes',
      },
    },
  }
);