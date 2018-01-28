import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { authChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../components';

class SignIn extends Component {
  onSignIn() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderSignInButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onSignIn.bind(this)}>
        Se connecter
      </Button>
    );
  }

  onRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              value={this.props.email}
              onChangeText={value => this.props.authChanged({ prop: 'email', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.props.password}
              onChangeText={value => this.props.authChanged({ prop: 'password', value })}
            />
          </CardSection>

          <CardSection>
            {this.renderSignInButton()}
          </CardSection>
        </Card>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <Card>
          <CardSection>
          <Button onPress={() => this.onRegister()}>
            S'inscrire
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  authChanged, loginUser
})(SignIn);
