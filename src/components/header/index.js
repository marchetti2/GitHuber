import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const {navigation} = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  };

  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.right} onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

Header.propTypes;

export default withNavigation(Header);
