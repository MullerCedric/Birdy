import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  onRegister = () => {
    this.props.navigation.navigate('Register');
  };

  onAdd = () => {
    this.props.navigation.navigate('AddBirds');
  };

  onLists = () => {
    this.props.navigation.navigate('MyLists');
  };

  render() {
    return (
      <View>
        <Text>
          PAGE HOME
        </Text>
        <Button
          onPress={() => this.onRegister()}
          title="S'inscrire"
        />
        <Button
          onPress={() => this.onAdd()}
          title="Nouvelle session de bagages"
        />
        <Button
          onPress={() => this.onLists()}
          title="Mes captures"
        />
      </View>
    );
  }
}
export default Home;