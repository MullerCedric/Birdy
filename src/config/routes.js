import { StackNavigator, TabNavigator } from 'react-navigation';
import pageIndicator from '../components/pageIndicator';

import SignIn from '../screens/SignIn';
import Register from '../screens/Register';

import Home from '../screens/Home';
import Encyclopedia from '../screens/Encyclopedia';
import AllLists from '../screens/AllLists';

import AddBirds from '../screens/AddBirds';
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
      title: 'Listes des captures',
    },
  },
  AddBirds: {
    screen: AddBirds,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params ? 'À propos' : 'Nouvelle capture'}`,
    }),
  },
});

const MainTabs = TabNavigator( //root-most navigation stack imported in App.js
  {
    SignedInHomeStack: {
      screen: SignedInHomeStack,
    },
    EncyStack: {
      screen: EncyStack,
    },
    ListsStack: {
      screen: ListsStack,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: pageIndicator,
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