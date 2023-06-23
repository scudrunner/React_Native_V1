import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import data from "./flights.json";

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
          <View style={styles.mylist}>
            {data && (
              <View style={styles.mylist}>
                <FlatList
                  data={data} //pass in our data array
                  keyExtractor={item => item.ID}
                  renderItem={FlightItem} //tell React to use our renderItem function that we defined earlier
                  // renderItem = {data => <FlightItemw ID (data.item.value) /> }
                />
      </View>
    )}
    
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
    height: 30,
    textAlign: "center",
    backgroundColor: "skyblue",
    
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

export default App;
