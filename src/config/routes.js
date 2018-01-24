import { StackNavigator, TabNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn';
import Register from '../screens/Register';

import Home from '../screens/Home';
import Encyclopedia from '../screens/Encyclopedia';
import AllLists from '../screens/AllLists';

import AddBirds from '../screens/AddBirds';
import MyLists from '../screens/MyLists';
import AboutThatBird from '../screens/AboutThatBird';

export const SignedOutHomeStack = StackNavigator({
  SignIn: {
    screen: SignIn,
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

const SignedInHomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Vous êtes connecté !',
    },
  },
  AddBirds: {
    screen: AddBirds,
    navigationOptions: {
      title: 'Nouvelle session de bagages',
    },
  },
});

const EncyStack = StackNavigator({
  Encyclopedia: {
    screen: Encyclopedia,
    navigationOptions: {
      title: 'Encyclopédie',
    },
  },
  AboutThatBird: {
    screen: AboutThatBird,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.commonName.toUpperCase()}`,
    }),
  },
});

const ListsStack = StackNavigator({
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

const MainTabs = TabNavigator( //root-most navigation stack imported in App.js
  {
    SignedInHomeStack: {
      screen: SignedInHomeStack,
      navigationOptions: {
        tabBarLabel: 'Connecté',
      },
    },
    EncyStack: {
      screen: EncyStack,
      navigationOptions: {
        tabBarLabel: 'Encyclopédie',
      },
    },
    ListsStack: {
      screen: ListsStack,
      navigationOptions: {
        tabBarLabel: 'Listes',
      },
    },
  }
);

export default StackNavigator(
  {
      SignedOut: {
        screen: SignedOutHomeStack,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedIn: {
        screen: MainTabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
    }
);