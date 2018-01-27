import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchLists, setUpdating } from '../actions';
import { CardSection } from '../components';

class AllLists extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }

  onListPress(list) {
    this.props.setUpdating(list.userId);
    this.props.navigation.navigate('AddBirds', { ...list });
  }

  renderItem({ item }) {
    const captureDate = new Date(item.captureDate);
    return (
      <TouchableWithoutFeedback onPress={() => this.onListPress(item)}>
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

  render() {
    return (
      <View>
        <FlatList
          data={this.props.existingLists}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item) => item.uid}
          refreshing={this.props.refreshing}
          onRefresh={this.props.fetchLists}
        />
        <CardSection>
          <Text>Tirez pour raffraîchir</Text>
        </CardSection>
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

const mapStateToProps = ({lists}) => {
  const { allLists, refreshing } = lists;
  let existingLists = _.map(allLists, (val, uid) => {
    return { ...val, uid };
  });
  existingLists.reverse();

  return { existingLists, refreshing };
};

export default connect(mapStateToProps, { fetchLists, setUpdating })(AllLists);