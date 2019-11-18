import React, {Component} from 'react';
import { ScrollView, StyleSheet,View,TouchableOpacity,Text,Image,AsyncStorage} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { withNavigation } from 'react-navigation';




class LinksScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      data: '',
      user_id: '',
      alldata: [
        {
          "id": "1",
          "level": "1_1",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "0",
          "bolim": "I"
        },
        {
          "id": "2",
          "level": "1_2",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "1",
          "bolim": "II"
        },
        {
          "id": "3",
          "level": "1_3",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "2",
          "bolim": "III"
        },
        {
          "id": "4",
          "level": "1_4",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "3",
          "bolim": "IV"
        },
        {
          "id": "5",
          "level": "1_5",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "4",
          "bolim": "V"
        },
        {
          "id": "6",
          "level": "2_1",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "5",
          "bolim": "I"
        },
        {
          "id": "7",
          "level": "2_2",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "6",
          "bolim": "II"
        },
        {
          "id": "8",
          "level": "2_3",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "7",
          "bolim": "III"
        },
        {
          "id": "9",
          "level": "2_4",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "8",
          "bolim": "IV"
        },
        {
          "id": "10",
          "level": "2_5",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "9",
          "bolim": "V"
        },
        {
          "id": "11",
          "level": "3_1",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "10",
          "bolim": "I"
        },
        {
          "id": "12",
          "level": "3_2",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "11",
          "bolim": "II"
        },
        {
          "id": "13",
          "level": "3_3",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "12",
          "bolim": "III"
        },
        {
          "id": "14",
          "level": "3_4",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "13",
          "bolim": "IV"
        },
        {
          "id": "15",
          "level": "3_5",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "14",
          "bolim": "V"
        },
        {
          "id": "23",
          "level": "4_1",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "15",
          "bolim": "I"
        },
        {
          "id": "24",
          "level": "4_2",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "16",
          "bolim": "II"
        },
        {
          "id": "25",
          "level": "4_3",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "17",
          "bolim": "III"
        },
        {
          "id": "26",
          "level": "4_4",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "18",
          "bolim": "IV"
        },
        {
          "id": "27",
          "level": "4_5",
          "color": "#e91e63",
          "point": "0",
          "user_id": "87074252290",
          "tour": "19",
          "bolim": "V"
        }
      ],
      objects: [],
      
    };
  }

  algorithm() {

  }
  
  componentDidMount() {
    this._isMounted = true;
    AsyncStorage.getItem('UID123', (err, result) => {
      this.setState({user_id: JSON.parse(result).user_id});
    });
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      alert("read to get");
      fetch('http://latinapi.herokuapp.com/v2/insert_data/gettestresults ', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 'U5dcaaf5235f00'
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
         this.setState({
          objects: []
      });
   
      var first = [];
      var second = [];
      var third = [];
      var fourth = [];
      console.log(responseData);
      

      for (var x = 0; x < 4; x++) {
          first.push(responseData[x].point);
      }
      for (var x = 5; x <= 9; x++) {
        second.push(responseData[x].point);
      }
      for (var x = 10; x <= 14; x++) {
        third.push(responseData[x].point);
      }
     
      for (var x = 15; x <= 19; x++) {
        fourth.push(responseData[x].point);
      }
   

      console.log(first);
      console.log(second);
        // console.log(this.state.objects);
        var filtered = this.state.objects.filter(function (el) {
          return el != null;
        });

      }).catch((error) => {
          console.error(error);

      });  
    });

  }
  
  componentWillMount() {
    this._isMounted = false;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.helpContainer}>
                <TouchableOpacity  style={styles.helpLink_1}  onPress={() => this.onPress(0,4)}>
                    <View style={styles.words}>
                      <Text style={styles.helpLinkText}>
                          I кезең
                      </Text>
                      <Text style={styles.helpLinkText}>
                          0/50
                      </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink_1} onPress={() => this.onPress(5,9)}>
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                            II кезең
                        </Text>
                        <Text style={styles.helpLinkText}>
                            0/50
                        </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink_1} onPress={() => this.onPress(10,14)}>
                    <View style={styles.words}>
                      <Text style={styles.helpLinkText}>
                          III кезең
                      </Text>
                      <Text style={styles.helpLinkText}>
                          0/50
                      </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                     
                    
                      
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink_1} onPress={() => this.onPress(15,19)}>
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                            IV кезең
                        </Text>
                        <Text style={styles.helpLinkText}>
                            0/50
                        </Text>
                    </View>
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

  onPress ($start,$end)  {
        fetch('http://latinapi.herokuapp.com/v2/insert_data/gettestresults ', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: 'U5dcaaf5235f00'
          })
        })
        .then((response) => response.json())
        .then((responseData) => {
           this.setState({
            objects: []
        });
          for (var x = $start; x <= $end; x++) {
              this.state.objects[x] = {  
                id: responseData[x].id,
                level: responseData[x].level,
                color: responseData[x].color,
                point: responseData[x].point,
                user_id:responseData[x].user_id,
                tour:responseData[x].tour,
                bolim: responseData[x].bolim
            }         
          }

          // console.log(this.state.objects);
          var filtered = this.state.objects.filter(function (el) {
            return el != null;
          });
 
          if($start == 0) {
            this.props.navigation.navigate('Level', {array: filtered,kezen: 0,start: $start,end:$end}); 
          }
          else if ($start == 5) {
            this.props.navigation.navigate('Level', {array: filtered,kezen: 1,start: $start,end:$end});
          }
          else if($start == 10) {
            this.props.navigation.navigate('Level', {array: filtered,kezen:2,start: $start,end:$end});
          }
          else if($start ==15) {
            this.props.navigation.navigate('Level', {array: filtered,kezen:3,start: $start,end:$end});
          }
        }).catch((error) => {
            console.error(error);

        });
 }
}
export default withNavigation(LinksScreen);

LinksScreen.navigationOptions = {
  title: 'Байқау сынағы',
  headerTintColor: '#8c51d9'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    width: 20,
    height: 20
  },
  helpLink_1: {
    backgroundColor: "#31bc92",
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    zIndex: 1,
    marginBottom: 10
  },
  words: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  helpLinkText: {
    fontSize: 20,
    color: 'white'
  
  }
});

