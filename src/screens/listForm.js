import React, { Component } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Permissions from 'react-native-permissions'
import { 
  listChanged,
  updateLocation,
  birdAdded,
  birdsChanged,
  sendList,
  setEditable,
  setUpdating,
  sendUpdatedList,
  resetState,
  deleteList } from '../actions';
import { Card, CardSection, Lever, Input, Button, Confirm } from '../components';
import DropDown from '../components/DropDown';

class listForm extends Component {
  state = { showModal: false };

  requestPermission = () => {
    Permissions.request('location').then(response => {
      if(response !== 'authorized') {
        alert('Vous n\'avez pas autorisé l\'application à accéder à votre position');
      }
    })
  }

  componentWillMount() {

    if (typeof this.props.navigation.state.params !== 'undefined') {
      _.each(this.props.navigation.state.params, (value, prop) => {
        this.props.listChanged({ prop, value });
      });

      if (!this.props.isUpdating) {
        this.props.setEditable(false);
      } else {
        this.props.setEditable(true);
      }
    } else {
      this.props.resetState();
      this.props.setEditable(true);
    }
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
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 1000 },
    );
  }

  renderButtons(type) {
    if(this.props.isEditable) {
      switch (type) {
        case 'locationButton':
          return (
            <Button onPress={this.onMyPos.bind(this)}>
              Ma position
            </Button>
          );
        case 'birdButton':
          return (
            <CardSection>
              <Button onPress={this.onNewBirdForm.bind(this)}>
                Ajouter un oiseau
              </Button>
            </CardSection>
          );
        case 'sendButton':
          if (typeof this.props.navigation.state.params !== 'undefined') {
            return (
              <CardSection>
                <Button onPress={this.onSendUpdatedList.bind(this)}>
                  Modifier cette liste de capture
                </Button>
              </CardSection>
            );
          } else {
            return (
              <CardSection>
                <Button onPress={this.onSendList.bind(this)}>
                  Ajouter cette liste de capture
                </Button>
              </CardSection>
            );
          }
        case 'deleteButton':
          if (typeof this.props.navigation.state.params !== 'undefined') {
            return (
              <View>
                <CardSection>
                  <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Supprimer cette liste
                  </Button>
                </CardSection>

                <Confirm
                  visible={this.state.showModal}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={this.onDecline.bind(this)}
                >
                  Êtes-vous sûr de supprimer cette liste ?
                </Confirm>
              </View>
            );
          }
      }
    }
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

  onSendUpdatedList() {
    const { location, catchType, birds, sendUpdatedList } = this.props;
    const { uid } = this.props.navigation.state.params;

    sendUpdatedList({ location, catchType, birds, uid });
  }

  onAccept() {
    const { uid } = this.props.navigation.state.params;
    
    this.setState({ showModal: false });
    this.props.deleteList(uid);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Input
              label="Lieu"
              placeholder={ this.props.isEditable ? '50.4, 6.2' : '/' }
              value={this.props.location}
              editable={this.props.isEditable}
              onChangeText={value => this.props.listChanged({ prop: 'location', value })}
            />
            {this.renderButtons('locationButton')}
          </CardSection>
          
          <CardSection>
            <Input
              label="Type de capture"
              placeholder={ this.props.isEditable ? 'Au filet' : '/' }
              value={this.props.catchType}
              editable={this.props.isEditable}
              onChangeText={value => this.props.listChanged({ prop: 'catchType', value })}
            />
          </CardSection>

          {this.renderButtons('birdButton')}


          <FlatList
            data={this.props.birds}
            extraData={this.props}
            renderItem={({ item }) => (
              <DropDown title={ '[' + item.ring + '] ' + item.latinName }>

                <CardSection>
                  <Lever
                    label="Est-ce une reprise ?"
                    value={item.caughtBack}
                    disabled={!this.props.isEditable}
                    onValueChange={value => this.props.birdsChanged({ uid: item.uid, prop: 'caughtBack', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="N° de bague"
                    placeholder={ this.props.isEditable ? 'ring' : '/' }
                    value={item.ring}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'ring', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Nom en latin"
                    placeholder={ this.props.isEditable ? 'Cyanistes caeruleus' : '/' }
                    value={item.latinName}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'latinName', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Type de bague"
                    placeholder={ this.props.isEditable ? 'En fer' : '/' }
                    value={item.ringType}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'ringType', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Envergure"
                    placeholder={ this.props.isEditable ? '24cm' : '/' }
                    value={item.wingspan}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'wingspan', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Poids"
                    placeholder={ this.props.isEditable ? '3kg' : '/' }
                    value={item.weight}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'weight', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Adiposité"
                    placeholder={ this.props.isEditable ? 'Gras' : '/' }
                    value={item.adiposity}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'adiposity', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Sexe"
                    placeholder={ this.props.isEditable ? 'mâle' : '/' }
                    value={item.sex}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'sex', value })}
                  />
                </CardSection>
                
                <CardSection>
                  <Input
                    label="Âge"
                    placeholder={ this.props.isEditable ? '6 mois' : '/' }
                    value={item.age}
                    editable={this.props.isEditable}
                    onChangeText={value => this.props.birdsChanged({ uid: item.uid, prop: 'age', value })}
                  />
                </CardSection>

              </DropDown>
            )}
            keyExtractor={(item) => item.uid}
          />


          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          {this.renderButtons('sendButton')}

          {this.renderButtons('deleteButton')}

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

const mapStateToProps = ({lists}, ownProps) => {
  const { location, catchType, error, isEditable, isUpdating } = lists;

  const birds = _.map(lists.birds, (val, uid) => {
    return { ...val, uid };
  });;

  return { isEditable, isUpdating, location, catchType, birds, error };
};

export default connect(mapStateToProps, {
  listChanged,
  updateLocation,
  birdAdded,
  birdsChanged,
  sendList,
  setEditable,
  setUpdating,
  sendUpdatedList,
  resetState,
  deleteList })(listForm);