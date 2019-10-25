import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image

} from "react-native";
class TestScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
            <View style={styles.helpContainer}>
                  <TouchableOpacity  style={styles.helpLink_1}  onPress={() => this.props.navigation.navigate('Question',{index:0})} >
                      <Text style={styles.helpLinkText}>
                          I - кезең
                      </Text>
                      <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.helpLink_2} onPress={() => this.props.navigation.navigate('Question',{index: 1})}>
                      <Text style={styles.helpLinkText}>
                          II - кезең
                      </Text>
                      <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.helpLink_3} onPress={() => this.props.navigation.navigate('Question',{index: 2})}>
                      <Text style={styles.helpLinkText}>
                          III - кезең
                      </Text>
                      <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.helpLink_4} onPress={() => this.props.navigation.navigate('Question',{index: 3})}>
                      <Text style={styles.helpLinkText}>
                          IV - кезең
                      </Text>
                      <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.helpLink_5} onPress={() => this.props.navigation.navigate('Question',{index: 4})}>
                      <Text style={styles.helpLinkText}>
                          V - кезең
                      </Text>
                      <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                  </TouchableOpacity>
          </View>
        </ScrollView>
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
    ,
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
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
    welcomeImage: {
        width: 20,
        height: 20
      },
    helpLink_1: {
        paddingVertical: 15,
        backgroundColor: "#4da4ed",
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 5,
        height: 100,
        display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
      },
      helpLink_2: {
        paddingVertical: 15,
        backgroundColor: "#bb91f7",
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 5,
         height: 100,
         display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
      },
      helpLink_3: {
        paddingVertical: 15,
        backgroundColor: "#35e7b2",
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 5,
         height: 100,
         display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
      },
      helpLink_4: {
        paddingVertical: 15,
        backgroundColor: "#43d1c8",
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 5,
         height: 100,
         display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
      },
      helpLink_5: {
        paddingVertical: 15,
        backgroundColor: "#f7aa56",
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 5,
         height: 100,
         display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
      },
    helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
    },
    helpLinkText: {
    color: 'white'
    }
});