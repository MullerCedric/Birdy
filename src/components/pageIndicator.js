import React, { Component } from 'react';
import { View } from 'react-native';

const activeTintColor = 'rgba(60, 60, 60, 1)';
const inactiveTintColor = 'rgba(60, 60, 60, 0.4)';
const styles = {
  fullBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
  },
  tabBar: {
    margin: 5,
    justifyContent: 'center',
    flexWrap: 'wrap', 
    alignItems: 'center',
    flexDirection:'row',
  },
  tab: {
    margin: 3,
    height: 6,
    width: 6,
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    borderRadius: 6,
  },
};

class pageIndicator extends Component {
  renderItem = (route, index) => {
    const {
      navigation,
      jumpToIndex,
    } = this.props;

    const focused = index === navigation.state.index;
    const color = focused ? activeTintColor : inactiveTintColor;
    const tabWithColor = { ...styles.tab, backgroundColor: color };
    return (
      <View 
        style={tabWithColor}
        key={route.key}
      >
      </View>
    );
  };

  render() {
    const {
      navigation,
    } = this.props;

    const {
      routes,
    } = navigation.state;

    return (
      <View style={styles.fullBar}>
        <View style={styles.tabBar}>
          {routes && routes.map(this.renderItem)}
        </View>
      </View>
    );
  }
}

export default pageIndicator;
