import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { listChanged, sendList } from '../actions';
import { Card, CardSection, Input, Button } from '../components';

class AddBirds extends Component {
  onSendList() {
    const { location, catchType, birds } = this.props;

    this.props.sendList({ location, catchType, birds });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Lieu de la capture"
              placeholder="50.4846, 6.254"
              value={this.props.location}
              onChangeText={value => this.props.listChanged({ prop: 'location', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Type de capture"
              placeholder="Au filet"
              value={this.props.catchType}
              onChangeText={value => this.props.listChanged({ prop: 'catchType', value })}
            />
          </CardSection>



          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            <Button onPress={this.onSendList.bind(this)}>
              Ajouter cette liste de capture
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({addBirds}) => {
  const { location, catchType, birds, error } = addBirds;

  return { location, catchType, birds, error };
};

export default connect(mapStateToProps, { listChanged, sendList })(AddBirds);