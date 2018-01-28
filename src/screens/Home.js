import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Card, CardSection, Spinner, Button } from '../components';

class Home extends Component {

  onSignOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('SignedOut');
  };

  renderSignOutButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onSignOut.bind(this)}>
        Se déconnecter
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Button onPress={() => this.props.navigation.navigate('listForm')} size="big">
              Nouvelle session de bagages{"\n"}
              (Liste de capture)
            </Button>
          </CardSection>

          <CardSection>
            {this.renderSignOutButton()}
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
  },
};

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;

  return { error, loading };
};

export default connect(mapStateToProps, { logoutUser })(Home);
