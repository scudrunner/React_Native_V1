import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';


export default class FlightItemw extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <View>
      <Text style={styles.flightitem}> {this.Props.ID}
      </Text> 
      </View> 
      </TouchableOpacity>
    );
  }
}

CustomText.propTypes = { title: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired };


const styles = StyleSheet.create({
  flightitem: {
    textAlign: "center",
    backgroundColor: "red",
    color: "white",
    padding: 2,
    margin: 2,
  },
});