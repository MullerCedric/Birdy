import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Permissions from 'react-native-permissions'
import { listChanged, updateLocation, birdAdded, sendList } from '../actions';
import { Card, CardSection, Input, Button } from '../components';
import DropDown from '../components/DropDown';

class AddBirds extends Component {

  requestPermission = () => {
    Permissions.request('location').then(response => {
      if(response !== 'authorized') {
        alert('Vous n\'avez pas autorisé l\'application à accéder à votre position');
      }
    })
  }

  onMyPos() {
    this.requestPermission();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = (Math.round(position.coords.latitude * 100)/100).toFixed(2)
        const long = (Math.round(position.coords.longitude * 100)/100).toFixed(2)

        const currentPos = lat + ', ' + long;
        this.props.updateLocation(currentPos);
      },
      (error) => {
        console.log(error);
        alert('Impossible d\'accéder à votre position');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  onNewBirdForm() {
    const { birds, birdAdded } = this.props;
    let idBird = 0;
    if( !_.isEmpty(birds) ) {
      idBird = parseInt(_.findLastKey(birds)) + 1;
    }

    birds[idBird] = {
      caughtBack: false,
      ring: '',
      latinName: 'Nouvel oiseau',
      ringType: '',
      wingspan: '',
      weight: '',
      adiposity: '',
      sex: '',
      age:''
    };

    birdAdded(birds);
  }

  onSendList() {
    const { location, catchType, birds, sendList } = this.props;

    sendList({ location, catchType, birds });
  }

  render() {
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
            <Button onPress={this.onMyPos.bind(this)}>
              Ma position actuelle
            </Button>
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
              <DropDown bird={ item } />
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

  const birds = _.map(addBirds.birds, (val, uid) => {
    return { ...val, uid };
  });

  return { location, catchType, birds, error };
};

export default connect(mapStateToProps, { listChanged, updateLocation, birdAdded, sendList })(AddBirds);