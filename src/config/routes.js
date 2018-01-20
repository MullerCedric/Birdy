import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Encyclopedia from '../screens/Encyclopedia';
import AllLists from '../screens/AllLists';

import Register from '../screens/Register';
import AddBirds from '../screens/AddBirds';
import MyLists from '../screens/MyLists';
import AboutThatBird from '../screens/AboutThatBird';

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
  AddBirds: {
    screen: AddBirds,
    navigationOptions: {
      title: 'Nouvelle session de bagages',
    },
  },
});

export const EncyStack = StackNavigator({
  Encyclopedia: {
    screen: Encyclopedia,
    navigationOptions: {
      title: 'Encyclopédie',
    },
  },
  AboutThatBird: {
    screen: AboutThatBird,
    navigationOptions: {
      title: 'Plus sur cet oiseau', //`${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    },
  },
});

export const ListsStack = StackNavigator({
  AllLists: {
    screen: AllLists,
    navigationOptions: {
      title: 'Toutes les captures',
    },
  },
  MyLists: {
    screen: MyLists,
    navigationOptions: {
      title: 'Mes captures',
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
      screen: EncyStack,
      navigationOptions: {
        tabBarLabel: 'Encyclopédie',
      },
    },
    AllLists: {
      screen: ListsStack,
      navigationOptions: {
        tabBarLabel: 'Listes',
      },
    },
  }
);