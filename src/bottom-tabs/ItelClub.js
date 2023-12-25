import React, { useState } from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Modal,
    Animated
} from 'react-native'

const ItelClub = ({navigation}) => {

  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonPress = (button) => {
    if (selectedButton !== button) {
      setSelectedButton(button);
    }
  };
  
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const toggleModal = () => {
  setModalVisible(!modalVisible);
  Animated.timing(fadeAnim, {
      toValue: modalVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
  }).start();
  };
  const toggleModal1 = () => {
    setModalVisible(!modalVisible);
    Animated.timing(fadeAnim, {
        toValue: modalVisible ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
    }).start();
    };

  return(
    <View>
        <View style={{backgroundColor: 'red', alignItems: 'center'}}>
            <View style={{alignItems: 'center', paddingTop: 50, marginBottom: 20, backgroundColor: 'red', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={require('../images/back.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginHorizontal: 80}}>
                    <Image source={require('../images/im_Than_Thiet-removebg-preview.png')} style={{width: 30, height: 30, tintColor: 'white'}}/>
                    <Text style={{fontSize: 23, color: 'white', fontWeight: 900}}>iTel CLUB</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../images/menu.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', width: '90%', height: 60, borderRadius: 5, backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'space-between', paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../images/smartphone.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 5}}/>
                    <View>
                        <Text style={{color: 'white', fontWeight:'bold', marginBottom: 5}}>SỐ ĐIỆN THOẠI</Text>
                        <Text style={{color: 'white'}}>HỌ VÀ TÊN</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../images/im_Than_Thiet.png')} style={{width: 45, height: 45, marginRight: 5}}/>
                    <View>
                        <Text style={{color: 'white', fontWeight:'bold', marginBottom: 5}}>Thân Thiết</Text>
                        <Text style={{color: 'white'}}>9999 điểm</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: 2100}}>
            <View style={{backgroundColor: 'red', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <TouchableOpacity style={{width: '43%', height: 35, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 8, backgroundColor: 'white', marginRight: 10}}>
                    <Image source={require('../images/itel-club-star.jpg')} style={{width: 30, height: 30, marginRight: 20}}/>
                    <Text style={{fontSize: 16, fontWeight: 500}}>Giới thiệu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '43%', height: 35, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 8, backgroundColor: 'white'}}>
                    <Image source={require('../images/endowment.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                    <Text style={{fontSize: 16, fontWeight: 500}}>Ưu đãi đã nhận</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => handleButtonPress(1)}
                  style={[{width: '50%', backgroundColor: 'white',padding: 10}, selectedButton === 1 ? {borderBottomWidth: 5, borderBottomColor: 'red'} : null]}
                >
                  <Text style={{fontSize: 16,fontWeight: '700', textAlign: 'center', color: selectedButton === 1 ? 'black' : '#CCCCCC'}}>Ưu đãi dành cho bạn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleButtonPress(2)}
                  style={[{width: '50%', backgroundColor: 'white',padding: 10}, selectedButton === 2 ? {borderBottomWidth: 5, borderBottomColor: 'red'} : null]}
                >
                  <Text style={{fontSize: 16,fontWeight: '700', textAlign: 'center', color: selectedButton === 2 ? 'black' : '#CCCCCC'}}>Ưu đãi VIP</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 20, alignItems: 'center'}}>
                {selectedButton === 1 &&
                    <View >
                        <View style={{width: '90%', flexDirection: 'row'}}>
                            <View style={{width: '50%',}}>
                                <TouchableOpacity onPress={toggleModal} style={{ marginLeft: -5, padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 3}}>
                                    <View>
                                        <Text style={{fontSize: 12}}>Điểm quy đổi</Text>
                                        <Text style={{fontSize: 16}}>Tất cả</Text>
                                    </View>
                                    <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20}}/>
                                </TouchableOpacity>
                                <Modal transparent visible={modalVisible} onRequestClose={toggleModal} animationType="none">
                                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }} onPress={toggleModal}>
                                        <Animated.View style={{backgroundColor: 'white',borderTopLeftRadius: 10,borderTopRightRadius: 10,opacity: fadeAnim,transform: [{translateY: fadeAnim.interpolate({inputRange: [0, 1],outputRange: [300, 0],}),},],}}>
                                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, paddingBottom: 10, paddingLeft: 120, borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}>
                                                <Text style={{fontWeight: 700}}>Tùy Chọn</Text>
                                                <TouchableOpacity style={{width: 20, height: 20, paddingLeft: 70}}>
                                                    <Image source={require('../images/exit1.png')} style={{width: 20, height: 20}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{alignItems: 'center', marginVertical: 20}}>
                                                <TextInput placeholderTextColor={'#808080'} placeholder='Tìm kiếm' style={{width: '90%', padding: 13, borderRadius: 10, backgroundColor: '#EEEEEE'}}/>
                                            </View>
                                            <ScrollView contentContainerStyle={{height: 400, width: '100%'}}>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tất cả</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Miễn phí</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Dưới 1.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Từ 1.000 - 5.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Từ 5.000 - 10.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Trên 10.000 điểm</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </Animated.View>
                                    </TouchableOpacity>
                                </Modal>
                            </View>
                            
                            <View style={{width: '50%',}}>
                                <TouchableOpacity onPress={toggleModal1} style={{ marginLeft: 10, padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 3}}>
                                    <View>
                                        <Text style={{fontSize: 12}}>Phân loại</Text>
                                        <Text style={{fontSize: 16}}>Tất cả</Text>
                                    </View>
                                    <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20}}/>
                                </TouchableOpacity>
                                <Modal transparent visible={modalVisible} onRequestClose={toggleModal1} animationType="none">
                                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }} onPress={toggleModal1}>
                                        <Animated.View style={{backgroundColor: 'white',borderTopLeftRadius: 10,borderTopRightRadius: 10,opacity: fadeAnim,transform: [{translateY: fadeAnim.interpolate({inputRange: [0, 1],outputRange: [300, 0],}),},],}}>
                                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, paddingBottom: 10, paddingLeft: 120, borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}>
                                                <Text style={{fontWeight: 700}}>Tùy Chọn</Text>
                                                <TouchableOpacity style={{width: 20, height: 20, paddingLeft: 70}}>
                                                    <Image source={require('../images/exit1.png')} style={{width: 20, height: 20}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{alignItems: 'center', marginVertical: 20}}>
                                                <TextInput placeholderTextColor={'#808080'} placeholder='Tìm kiếm' style={{width: '90%', padding: 13, borderRadius: 10, backgroundColor: '#EEEEEE'}}/>
                                            </View>
                                            <ScrollView contentContainerStyle={{height: 400, width: '100%'}}>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tất cả</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Làm đẹp - Sức khỏe</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tiện ích</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Giải trí</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Mua sắm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Đồ uống</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Đồ ăn</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Evoucher</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Quà vật lý</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Phòng chờ</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </Animated.View>
                                    </TouchableOpacity>
                                </Modal>
                            </View>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <TextInput placeholder='Tìm kiếm Ưu đãi...' placeholderTextColor={'#DDDDDD'} style={{padding: 10.6, marginLeft: -5, borderWidth: 1, borderRadius: 3, borderColor: '#C0C0C0', }}/>
                            <TouchableOpacity style={{position: 'absolute', right: 0}}>
                                    <Image source={require('../images/search-bhred.png')} style={{width: 40, height: 40, borderTopRightRadius: 3, borderBottomRightRadius: 3}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', marginVertical: 10}}>
                            <Text>Ưu đãi tương ứng với hạng hội viên của bạn</Text>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                    <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                        <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                        <View style={{marginLeft: 10}}>
                                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                                <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                                <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                                <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
                {selectedButton === 2 &&
                  <View >
                    <View style={{width: '90%', flexDirection: 'row'}}>
                        <View style={{width: '50%'}}>
                            <TouchableOpacity onPress={toggleModal} style={{marginLeft: -5, padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 3}}>
                                <View>
                                    <Text style={{fontSize: 12}}>Điểm quy đổi</Text>
                                    <Text style={{fontSize: 16}}>Tất cả</Text>
                                </View>
                                <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20}}/>
                            </TouchableOpacity>
                            <Modal transparent visible={modalVisible} onRequestClose={toggleModal} animationType="none">
                                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }} onPress={toggleModal}>
                                        <Animated.View style={{backgroundColor: 'white',borderTopLeftRadius: 10,borderTopRightRadius: 10,opacity: fadeAnim,transform: [{translateY: fadeAnim.interpolate({inputRange: [0, 1],outputRange: [300, 0],}),},],}}>
                                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, paddingBottom: 10, paddingLeft: 120, borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}>
                                                <Text style={{fontWeight: 700}}>Tùy Chọn</Text>
                                                <TouchableOpacity style={{width: 20, height: 20, paddingLeft: 70}}>
                                                    <Image source={require('../images/exit1.png')} style={{width: 20, height: 20}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{alignItems: 'center', marginVertical: 20}}>
                                                <TextInput placeholderTextColor={'#808080'} placeholder='Tìm kiếm' style={{width: '90%', padding: 13, borderRadius: 10, backgroundColor: '#EEEEEE'}}/>
                                            </View>
                                            <ScrollView contentContainerStyle={{height: 400, width: '100%'}}>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tất cả</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Miễn phí</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Dưới 1.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Từ 1.000 - 5.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Từ 5.000 - 10.000 điểm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Trên 10.000 điểm</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </Animated.View>
                                    </TouchableOpacity>
                                </Modal>
                        </View>
                        <View style={{width: '50%'}}>
                            <TouchableOpacity onPress={toggleModal1} style={{marginLeft: 10, padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 3}}>
                                <View>
                                    <Text style={{fontSize: 12}}>Phân loại</Text>
                                    <Text style={{fontSize: 16}}>Tất cả</Text>
                                </View>
                                <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20}}/>
                            </TouchableOpacity>
                            <Modal transparent visible={modalVisible} onRequestClose={toggleModal1} animationType="none">
                                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }} onPress={toggleModal1}>
                                        <Animated.View style={{backgroundColor: 'white',borderTopLeftRadius: 10,borderTopRightRadius: 10,opacity: fadeAnim,transform: [{translateY: fadeAnim.interpolate({inputRange: [0, 1],outputRange: [300, 0],}),},],}}>
                                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, paddingBottom: 10, paddingLeft: 120, borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}>
                                                <Text style={{fontWeight: 700}}>Tùy Chọn</Text>
                                                <TouchableOpacity style={{width: 20, height: 20, paddingLeft: 70}}>
                                                    <Image source={require('../images/exit1.png')} style={{width: 20, height: 20}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{alignItems: 'center', marginVertical: 20}}>
                                                <TextInput placeholderTextColor={'#808080'} placeholder='Tìm kiếm' style={{width: '90%', padding: 13, borderRadius: 10, backgroundColor: '#EEEEEE'}}/>
                                            </View>
                                            <ScrollView contentContainerStyle={{height: 400, width: '100%'}}>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tất cả</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Làm đẹp - Sức khỏe</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Tiện ích</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Giải trí</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Mua sắm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Đồ uống</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Đồ ăn</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Evoucher</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Quà vật lý</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                                    <Text>Phòng chờ</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </Animated.View>
                                    </TouchableOpacity>
                                </Modal>
                        </View>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <TextInput placeholder='Tìm kiếm Ưu đãi...' placeholderTextColor={'#DDDDDD'} style={{padding: 10.6, marginLeft: -5, borderWidth: 1, borderRadius: 3, borderColor: '#C0C0C0', }}/>
                        <TouchableOpacity style={{position: 'absolute', right: 0}}>
                                <Image source={require('../images/search-bhred.png')} style={{width: 40, height: 40, borderTopRightRadius: 3, borderBottomRightRadius: 3}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center', marginVertical: 10}}>
                        <Text>Ưu đãi dành riêng cho hội viên kim cương</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                    <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                    <View style={{marginLeft: 10}}>
                                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                                            <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                            <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                            <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 150, height: 170, alignItems: 'center', borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                <Image source={require('../images/itel_club_1.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                                <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Take Eat Easy 100...</Text>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                    <Image source={require('../images/itel_club_icon_1.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
                                    <View style={{marginLeft: 10}}>
                                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                                            <Image source={require('../images/wallet.png')} style={{width: 15, height: 15, tintColor: 'red'}}/>
                                            <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>10000 điểm</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image source={require('../images/wifi-drive.png')} style={{width: 15, height: 15}}/>
                                            <Text style={{fontSize: 12, marginLeft: 5}}>90 ngày</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                }
              </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ItelClub;

