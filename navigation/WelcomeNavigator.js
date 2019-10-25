import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Linking,
    KeyboardAvoidingView,
    Picker,
 
} from "react-native";
import Welcome from './WelcomePage';
import { whileStatement } from "@babel/types";

export default class SignPage extends Component {

    static navigationOptions = {
        header: 'none'
    }
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            name: '',
            country: '',
            options:{
                "1": "Home",
                "2": "Food",
                "3": "Car",
                "4": "Bank",
            },
            selected: 'Облысты таңдаңыз'
        };
       
    }
   

    componentDidMount () {
        setTimeout(() => this.setState({timePassed: true}), 4000)
    }

    render() {
   
        return  this.state.timePassed ? (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <View  style={styles.secondContainer}>
                <Text style={{color: 'white',alignSelf: 'center', fontWeight: 'bold', fontSize: 25,marginBottom: 15}}>ЖҮЙЕГЕ КІРУ</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>АТЫҢЫЗ</Text>
                <TextInput
                    style={{ height: 40, width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white' }}
                    selectionColor={'#8c51d9'}
                    onChangeText={name =>this.setState({name})}
                    value={this.state.name}
                />

                <Text style={{ height: 40, color: 'white', fontWeight: 'bold'}}>ОБЛЫС</Text>
                <TextInput
                    selectionColor={'#8c51d9'}
                    style={{ width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white'}}
                    onChangeText={country =>this.setState({country})}
                    value={this.state.country}
                /> 
  

                <Text style={{color: 'white', fontSize: 8}}>Қолдануды жалғастыру үшін төмендегі сілтеме бойынша</Text>
                <Text style={{color: 'white', fontSize: 8}}>Qazaq Latyn пернетақтасын қондырыңыз</Text>
                <Text
                 style={{ color: "#5fc7f1",marginBottom: 10,alignSelf:'center', textDecorationLine: 'underline' }}
                 onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.qazaqlatinkeyboard&hl=ru')}
                >Qazaq Latyn Keyboard</Text>

                <View
                 style={styles.button}  ><Text  style={{textAlign: 'center', fontWeight: 'bold', color: "#8c51d9"}} onPress={this.handleClick} >КЕЛЕСІ</Text></View>
                
            </View>
          
                
            </View>
            </KeyboardAvoidingView>
        ):  <Welcome/> ;
    }
    
    handleClick = () => {

        if( this.state.name!='' &&  this.state.country!='') {
            fetch('http://192.168.8.100/v2/insert_data/insert', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    country: this.state.country,
                    point: ''
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
                alert("Cәтті тіркелдіңіз");
                this.props.navigation.navigate('Main');
            });
        }
        else {
            alert("Толтырыңыз");
        }
      
        
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c51d9'
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        width: 250,
        borderRadius: 20,
        backgroundColor:'white',
        color:'#8c51d9',
        alignSelf: 'center'
    },
    text: {
       fontSize: 20
    }
});