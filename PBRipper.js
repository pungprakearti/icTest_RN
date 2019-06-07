import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};
export default class PBRipper extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.warn('click');
  }

  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.consoleCont}>
          <Text style={{ color: 'white', fontSize: 150 }}>hi</Text>
        </View>
        <View style={styles.buttonsCont}>
          
          <Button
            title="GET SWOLL"
            borderRadius="5"
            onPress={this.handleClick}
            color="green"
          />
          <Button
            title="EAT A CHEESEBURGER"
            borderRadius="5"
            onPress={this.handleClick}
          />
          <Button
            title="RIP A PHONEBOOK IN HALF"
            borderRadius="5"
            onPress={this.handleClick}
            color="purple"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(15,15,15)',
    width: '100%',
    padding: 20
  },
  consoleCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(50,50,50)',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'rgb(100,100,100)',
    width: '100%',
    margin: 15
  },
  buttonsCont: {
    flex: 1,
    flexDirection: 'column',

    // alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 5,
    // borderColor: 'red',
    width: '80%'
  }
});
