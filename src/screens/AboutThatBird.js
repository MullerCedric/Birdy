import React, { Component } from 'react';
import { Text, ScrollView  } from 'react-native';
import { CardSection } from '../components';

class AboutThatBird extends Component {
  
  listingBirdInfos(raw) {
  	let bird = {...raw};
  	for (let id in bird) {
      if(!bird[id]) {
        bird[id] = "Aucune information à ce sujet";
      }
    }
    return bird;
  }

  render() {
  	const {
      commonName,
      latinName,
      family,
      pictures,
      description,
      height,
      wingspan,
      weight,
      lifespan,
      food,
      nestingPlaces,
      habitats,
      flightType,
      location,
      voice
  	} = this.listingBirdInfos(this.props.navigation.state.params);
    return (
      <ScrollView>
          <CardSection>
            <Text style={styles.titleStyle}>
              Nom commun
            </Text>
            <Text style={styles.titleStyle}>
              {commonName}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Nom Latin
            </Text>
            <Text style={styles.titleStyle}>
              {latinName}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Famille
            </Text>
            <Text style={styles.titleStyle}>
              {family}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Photo(s)
            </Text>
            <Text style={styles.titleStyle}>
              {pictures}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Description
            </Text>
            <Text style={styles.titleStyle}>
              {description}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Taille
            </Text>
            <Text style={styles.titleStyle}>
              {height}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Envergure
            </Text>
            <Text style={styles.titleStyle}>
              {wingspan}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Poidsweight
            </Text>
            <Text style={styles.titleStyle}>
              {weight}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Durée de vie
            </Text>
            <Text style={styles.titleStyle}>
              {lifespan}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Alimentation
            </Text>
            <Text style={styles.titleStyle}>
              {food}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Lieux de nidifications
            </Text>
            <Text style={styles.titleStyle}>
              {nestingPlaces}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Habitats
            </Text>
            <Text style={styles.titleStyle}>
              {habitats}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Type de vol / Comportement
            </Text>
            <Text style={styles.titleStyle}>
              {flightType}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Distribution
            </Text>
            <Text style={styles.titleStyle}>
              {location}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Chant
            </Text>
            <Text style={styles.titleStyle}>
              {voice}
            </Text>
          </CardSection>

	  </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default AboutThatBird;