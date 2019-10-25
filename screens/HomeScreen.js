import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { Audio } from 'expo';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';


var SoundPlayer = require('react-native-sound');
var qrcode = require('qrcode-terminal');
qrcode.generate('This will be a small QRCode, eh!', {small: true});
var song = null;
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pause: false,
    };
  }
  onPressButtonPlay() {
    song = new SoundPlayer('a.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
  }
  onPressButtonPause() {
    if(song != null) {
      if(this.state.pause) // play resume
        song.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      else song.pause();

      this.setState({pause: !this.state.pause});
    }
  }
  render() {
        return (
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
                     <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
          <Text style={styles.buttonText}>{this.state.pause ? 'Resume' : 'Pause'}</Text>
        </TouchableOpacity>
              <View style={styles.welcomeContainer}>
                <Image
                  source={
                    __DEV__
                      ? require('../assets/images/microphone.png')
                      : require('../assets/images/microphone.png')
                  }
                  style={styles.welcomeImage}
                />
              </View>
              
              <View style={styles.helpContainer}>
                <TouchableOpacity   style={styles.helpLink}>
                  <Text style={styles.helpLinkText} >
                    A a
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    A'a'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    B b
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    D d
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    E e
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    F f
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    G g
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    G' g'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    H h
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    I i
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    K k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    L l
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    M m
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    N n
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    N' n'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    O o
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    O' o'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    P p
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    Q q
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    R r
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    S s
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    S' s'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    C' c'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    T t
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    U u
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    U' u'
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    V v
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    Y y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    Y' y' 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    Z z
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* <View style={styles.tabBarInfoContainer}>
              <Text style={styles.tabBarInfoText}>
                This is a tab bar. You can edit it in:
              </Text>

              <View
                style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                <MonoText style={styles.codeHighlightText}>
                  navigation/MainTabNavigator.js
                </MonoText>
              </View>
            </View> */}
          </View>
        );
    }
}


HomeScreen.navigationOptions = {
  title: "Әріп дыбысталуы",
  headerTintColor: '#8c51d9'
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },

  helpLink: {
    paddingVertical: 15,
    backgroundColor: "#8c51d9",
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
    margin: 5, 
    width: 70,
  },
  helpLinkText: {
    fontSize: 14,
    color: 'white'
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center'
  }

});
