import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import Swiper from 'react-native-swiper';
import KHSIM from './KHSIM';
import MuaSIMData from '../menu-tabs/MuaSIMData';
import MuaSIMSoDep from '../menu-tabs/MuaSIMSoDep';

const slides = [
    {
      image: require('../images/first_1.png'),
      text: (
        <Text>
          Quản lý tài khoản, đăng ký dịch vụ{'\n'}<Text style={{fontWeight: 'bold'}}>MAX</Text> nhanh
        </Text>
      ),
    },
    {
      image: require('../images/first_2.png'),
      text: (
        <Text>
          Tích điểm iTel Club{'\n'}Trải nghiệm tiện ích <Text style={{fontWeight: 'bold'}}>MAX</Text> mê
        </Text>
      ),
    },
    {
      image: require('../images/first_3.png'),
      text: (
        <Text>
          Chơi Game, Xem Phim{'\n'}<Text style={{fontWeight: 'bold'}}>MAX</Text> fêeee
        </Text>
      ),
    },
];

const First = ({navigation}) => {
  const showCallAlert = () => {
    Alert.alert(
        'Hotline',
        '',
        [
            {
                text: 'Hủy',
                style: 'cancel',
            },
            {
                text: 'Gọi 087 7087087',
                onPress: () => {
                    console.log('Đã gọi 087 7087087');
                },
            },
        ],
    );
  };  
  
  return(
        <SafeAreaView style={styles.container}>
          
          {/* Phần 1 */}
          <View style={styles.p1}>

            {/* Phần 1.1 */}
            <TouchableOpacity style={styles.TO11} onPress={showCallAlert}>
              <Image source={require('../images/telephone.png')} style={styles.img11}/>
            </TouchableOpacity>

            {/* Phần 1.2 */}
            <TouchableOpacity>
              <Text style={styles.text12}>
                Bỏ qua
              </Text>
            </TouchableOpacity>
          </View>

          {/* Phần 2 */}
          <View style={styles.p2}>
            <Swiper
            loop={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            >
              {slides.map((slide, index) => (
                <View key={index} style={styles.p21}>
                  <Image source={slide.image} style={styles.img21}/>
                  <Text style={styles.text21}>{slide.text}</Text>
                </View>
              ))}
            </Swiper>
          </View>
          
          {/* Phần 3 */}
          <View style={styles.p3}>
            
            {/* Phần tử 3.1 */}
            <TouchableOpacity style={styles.TO31} onPress={() => { navigation.navigate('Login') }}>
              <Text style={styles.text31}>
                Đăng nhập
              </Text>
            </TouchableOpacity>

            {/* Phần tử 3.2 */}
            <TouchableOpacity onPress={() => navigation.navigate(KHSIM)} style={styles.TO32}>
              <Text style={styles.text32}>
                Kích hoạt SIM
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Phần 4 */}
          <View style={styles.p4}>
            
            {/* Phần tử 4.1 */}
            <TouchableOpacity onPress={() => navigation.navigate(MuaSIMData)} style={styles.TO4}>
              <Text style={styles.text4}>
                Mua SIM Data
              </Text>
            </TouchableOpacity>
            
            {/* Phần tử 4.2 */}
            <TouchableOpacity onPress={() => navigation.navigate(MuaSIMSoDep)} style={styles.TO4}>
              <Text style={styles.text4}>
                Mua SIM số đẹp
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%', 
    backgroundColor:'#E54646'
  },
  p1: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TO11: {
    flex: 0.9, 
    marginLeft: 20, 
    shadowOpacity:'0.7', 
    shadowColor: '#444444', 
    shadowOffset: { width: 2, height: 5 }
  },
  img11: {
    width: 30, 
    height: 30
  },
  text12: {
    color: 'white', 
    fontWeight: 'bold'
  },
  p2: {
    width: '100%', 
    height: '65%'
  },
  dot: {
    backgroundColor: '#CD9B9B', 
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
    opacity: 0.28, 
    marginBottom:-45
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3, 
    marginBottom:-45
  },
  p21: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img21: {
    width: 200, 
    height: 200, 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: 'white', 
    marginTop: -50
  },
  text21: {
    fontSize: 15, 
    color: 'white', 
    textAlign: 'center', 
    paddingTop: 30
  },
  p3: {
    width: '100%', 
    height: '20%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  TO31: {
    width: '90%', 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10, 
    backgroundColor:'white',
    borderRadius: 20
  },
  text31: {
    color: 'red', 
    fontWeight: 'bold'
  },
  TO32: {
    width: '90%', 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    marginVertical: 10, 
    borderColor: 'white', 
    borderRadius: 20
  },
  text32: {
    color: 'white', 
    fontWeight: 'bold'
  },
  p4: {
    width: '100%', 
    height: '10%', 
    justifyContent: 'center', 
    alignItems:'center', 
    flexDirection: 'row'
  },
  TO4:{
    width: '44%', 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5, 
    borderRadius: 20, 
    backgroundColor: 'white'
  },
  text4:{
    color: 'red', 
    fontWeight: 'bold'
  },
});

export default First;