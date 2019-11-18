import React, {Component} from 'react';
import {TextInput, ScrollView, StyleSheet,View,TouchableOpacity,Text,Button,Image,FlatList,ActivityIndicator,Alert,Modal,AsyncStorage} from 'react-native';

export default class LinksScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      textInputs: [],
      isLoading:true,
      dataSource: '',
      borderColor: '', 
      modalVisible: 'none',
      show: 'none',
      position: '',
      top: '0',
      data: '',
      timePassed: false,
      user_id: '',
      objects: []
    };
    
  }
  setModalVisible(visible,pos) {
    this.setState({modalVisible: visible});
    this.setState({top: pos});
  }
  changeColor(color){
    this.setState({borderColor: color});
  }


  componentDidMount() {
    this._isMounted = true;
    AsyncStorage.getItem('UID123', (err, result) => {
      this.setState({user_id: JSON.parse(result).user_id});
    });
  }
  componentWillMount() {
    this._isMounted = false;
  }
  render() {
    let that = this;
    setTimeout(function(){that.setState({timePassed: true})}, 1000);
    if(!this.state.timePassed){
         return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
    }
    else {
      return (
          <ScrollView contentContainerStyle={{
              flexGrow: 4,
              justifyContent: 'space-around'
          }}>
        
            <View style={styles.helpContainer}>
                <FlatList
                    ref={this.emailRef}
                    data={this.props.navigation.getParam('data')}
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
                        </View>
                    </View>
  
                  }
                    keyExtractor={({id}, index) => id}
                />
                  <TouchableOpacity onPress={this.handleClick} style={{ padding: 10,borderRadius: 20,backgroundColor: '#8c51d9', width: 300,paddingBottom: 20}} 
                  ><Text   style={{textAlign: 'center', color: 'white',fontWeight:'bold',textAlignVertical: 'center' }}>КЕЛЕСІ</Text></TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  
  }
  handleClick = () => {
    function print(array) {
      for (let index = 0; index < array.length; index++) {
            return array[index]+ ' \n ';
      }
    }
    if(this.state.textInputs.length!=10){
      Alert.alert(
        'Толық толтырыңыз'
      )
    }
    else {   
      const keys = Object.values(this.props.navigation.getParam('data'))
      var j = 0;
      var trueanswer = 0;
      var wronganswer = 0;
      var wrongwords = "";
      var wrongwordslatin = "";

      for (const key of keys) {
          if(key.latin.toLowerCase().replace(/\s/g, '')==this.state.textInputs[j].toLowerCase().replace(/\s/g, '')) {
            trueanswer++; 
          }
          else {
            wronganswer++;
            wrongwords = wrongwords+"\n"+key.kazakh+", ";
            wrongwordslatin = wrongwordslatin+"\n"+key.kazakh+", ";
          }
          j++;
      }

      if(trueanswer<=5) {
        Alert.alert(
          ' Дұрыс жауап саны  '+trueanswer+"\n"+' Дұрыс емес жауап саны  '+wronganswer+"\n "+'Қате жазылған сөздер тізімі:',
          ''+wrongwords,
          
          [
          {text: 'Қайтадан сынау', onPress: () => this.reload(this.props.navigation.getParam('index')) },
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            // {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: true }
        )
      }
      else {
        Alert.alert(
          ' Дұрыс жауап саны  '+trueanswer+"\n"+' Дұрыс емес жауап саны  '+wronganswer+"\n "+'Қате жазылған сөздер тізімі:',
          ''+wrongwordslatin,
          [
          {text: 'Келесі кезен', onPress: () =>this.props.navigation.navigate('Level',{color:'#31bc92'}), style: 'cancel'},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            // {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: true }
        )
        
        fetch('http://latinapi.herokuapp.com/v2/insert_data/pushtestresult', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              point: trueanswer,
              user_id: this.state.user_id,
              level: this.props.navigation.getParam('level'),
              color: '#54d28b'
            })
        })
        .then((response) => response.json())
        .then((responseData) => {

          fetch('http://latinapi.herokuapp.com/v2/insert_data/gettestresults ', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: this.state.user_id
            })
          })
          .then((response) => response.json())
          .then((responseData) => {
                this.setState({
                  objects: []
                });
                for (var x = this.props.navigation.getParam('start'); x <= this.props.navigation.getParam('end'); x++) {
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
                
                var filtered = this.state.objects.filter(function (el) {
                  return el != null;
                });

                if(this.props.navigation.getParam('start') == 0) {
                  this.props.navigation.navigate('Level', {array: filtered,kezen: 0}); 
                }
                else if (this.props.navigation.getParam('start') == 5) {
                  this.props.navigation.navigate('Level', {array: filtered,kezen: 1});
                }
                else if(this.props.navigation.getParam('start') == 10) {
                  this.props.navigation.navigate('Level', {array: filtered,kezen:2});
                }
                else if(this.props.navigation.getParam('start') ==15) {
                  this.props.navigation.navigate('Level', {array: filtered,kezen:3});
                }
          }).catch((error) => {
              console.error(error);
          });


        }).catch((error) => {
            console.error(error);
  
        });
   
    
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
    borderRadius: 120,
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
    width: 300,
    padding: 10,
    marginBottom: 5,
    borderRadius: 20,
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
    paddingBottom: 20,
    paddingTop: 20,

  },
  helpLinkText: {
    color: 'white'
  }

});

