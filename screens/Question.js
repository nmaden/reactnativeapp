import React, {Component} from 'react';
import {TextInput, ScrollView, StyleSheet,View,TouchableOpacity,Text,Button,Image,FlatList,ActivityIndicator} from 'react-native';
import axios from 'axios';

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputs: [],
      isLoading:true,
      dataSource: '',
      borderColor: ''
    };
  }

  changeColor(color){
    this.setState({borderColor: color});
  }

  componentDidMount(){
    
    return fetch('http://192.168.8.100/v2/insert_data/getlatinwords')
      .then((response) => response.json())
      
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson["word_"+this.props.navigation.getParam('index')],
        }, function(){  
          
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-around'
    }}>
          <View style={styles.helpContainer}>

              <FlatList
                  data={this.state.dataSource}
                  renderItem={({item,index}) => 
                  <View>
                      <TextInput
                          style={styles.textInput}
                          value={item.kazakh}
                      />
                      <View   style={styles.view}>
                          <TextInput
                           selectTextOnFocus={true}
                            style={styles.textInput}
                            onChangeText={
                              
                              text => {
                                let { textInputs } = this.state;
                                textInputs[index] = text;
                                this.setState({
                                  textInputs
                                });
                              }
                            
                            }
                            value={this.state.textInputs[index]}
                          />
                          {/* <View
                              style={styles.button}
                              title=' '
                          >
                          <Image
                            source={
                              __DEV__
                                ? require('../assets/images/check_mark.png')
                                : require('../assets/images/check_mark.png')
                            }
                            style={styles.checkImage}
                          />
                          </View> */}
                      </View>
                  </View>

                }
                  keyExtractor={({id}, index) => id}
              />
             
                
                <View style={{ padding: 20,borderRadius: 10,backgroundColor: '#8c51d9', width: 260,paddingBottom: 20}} 
                    onPress={this.handleClick}  
                    
                ><Text style={{textAlign: 'center', color: 'white',fontWeight:'bold'}}>КЕЛЕСІ</Text></View>
        </View>
        {/* <ExpoLinksView /> */}
      </ScrollView>
    );
  }
  handleClick = () => {

    console.log(this.state.dataSource);
    console.log(this.state.textInputs);
    

  
    this.changeColor("red");

    if(this.state.textInputs.length!=10){
      alert("Толтырыңыз");
    }
    else {   
      const keys = Object.values(this.state.dataSource)
      var j = 0;
      var counter = 0;
      for (const key of keys) {
          if(key.latin==this.state.textInputs[j]) {
                counter++;
                
          }
          else {
            alert(key.latin);
          }
          j++;
      }
   
    }
}

}

LinksScreen.navigationOptions = {
  title: 'Байқау сынағы',
  headerTintColor: '#8c51d9'
};


const styles = StyleSheet.create({
  checkImage: {
    width: 10,
    height: 10
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,  //The Width must be the same as the height
    borderRadius: 80,
    backgroundColor: '#24c731'
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },  
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20
    // backgroundColor: '#8c51d9'
  },
  textInput: {
    width: 280,
    padding: 20,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#8c51d9',
    borderWidth: 2
    
  },
  helpLink: {
    paddingVertical: 15,
    backgroundColor: "#8252c1",
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
    margin: 5
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom: 20
  },
  helpLinkText: {
    color: 'white'
  }

});

