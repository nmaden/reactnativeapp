import React, { Component } from "react";
import {KeyboardAvoidingView} from 'react-native'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image
} from "react-native";
import { whileStatement } from "@babel/types";

class Welcome extends Component {

    static navigationOptions = {
        header: 'none'
    }

    render() {
        return (
            
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                {/* <Image
                    source={
                    __DEV__
                        ? require('../assets/images/tilder.jpg')
                        : require('../assets/images/tilder.jpg')
                    }
                    style={styles.welcomeImage}
                /> */}
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27, }}>AQYLDY</Text>
                <Text  style={{color: 'white', fontWeight: 'bold',fontSize: 27, marginBottom: 30}}>ÁLIPBI</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Ақтөбе облысының {'\n'} тілдерді дамыту басқармасы
                    </Text>
                    <Text style={styles.text}>ММ</Text>
                    <Text style={styles.text}>Тілдерді оқыту орталығы {'\n'} КММ тапсырысы бойынша</Text>
                </View>
            </View>
            </KeyboardAvoidingView>
        );
    }
}
export default Welcome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c51d9'
    },
    text: {
       textAlign: 'center',
       fontSize: 10,
       fontWeight: 'bold',
       color: "white",
       marginBottom: 5
    },
    textContainer: {
        
    }
});