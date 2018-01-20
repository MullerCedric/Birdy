import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AllLists extends Component {
  onMine = () => {
    this.props.navigation.navigate('MyLists');
  };

  render() {
    return (
      <View>
        <Text>
          PAGE ALLLISTS
        </Text>
        <Button
          onPress={() => this.onMine()}
          title="Mes captures"
        />
      </View>
    );
  }
}
export default AllLists;