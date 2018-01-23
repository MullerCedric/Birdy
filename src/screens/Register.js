/*
	M. Parmentier : 
	pour que vous puissiez tester une inscription valide,
	il vous faut un isn valide qui existe dans ma base de donnée firebase
	/!\ Une fois utilisé, l'isn est supprimé de la BDD donc vous devrez utiliser un autre
	{
		"AI84BP": "AI84BP",
		"PQ41LC": "PQ41LC",
		"MB11XO": "MB11XO",
		"QI78AO": "QI78AO",
		"FA57SQ": "FA57SQ",
		"GN63RE": "GN63RE",
		"RP15KL": "RP15KL",
		"BJ49FO": "BJ49FO",
		"JS72DZ": "JS72DZ",
		"OI20WS": "OI20WS"
	}
*/
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import {
  newEmailChanged,
  newPasswordChanged,
  firstChanged,
  lastChanged,
  isnChanged,
  registerUser
} from '../actions';
import { Card, CardSection, Input, Spinner } from '../components';

class Register extends Component {
  onEmailChange(text) {
    this.props.newEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.newPasswordChanged(text);
  }

  onFirstChange(text) {
    this.props.firstChanged(text);
  }

  onLastChange(text) {
    this.props.lastChanged(text);
  }

  onIsnChange(text) {
    this.props.isnChanged(text);
  }

  onRegister() {
    const {
	  email,
	  password,
	  firstName,
	  lastName,
	  isnNumber
	} = this.props;

    this.props.registerUser({
	  email,
	  password,
	  firstName,
	  lastName,
	  isnNumber
	});
  }

  renderRegisterButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
      	onPress={this.onRegister.bind(this)}
      	title="S'inscrire"
      />
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Mot de passe"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Prénom"
              placeholder="John"
              onChangeText={this.onFirstChange.bind(this)}
              value={this.props.firstName}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Nom"
              placeholder="Doe"
              onChangeText={this.onLastChange.bind(this)}
              value={this.props.lastName}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Numéro ISN"
              placeholder="VX01YZ"
              onChangeText={this.onIsnChange.bind(this)}
              value={this.props.isnNumber}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderRegisterButton()}
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

const mapStateToProps = ({ register }) => {
  const {
  	email,
  	password,
  	firstName,
  	lastName,
  	isnNumber,
  	error,
  	loading
  } = register;

  return {
  	email,
  	password,
  	firstName,
  	lastName,
  	isnNumber,
  	error,
  	loading
  };
};

export default connect(mapStateToProps, {
  newEmailChanged,
  newPasswordChanged,
  firstChanged,
  lastChanged,
  isnChanged,
  registerUser
})(Register);
