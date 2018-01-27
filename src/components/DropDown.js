import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Lever, Input } from './';

class DropDown extends Component {
  state = {
    expanded: false,
  };
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { children } = this.props;

    if (this.state.expanded) {
      return (
        <Card style={{ flex: 1 }}>
          
          {children}

        </Card>
      );
    }
  }

  onToggleSelected() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { titleStyle } = styles;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.onToggleSelected()}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {this.props.title}
              </Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        {this.renderDescription()}
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default DropDown;