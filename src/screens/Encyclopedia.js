import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Encyclopedia extends Component {
  onAbout = () => {
    this.props.navigation.navigate('AboutThatBird');
  };

  render() {
    return (
      <View>
        <Text>
          PAGE ENCYCLOPEDIA
        </Text>
        <Button
          onPress={() => this.onAbout()}
          title="En savoir plus sur cet oiseau"
        />
      </View>
    );
  }
}
export default Encyclopedia;