import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from "react-native";

class TestScreen extends Component {

    static navigationOptions = {
        header: 'none'
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text  style={{ fontSize: 20,marginBottom: 10}} >Байқау сынағы</Text>

                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                   value="Сәлем"
                />
                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                   value=""
                />
                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value="Сәлемдесу"
                />
                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value=""
                />
                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value="Қалайсыз"
                />
                <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value=""
                />
                  <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value="Жақсы"
                />
                  <TextInput
                    style={{ height: 40, width: 250,marginBottom: 10, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    value=""
                />

                <Button title="Келесі" onPress={() => this.props.navigation.navigate('')}
                 style={styles.button}
                />
            </View>
        );
    }
}
export default TestScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
       width: "250",
       borderRadius: 3 
    }
});