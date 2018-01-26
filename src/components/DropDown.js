import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Lever, Input } from './';
import { selectBird, birdsChanged } from '../actions';

class DropDown extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { bird, expanded } = this.props;
    const {
      caughtBack,
      ring,
      latinName,
      ringType,
      wingspan,
      weight,
      adiposity,
      sex,
      age
    } = this.props.bird;

    if (expanded) {
      return (
        <Card style={{ flex: 1 }}>
          
          <CardSection>
            <Lever
              label="Est-ce une reprise ?"
              value={caughtBack}
              onValueChange={value => this.props.birdsChanged({ uid: bird.uid, prop: 'caughtBack', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="N° de bague"
              placeholder="ring"
              value={ring}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'ring', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Nom en latin"
              placeholder="Cyanistes caeruleus"
              value={latinName}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'latinName', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Type de bague"
              placeholder="En fer"
              value={ringType}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'ringType', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Envergure"
              placeholder="24cm"
              value={wingspan}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'wingspan', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Poids"
              placeholder="3kg"
              value={weight}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'weight', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Adiposité"
              placeholder="Gras"
              value={adiposity}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'adiposity', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Sexe"
              placeholder="mâle"
              value={sex}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'sex', value })}
            />
          </CardSection>
          
          <CardSection>
            <Input
              label="Âge"
              placeholder="6 mois"
              value={age}
              onChangeText={value => this.props.birdsChanged({ uid: bird.uid, prop: 'age', value })}
            />
          </CardSection>

        </Card>
      );
    }
  }

  onToggleSelected(uid) {
    const { selectBird, expanded } = this.props;

    if (!expanded) {
      selectBird(uid);
    } else {
      selectBird(null);
    }
  }

  render() {
    const { titleStyle } = styles;
    const { uid, ring, latinName } = this.props.bird;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.onToggleSelected(uid)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              [{ring}]{latinName}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.addBirds.selectedBird === ownProps.bird.uid;
  const { birds } = state.addBirds;

  return { expanded, birds };
};

export default connect(mapStateToProps, { selectBird, birdsChanged })(DropDown);