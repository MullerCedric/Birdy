import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchLists, setFilter, setUpdating } from '../actions';
import { CardSection, Lever } from '../components';

class AllLists extends Component {
  componentWillMount() {
    this.props.fetchLists(this.props.onlyMine);
  }

  onChangeFilter(bool) {
    this.props.setFilter(bool);
    this.props.fetchLists(bool);
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
        <CardSection>
          <Lever
            label="N'afficher que mes listes"
            value={this.props.onlyMine}
            onValueChange={value => this.onChangeFilter(!this.props.onlyMine)}
          />
        </CardSection>
        <CardSection>
          <FlatList
            data={this.props.existingLists}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item) => item.uid}
            refreshing={this.props.refreshing}
            onRefresh={() => this.props.fetchLists(this.props.onlyMine)}
          />
        </CardSection>
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
  const { allLists, onlyMine, refreshing } = lists;
  let existingLists = _.map(allLists, (val, uid) => {
    return { ...val, uid };
  });
  existingLists.reverse();
  
  return { existingLists, onlyMine, refreshing };
};

export default connect(mapStateToProps, { fetchLists, setFilter, setUpdating })(AllLists);