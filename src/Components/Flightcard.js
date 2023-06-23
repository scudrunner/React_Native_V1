import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";


const FlightItem = ({ item }) => {
  //the app will represent each list item via a Text component
  return (
  <View style = {styles.flightcard} >
      <View style = {styles.test} >
          <View style={[styles.picsaver, {backgroundColor: '#e0ffff'}]} />
          <View style ={styles.flightitem}> 
          <Text style ={styles.flightText} > {item.ID}
              </Text>      
          </View>             
        
          <View style ={styles.flightitem}> 
          <Text style ={styles.flightText}  > {item.Days}
          </Text> 
          </View>
          <View>
          {item.legs.map((item)=>(
              <Text >
                {item.flight} {'  '}
                {item.From} {'  '}
                {item.To}
              </Text>
              ))}
          </View>
    </View>  
 </View>      
)
}


export default FlightItem

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  subtitle: {
    textAlign: "right"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    textAlign: "center"
  },
  paragraph: {
    marginVertical: "1em"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  mylist: {
    height: 200,
    textAlign: "center",
    fontFamily: "monospace, monospace"
  },
  flightitem: {
    width: 50,
    height: 30,
    textAlign: "center",
    backgroundColor: "red",
    
    padding: 2,
    margin: 2,
  },
  flightText: {
    color: "white",  
  },
  
  flightcard:{
    
    width: 500,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation:18,
    backgroundColor: 'white',
    padding: 20, 
    borderRadius: 10,
  },
  test : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  }, 
  
  picsaver: {
    height:50,
    width: 50,
  },
  
  data: {
    height:25,
    width:70,
  },
  
  
});

