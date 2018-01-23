import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Spinner } from '../components';

class Home extends Component {
  onAdd = () => {
    this.props.navigation.navigate('AddBirds');
  };

  onLists = () => {
    this.props.navigation.navigate('MyLists');
  };

  onSignOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('SignedOut');
  };

  renderSignInButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onSignOut.bind(this)}
        title="Se déconnecter"
      />
    );
  }

  render() {
    return (
      <View>
        <Text>
          PAGE HOME - Tu es connecté
        </Text>
        <Button
          onPress={() => this.onAdd()}
          title="Nouvelle session de bagages"
        />
        <Button
          onPress={() => this.onLists()}
          title="Mes captures"
        />

        {this.renderSignInButton()}

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

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;

  return { error, loading };
};

export default connect(mapStateToProps, { logoutUser })(Home);
