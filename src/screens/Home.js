import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  onRegister = () => {
    this.props.navigation.navigate('Register');
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
      </View>
    );
  }
}
export default Home;