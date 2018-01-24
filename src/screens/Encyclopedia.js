import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { infosFetch } from '../actions';
import { CardSection } from '../components';

class Encyclopedia extends Component {
  componentWillMount() {
    this.props.infosFetch();
  }

  onRowPress (bird) {
    this.props.navigation.navigate('AboutThatBird', { ...bird });
  }

  render() {
    return (
      <FlatList
        data={this.props.infos}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => this.onRowPress(item)}>
            <View>
              <CardSection>
                <Text style={styles.titleStyle}>
                  {item.commonName}
                </Text>
              </CardSection>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  const infos = _.map(state.encyclopedia, (val, uid) => {
    return { ...val, uid };
  });

  return { infos };
};

export default connect(mapStateToProps, { infosFetch })(Encyclopedia);