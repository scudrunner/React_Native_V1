import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';


const FlightItemw = props => {
  return (
      <TouchableOpacity onPress={this.props.onPress}>
      <View>
      <Text style={styles.flightitem}> {props.ID}
      </Text> 
      </View> 
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  flightitem: {
    textAlign: "center",
    backgroundColor: "red",
    color: "white",
    padding: 2,
    margin: 2,
  },
});

export default FlightItemw;