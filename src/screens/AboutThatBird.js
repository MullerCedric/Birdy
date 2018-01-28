import React, { Component } from 'react';
import { Text, ScrollView, View, Image  } from 'react-native';
import { Card, CardSection } from '../components';

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

  renderPic(url) {
    if (url.match(/^https:\/\/.+\.(jpg|jpeg|png)$/)) {
      return (
        <Image
          style={{flex:1, height: undefined, width: undefined, minHeight: 80}}
          source={{uri: url}}
          resizeMode="contain"
        />
      );
    } else {
      return (
        <Text style={styles.bodyStyle}>
          {url}
        </Text>
      );
    }
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
        <Card>
          <CardSection>
            <Text style={styles.titleStyle}>
              Nom commun : 
            </Text>
            <Text style={styles.bodyStyle}>
              {commonName}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Nom Latin : 
            </Text>
            <Text style={styles.bodyStyle}>
              {latinName}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Famille : 
            </Text>
            <Text style={styles.bodyStyle}>
              {family}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Photo : 
            </Text>
            {this.renderPic(pictures)}
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Description : 
            </Text>
            <Text style={styles.bodyStyle}>
              {description}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Taille : 
            </Text>
            <Text style={styles.bodyStyle}>
              {height}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Envergure : 
            </Text>
            <Text style={styles.bodyStyle}>
              {wingspan}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Poids : 
            </Text>
            <Text style={styles.bodyStyle}>
              {weight}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Durée de vie : 
            </Text>
            <Text style={styles.bodyStyle}>
              {lifespan}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Alimentation : 
            </Text>
            <Text style={styles.bodyStyle}>
              {food}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Lieux de nidifications : 
            </Text>
            <Text style={styles.bodyStyle}>
              {nestingPlaces}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Habitats : 
            </Text>
            <Text style={styles.bodyStyle}>
              {habitats}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Type de vol / Comportement : 
            </Text>
            <Text style={styles.bodyStyle}>
              {flightType}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Distribution : 
            </Text>
            <Text style={styles.bodyStyle}>
              {location}
            </Text>
          </CardSection>
          
          <CardSection>
            <Text style={styles.titleStyle}>
              Chant : 
            </Text>
            <Text style={styles.bodyStyle}>
              {voice}
            </Text>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: 'rgb(75,75,75)',
    flex: 1,
  },
  bodyStyle: {
    fontSize: 18,
    color: 'rgb(110,110,110)',
    flex: 1.4,
  },
};

export default AboutThatBird;