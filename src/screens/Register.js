import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { registerChanged, registerUser } from '../actions';
import { Card, CardSection, Input, Spinner, Button } from '../components';

class Register extends Component {

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
      <Button onPress={this.onRegister.bind(this)}>
      	S'inscrire
      </Button>
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
              value={this.props.email}
              onChangeText={value => this.props.registerChanged({ prop: 'email', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Mot de passe"
              placeholder="password"
              value={this.props.password}
              onChangeText={value => this.props.registerChanged({ prop: 'password', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Prénom"
              placeholder="John"
              value={this.props.firstName}
              onChangeText={value => this.props.registerChanged({ prop: 'firstName', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Nom"
              placeholder="Doe"
              value={this.props.lastName}
              onChangeText={value => this.props.registerChanged({ prop: 'lastName', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Numéro ISN"
              placeholder="VX01YZ"
              value={this.props.isnNumber}
              onChangeText={value => this.props.registerChanged({ prop: 'isnNumber', value })}
            />
          </CardSection>

          <CardSection>
            {this.renderRegisterButton()}
          </CardSection>
        </Card>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
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

export default connect(mapStateToProps, { registerChanged, registerUser })(Register);
