import React, {Component} from 'react';
import { ScrollView, StyleSheet,View,TouchableOpacity,Text,Image } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.helpContainer}>
                <TouchableOpacity  style={styles.helpLink_1}  onPress={() => this.props.navigation.navigate('Level')} >
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
                <TouchableOpacity  style={styles.helpLink_2} onPress={() => this.props.navigation.navigate('Level')}>
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
                <TouchableOpacity  style={styles.helpLink_3} onPress={() => this.props.navigation.navigate('Level')}>
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
                <TouchableOpacity  style={styles.helpLink_4} onPress={() => this.props.navigation.navigate('Level')}>
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
        </View>
        {/* <ExpoLinksView /> */}
      </ScrollView>
    );
  }
 

}

LinksScreen.navigationOptions = {
  title: 'Байқау сынағы',
  headerTintColor: '#8c51d9'
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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
    justifyContent: "space-between",
    zIndex: 1
  },
  welcomeImage: {
    width: 20,
    height: 20
  },
  helpLink_2: {
    paddingVertical: 15,
    backgroundColor:  "#bb91f7",
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    margin: 5,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    zIndex: 1
  },
  helpLink_3: {
    paddingVertical: 15,
    backgroundColor:  "#35e7b2",
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    margin: 5,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    zIndex: 1
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
    justifyContent: "space-between",
    zIndex: 1
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  helpLinkText: {
    fontSize: 20,
    color: 'white'
  
  }
});

