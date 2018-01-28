import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Spinner } from '../components';

class Home extends Component {
  onAdd = () => {
    this.props.navigation.navigate('AddBirds');
  };

  onSignOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('SignedOut');
  };

  renderSignOutButton() {
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

        {this.renderSignOutButton()}

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
