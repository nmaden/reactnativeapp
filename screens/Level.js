import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,FlatList,AsyncStorage

} from "react-native";
import { NavigationEvents } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class TestScreen extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      data: {
      "word_0_0":[{"id":"1","kazakh":"Жасөспірім ","latin":"Jasóspіrіm"},{"id":"2","kazakh":"Сәлем","latin":"Sálem"},{"id":"3","kazakh":"Рақмет ","latin":"Raqmet"},{"id":"4","kazakh":"Жаңалық ","latin":"Jańalyq"},{"id":"5","kazakh":"Әрине ","latin":"Árıne"},{"id":"6","kazakh":"Кешіріңіз ","latin":"Keshіrіńіz"},{"id":"7","kazakh":"Әріптес ","latin":"Árіptes"},{"id":"8","kazakh":"Ұлты ","latin":"Ulty"},{"id":"9","kazakh":"Әже ","latin":"Áje"},{"id":"10","kazakh":"Әке ","latin":"Áke"}],"word_0_1":[{"id":"11","kazakh":"Аға ","latin":"Aǵa"},{"id":"12","kazakh":"Іні ","latin":"İni"},{"id":"13","kazakh":"Күйеу ","latin":"Kúıeý"},{"id":"14","kazakh":"Әйел ","latin":"Áıel"},{"id":"15","kazakh":"Құрбы ","latin":"Qurby"},{"id":"16","kazakh":"Құрдас","latin":"Qurdas"},{"id":"17","kazakh":"Көрші","latin":"Kórshі"},{"id":"18","kazakh":"Үйлену","latin":"Úılený"},{"id":"19","kazakh":"Жүз","latin":"Júz"},{"id":"20","kazakh":"Мың","latin":"Myń"}],"word_0_2":[{"id":"21","kazakh":"Қала","latin":"Qala"},{"id":"22","kazakh":"Ықшамаудан","latin":"Yqshamaýdan"},{"id":"23","kazakh":"Көше","latin":"Kóshe"},{"id":"24","kazakh":"Ақтөбе","latin":"Aqtóbe"},{"id":"25","kazakh":"Саябақ","latin":"Saıabaq"},{"id":"26","kazakh":"Дәріхана","latin":"Dárіhana"},{"id":"27","kazakh":"Балабақша ","latin":"Balabaqsha"},{"id":"28","kazakh":"Басшы","latin":"Basshy"},{"id":"29","kazakh":"Өмірбаян ","latin":"Ómіrbaıan"},{"id":"30","kazakh":"Түйіндеме ","latin":"Túıіndeme"}],"word_0_3":[{"id":"31","kazakh":"Кәсіпкер ","latin":"Kásіpker"},{"id":"32","kazakh":"Ірімшік","latin":"İrіmshіk"},{"id":"33","kazakh":"Қуырдақ","latin":"Qýyrdaq "},{"id":"34","kazakh":"Тәтті ","latin":"Táttі"},{"id":"35","kazakh":"Балмұздақ ","latin":"Balmuzdaq"},{"id":"36","kazakh":"Оңтүстік ","latin":"Ońtústіk"},{"id":"37","kazakh":"Солтүстік ","latin":"Soltústіk"},{"id":"38","kazakh":"Шығыс","latin":"Shyǵys"},{"id":"39","kazakh":"Бүркіт ","latin":"Búrkіt"},{"id":"40","kazakh":"Қыс","latin":"Qys"}],"word_0_4":[{"id":"41","kazakh":"Қаңтар ","latin":"Qańtar"},{"id":"42","kazakh":"Ақпан","latin":"Aqpan"},{"id":"43","kazakh":"Сәуір ","latin":"Sáýіr"},{"id":"44","kazakh":"Желтоқсан","latin":"Jeltoqsan"},{"id":"45","kazakh":"Тәулік","latin":"Táýlіk"},{"id":"46","kazakh":"Жаңбыр ","latin":"Jańbyr"},{"id":"47","kazakh":"Саяхат ","latin":"Saıahat"},{"id":"48","kazakh":"Ғаламтор ","latin":"Ǵalamtor"},{"id":"49","kazakh":"Әуежай ","latin":"Áýejaı"},{"id":"50","kazakh":"Төлқұжат ","latin":"Tólqujat"}],"word_1_5":[{"id":"51","kazakh":"Отбасы ","latin":"Otbasy"},{"id":"52","kazakh":"Ағайынды ","latin":"Aǵaıyndy"},{"id":"53","kazakh":"Келін","latin":"Kelіn"},{"id":"54","kazakh":"Нағашы","latin":"Naǵashy"},{"id":"55","kazakh":"Жеңге","latin":"Jeńge"},{"id":"56","kazakh":"Жасөспірім ","latin":"Jasóspіrіm"},{"id":"57","kazakh":"Еңбекқор","latin":"Eńbekqor"},{"id":"58","kazakh":"Қанша?","latin":"Qansha?"},{"id":"59","kazakh":"Нешінші?","latin":"Neshіnshі?"},{"id":"60","kazakh":"Нөмір","latin":"Nómіr"}],"word_1_6":[{"id":"61","kazakh":"Әуесқойлық","latin":"Áýesqoılyq"},{"id":"62","kazakh":"Серуендеу","latin":"Serýendeý"},{"id":"63","kazakh":"Жағажай","latin":"Jaǵajaı"},{"id":"64","kazakh":"Шипажай","latin":"Shıpajaı"},{"id":"65","kazakh":"Шілдехана","latin":"Shіldehana"},{"id":"66","kazakh":"Құттықтау","latin":"Quttyqtaý"},{"id":"67","kazakh":"Салт-дәстүр","latin":"Salt-dástúr"},{"id":"68","kazakh":"Мұрын","latin":"Muryn"},{"id":"69","kazakh":"Әдемі","latin":"Ádemі"},{"id":"70","kazakh":"Сұлу","latin":"Sulý"}],"word_1_7":[{"id":"71","kazakh":"Үй","latin":"Úı"},{"id":"72","kazakh":"Баспалдақ","latin":"Baspaldaq"},{"id":"73","kazakh":"Шаңсорғыш","latin":"Shańsorǵysh"},{"id":"74","kazakh":"Тоңазытқыш","latin":"Tońazytqysh"},{"id":"75","kazakh":"Түсқағаз","latin":"Túsqaǵaz"},{"id":"76","kazakh":"Үкімет","latin":"Úkіmet"},{"id":"77","kazakh":"Рәміз","latin":"Rámіz"},{"id":"78","kazakh":"Елтаңба","latin":"Eltańba"},{"id":"79","kazakh":"Халық","latin":"Halyq"},{"id":"80","kazakh":"Азаматтық","latin":"Azamattyq"}],"word_1_8":[{"id":"81","kazakh":"Шекара","latin":"Shekara"},{"id":"82","kazakh":"Елшілік","latin":"Elshіlіk"},{"id":"83","kazakh":"Жауынгер","latin":"Jaýynger"},{"id":"84","kazakh":"Дүкен","latin":"Dúken"},{"id":"85","kazakh":"Азық-түлік","latin":"Azyq-túlіk"},{"id":"86","kazakh":"Ас мәзірі","latin":"As mázіrі"},{"id":"87","kazakh":"Сатылым","latin":"Satylym"},{"id":"88","kazakh":"Жеңілдік","latin":"Jeńіldіk"},{"id":"89","kazakh":"Жанкүйер","latin":"Jankúıer"},{"id":"90","kazakh":"Демеуші","latin":"Demeýshі"}],"word_1_9":[{"id":"91","kazakh":"Жиналыс","latin":"Jınalys"},{"id":"92","kazakh":"Күнтізбе","latin":"Kúntіzbe"},{"id":"93","kazakh":"Ғарышкер","latin":"Ǵaryshker"},{"id":"94","kazakh":"Даяшы","latin":"Daıashy"},{"id":"95","kazakh":"Негіздеме","latin":"Negіzdeme"},{"id":"96","kazakh":"Көзқарас","latin":"Kózqaras"},{"id":"97","kazakh":"Келісімшарт","latin":"Kelіsіmshart"},{"id":"98","kazakh":"Сыйақы","latin":"Syıaqy"},{"id":"99","kazakh":"Іссапар","latin":"İssapar"},{"id":"100","kazakh":"Басқарма","latin":"Basqarma"}],"word_2_10":[{"id":"101","kazakh":"Қалыңыз қалай?","latin":"Qalyńyz qalaı?"},{"id":"102","kazakh":"Жаман емес, жақсы","latin":"- Jaman emes, jaqsy"},{"id":"103","kazakh":"Бәрі ойдағыдай","latin":"Bárі oıdaǵydaı"},{"id":"104","kazakh":"Не жаңалық?","latin":"Ne jańalyq?"},{"id":"105","kazakh":"Кездескеніміз қандай жақсы болды!","latin":"Kezdeskenіmіz qandaı jaqsy\r\nboldy!"},{"id":"106","kazakh":"Танысуға рұқсат етіңізші","latin":"Tanysýǵa ruqsat etіńіzshі"},{"id":"107","kazakh":"Алғысымды білдіремін","latin":"Alǵysymdy bіldіremіn"},{"id":"108","kazakh":"Мен сізге өте ризамын","latin":"Men sіzge óte rızamyn"},{"id":"109","kazakh":"Кешірім өтінемін","latin":"Keshіrіm ótіnemіn"},{"id":"110","kazakh":"Маған газет беріңізші","latin":"Maǵan gazet berіńіzshі"}],"word_2_11":[{"id":"111","kazakh":"Кіруге рұқсат етіңізші","latin":"Kіrýge ruqsat etіńіzshі"},{"id":"112","kazakh":"Әрине, рұқсат","latin":"Árıne, ruqsat"},{"id":"113","kazakh":"Кешіріңіз, уақытым болмай тұр","latin":"Keshіrіńіz, ýaqytym bolmaı tur"},{"id":"114","kazakh":"Сау болыңыз!","latin":"Saý bolyńyz!"},{"id":"115","kazakh":"Кездескенше!","latin":"Kezdeskenshe!"},{"id":"116","kazakh":"Бәрі сәтті болсын!","latin":"Bárі sáttі bolsyn!"},{"id":"117","kazakh":"Жолыңыз болсын!","latin":"Jolyńyz bolsyn!"},{"id":"118","kazakh":"Біз әлі кездесеміз!","latin":"Bіz álі kezdesemіz!"},{"id":"119","kazakh":"Ұмытпаңыздар!","latin":"Umytpańyzdar!"},{"id":"120","kazakh":"Шын жүректен","latin":"Shyn júrekten"}],"word_2_12":[{"id":"121","kazakh":"Отау иесі","latin":"Otaý ıesі"},{"id":"122","kazakh":"Жасөспірім ","latin":"Jasóspіrіm"},{"id":"123","kazakh":"Баспасөз","latin":"Baspasóz"},{"id":"124","kazakh":"Өнер жұлдыздары","latin":"Óner juldyzdary"},{"id":"125","kazakh":"Тікелей эфир","latin":"Tіkeleı efır"},{"id":"126","kazakh":"Мақала","latin":"Maqala"},{"id":"127","kazakh":"Тележүргізуші","latin":"Telejúrgіzýshі"},{"id":"128","kazakh":"Баспа үйі","latin":"Baspa úıі"},{"id":"129","kazakh":"Бөлім бастығы","latin":"Bólіm bastyǵy"},{"id":"130","kazakh":"Мерзімді баспасөз","latin":"Merzіmdі baspasóz"}],"word_2_13":[{"id":"131","kazakh":"Меншікті тілші","latin":"Menshіktі tіlshі"},{"id":"132","kazakh":"Кітап баспадан шықты","latin":"Kіtap baspadan shyqty"},{"id":"133","kazakh":"Мәдени ескерткіш","latin":"Mádenı eskertkіsh"},{"id":"134","kazakh":"Сауда үйі","latin":"Saýda úıі"},{"id":"135","kazakh":"Ойын-сауық орталығы","latin":"Oıyn-saýyq ortalyǵy"},{"id":"136","kazakh":"Анықтама бюросы","latin":"Anyqtama búrosy"},{"id":"137","kazakh":"Сұлулық салоны","latin":"Sulýlyq salony"},{"id":"138","kazakh":"Жауын-шашын","latin":"Jaýyn-shashyn"},{"id":"139","kazakh":"Өмірге құштар","latin":"Ómіrge qushtar"},{"id":"140","kazakh":"Білікті маман","latin":"Bіlіktі maman"}],"word_2_14":[{"id":"141","kazakh":"Тіл үйренуші","latin":"Tіl úırenýshі"},{"id":"142","kazakh":"Ғимараттар құрылысы","latin":"Ǵımarattar qurylysy"},{"id":"143","kazakh":"Сүт өнімдері","latin":"Sút ónіmderі"},{"id":"144","kazakh":"Қазақ жазуы","latin":"Qazaq jazýy"},{"id":"145","kazakh":"Жаңашыл педагог","latin":"Jańashyl pedagog"},{"id":"146","kazakh":"Жарқын болашақ","latin":"Jarqyn bolashaq"},{"id":"147","kazakh":"Шешендік өнер","latin":"Sheshendіk óner"},{"id":"148","kazakh":"Үй тапсырмасы","latin":"Úı tapsyrmasy"},{"id":"149","kazakh":"Ұстаздық ету","latin":"Ustazdyq etý"},{"id":"150","kazakh":"Мектеп бітіру","latin":"Mektep bіtіrý"}],"word_3_15":[{"id":"151","kazakh":"Швейцария","latin":"Shveısarıa"},{"id":"152","kazakh":"Эпицентр","latin":"Epısentr"},{"id":"153","kazakh":"Сантиметр","latin":"Santımetr"},{"id":"154","kazakh":"Қоршаған ортаны қорғау","latin":"Qorshaǵan ortany qorǵaý"},{"id":"155","kazakh":"Компьютерде жұмыс істеу","latin":"Kompúterde jumys іsteý"},{"id":"156","kazakh":"Жоғары нәтиже көрсету","latin":"Joǵary nátıje kórsetý"},{"id":"157","kazakh":"Шығармашылықпен айналысу","latin":"Shyǵarmashylyqpen aınalysý"},{"id":"158","kazakh":"Қарақыпшақ Қобыланды","latin":"Qaraqypshaq Qobylandy"},{"id":"159","kazakh":"Әбунасыр әл-Фараби","latin":"Ábýnasyr ál-Farabı"},{"id":"160","kazakh":"Леонардо да Винчи","latin":"Leonardo da Vınchı"}],"word_3_16":[{"id":"161","kazakh":"Юля","latin":"Iýlıa"},{"id":"162","kazakh":"Өз үйім - өлең төсегім","latin":"Óz úıіm - óleń tósegіm"},{"id":"163","kazakh":"Жаны сұлудың тәні сұлу","latin":"Jany sulýdyń tánі sulý"},{"id":"164","kazakh":"Жақсы сөз жарым ырыс","latin":"Jaqsy sóz jarym yrys"},{"id":"165","kazakh":"Өмір - үлкен мектеп","latin":"Ómіr - úlken mektep"},{"id":"166","kazakh":"Ештен кеш жақсы","latin":"Eshten kesh jaqsy"},{"id":"167","kazakh":"Өткен іске өкінбе","latin":"Ótken іske ókіnbe"},{"id":"168","kazakh":"Сақтықта қорлық жоқ","latin":"Saqtyqta qorlyq joq"},{"id":"169","kazakh":"Бес саусақ бірдей емес","latin":"Bes saýsaq bіrdeı emes"},{"id":"170","kazakh":"Денсаулық - зор байлық","latin":"Densaýlyq - zor baılyq"}],"word_3_17":[{"id":"171","kazakh":"ЮНЕСКО","latin":"UNESСO"},{"id":"172","kazakh":"ЭКСПО","latin":"EXPO"},{"id":"173","kazakh":"Актёр","latin":"Аktór"},{"id":"174","kazakh":"Дирижёр","latin":"Dırıjо́r"},{"id":"175","kazakh":"Цирк","latin":"Sırk"},{"id":"176","kazakh":"Корпорация","latin":"Korporasıa"},{"id":"177","kazakh":"Училище","latin":"Ýchılıshe"},{"id":"178","kazakh":"Борщ","latin":"Borsh"},{"id":"179","kazakh":"Элемент","latin":"Element"},{"id":"180","kazakh":"Парашют","latin":"Parashút"}],"word_3_18":[{"id":"181","kazakh":"Бюджет","latin":"Búdjet"},{"id":"182","kazakh":"Компьютер","latin":"Kompúter"},{"id":"183","kazakh":"Заряд","latin":"Zarа́d"},{"id":"184","kazakh":"Князь","latin":"Knáz"},{"id":"185","kazakh":"Акция","latin":"Aksıa"},{"id":"186","kazakh":"Химия","latin":"Hımıa"},{"id":"187","kazakh":"Гимназия","latin":"Gımnazıa"},{"id":"188","kazakh":"Альбом","latin":"Álbom"},{"id":"189","kazakh":"Фольклор","latin":"Fólklor"},{"id":"190","kazakh":"Мультфильм","latin":"Múltfılm"}],"word_3_19":[{"id":"191","kazakh":"Класс","latin":"Klas"},{"id":"192","kazakh":"Холл","latin":"Hol"},{"id":"193","kazakh":"Калий","latin":"Kalı"},{"id":"194","kazakh":"Экономист","latin":"Ekonomıs"},{"id":"195","kazakh":"Педагог","latin":"Pedagog"},{"id":"196","kazakh":"Боулинг","latin":"Boýlıń"},{"id":"197","kazakh":"Брифинг","latin":"Brıfıń"},{"id":"198","kazakh":"Веб-сайт","latin":"Ýeb-saıt"},{"id":"199","kazakh":"Филолог","latin":"Fılolog"},{"id":"200","kazakh":"Рейтинг","latin":"Reıtıń"}]
      },
      color: '#d83681'
    }
  }
  componentDidMount() {
    this._isMounted = true;
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      alert("there ere ");
    });
  } 

 
  componentWillMount() {
    this._isMounted = false;

  }
  render() {
        return (
            <ScrollView style={styles.container}>
            <View style={styles.helpContainer}>
            <FlatList
                  data={this.props.navigation.getParam('array')}
                  renderItem={({item,index}) => 
                    <TouchableOpacity  style={{backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    padding: 20,
                    borderRadius: 4,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    zIndex: 1,
                    marginBottom: 10}}  onPress={() => 
                      this.onPress(item.color,item.tour,item.level)
                   } >
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                        {item.bolim} бөлім
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {item.point}/10
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {item.point/10*100}%
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
                  }
                  keyExtractor={item => item.id.toString()}
              />
                
                 
          </View>
        </ScrollView>
        );
    }
    onPress($color,$tour,$level) {
      if($color=='#54d28b') {
          alert("Бұл деңгей тапсырылды");
      }
      else {
        this.props.navigation.navigate('Question',{data: this.state.data["word_"+this.props.navigation.getParam('kezen')+"_"+$tour],level:$level,start: this.props.navigation.getParam('start'),end:this.props.navigation.getParam('end')})
      }
    
    }
}

export default withNavigation(TestScreen);
const styles = StyleSheet.create({
   words: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
   },
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
        backgroundColor: '#fff',
    },
    
    helpLink: {
        backgroundColor: "#8252c1",
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        borderRadius: 3

    },
    welcomeImage: {
        width: 20,
        height: 20
      },
    helpLink_1: {
  
      },
    helpContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20
    },
    helpLinkText: {
      fontSize: 20,
      color: 'white'
    }
});