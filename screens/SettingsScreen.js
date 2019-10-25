import React from 'react';
import { ScrollView, StyleSheet,View,TouchableOpacity,Text } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.helpContainer}>
              <Text style={styles.helpLinkText}>
                  Тіркелген адам саны
              </Text>
              <Text style={styles.helpLinkText}>
                  20 
              </Text>
      </View>
      {/* <ExpoLinksView /> */}
    </ScrollView>
    
  );

}


SettingsScreen.navigationOptions = {
  title: 'Статистика',
  headerTintColor: '#8c51d9',
};

const styles = StyleSheet.create({
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

