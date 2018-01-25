import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { listChanged, birdAdded, sendList } from '../actions';
import { Card, CardSection, Input, Button } from '../components';

class AddBirds extends Component {
  onSendList() {
    const { location, catchType, birds } = this.props;

    this.props.sendList({ location, catchType, birds });
  }

  onNewBirdForm() {
    const { birds } = this.props;
    let idBird = 0;
    if( !_.isEmpty(birds) ) {
      idBird = parseInt(_.findLastKey(birds)) + 1;
    }

    birds[idBird] = {
      caughtBack: false,
      ring: 'E5152',
      latinName: 'Wingardium Leviosa',
      ringType: 'gold',
      wingspan: '15cm',
    };

    this.props.birdAdded(birds);
  }

  onRowPress() {
  	console.log('You tapped a bird!');
  }

  render() {
  	console.log(this.props.birds);
    return (
      <ScrollView>
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

          <CardSection>
            <Button onPress={this.onNewBirdForm.bind(this)}>
              Ajouter un oiseau
            </Button>
          </CardSection>


          <FlatList
            data={this.props.birds}
            extraData={this.props}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => this.onRowPress(item)}>
                <View>
                  <CardSection>
                    <Text>
                      Bird ! {item.ring}
                    </Text>
                  </CardSection>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={(item) => item.uid}
          />


          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            <Button onPress={this.onSendList.bind(this)}>
              Ajouter cette liste de capture
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
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
  const { location, catchType, error } = addBirds;

  console.log('-- mapStateToProps --');
  const birds = _.map(addBirds.birds, (val, uid) => {
    return { ...val, uid };
  });

  return { location, catchType, birds, error };
};

export default connect(mapStateToProps, { listChanged, birdAdded, sendList })(AddBirds);