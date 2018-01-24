import React, { Component } from 'react';
import { View, Text, ListView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { infosFetch } from '../actions';
import { CardSection } from '../components';

class Encyclopedia extends Component {
  componentWillMount() {
    this.props.infosFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ infos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(infos);
  }

  onRowPress (bird) {
    this.props.navigation.navigate('AboutThatBird', { ...bird });
  }

  renderRow(info) {
    const { commonName } = info;

    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress(info)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {commonName}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />/////
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