import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchLists } from '../actions';
import { CardSection } from '../components';

class AllLists extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }

  onRowPress (bird) {
    this.props.navigation.navigate('MyLists', { ...bird });
  }

  render() {
    return (
      <FlatList
        data={this.props.existingLists}
        renderItem={({ item }) => {
          const captureDate = new Date(item.captureDate);
          return (
            <TouchableWithoutFeedback onPress={() => this.onRowPress(item)}>
              <View>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    Liste du {captureDate.getDate()}/{captureDate.getMonth() + 1}/{captureDate.getFullYear()}
                  </Text>
                </CardSection>
              </View>
            </TouchableWithoutFeedback>
          );
        }
      }
        keyExtractor={(item) => item.uid}
        refreshing={this.props.refreshing}
        onRefresh={this.props.fetchLists}
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

const mapStateToProps = ({lists}) => {
  const { allLists, refreshing } = lists;
  const existingLists = _.map(allLists, (val, uid) => {
    return { ...val, uid };
  });

  return { existingLists, refreshing };
};

export default connect(mapStateToProps, { fetchLists })(AllLists);