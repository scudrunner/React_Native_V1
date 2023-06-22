import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";


const Link = (props) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, props.style)}
  />
);

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          
          <Text style={styles.title}>Changing code here </Text>
          <Text style={styles.subtitle}>by: Francis Rodrigues</Text>
        </View>
        <View style={styles.mainText}>
          <Text style={styles.text}>Learn how to create a Mobile app with</Text>
          
        </View>
        <Text style={[styles.text, styles.paragraph]}>
          To get started, edit{" "}
          <Link href="https://codesandbox.io/s/z6x9w4x48p/" style={styles.code}>
            src/App.js
          </Link>
          .
        </Text>
        <Button
          onPress={() => {
            window.open("https://medium.com/p/310034a3729");
          }}
          title="Hands-on tutorial"
          style={{ paddingLeft: 15, paddingRight: 15 }}
        />
      </View>
    );
  }
}

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
     textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    padding: 2,
    margin: 2,
  },
  
  flightcard:{
    height : 70,
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
  
  picsaver: {
    height:50,
    width: 50,
    backgroundcolor: "purple",
  },
  
  data: {
    height:25,
    width:70,
  },
  
  
});

export default App;
