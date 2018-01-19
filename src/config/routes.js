import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Encyclopedia from '../screens/Encyclopedia';
import AllLists from '../screens/AllLists';

import Register from '../screens/Register';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Se connecter',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'S\'enregistrer',
    },
  },
});

export default TabNavigator(
  {
    Home: {
      screen: HomeStack,
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