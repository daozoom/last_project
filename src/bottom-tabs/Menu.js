import React, { useState } from 'react'
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ThongTinThueBao from '../menu-tabs/ThongTinThueBao';
import CauHinhDangNhap from '../menu-tabs/CauHinhDangNhap';
import ChinhSachBaoMatThongTin from '../menu-tabs/ChinhSachBaoMatThongTin';
import DanhGiaChatLuong from '../menu-tabs/DanhGiaChatLuong';
import DieuKhoanVaDieuKienGiaoDichChung from '../menu-tabs/DieuKhoanVaDieuKienGiaoDichChung';
import LichSuTieuDung from '../menu-tabs/LichSuTieuDung';
import MuaSIMData from '../menu-tabs/MuaSIMData';
import MuaSIMSoDep from '../menu-tabs/MuaSIMSoDep';
import NapThe from '../menu-tabs/NapThe';
import ThongTinUngDung from '../menu-tabs/ThongTinUngDung';
import TrungTamHoTro from '../menu-tabs/TrungTamHoTro';
import First from '../screens/First';

const Menu = () => {

  const navigation = useNavigation();

    const [isHidden1, setIsHidden1] = useState(true);
  const [animationValue1, setAnimationValue1] = useState(new Animated.Value(0));

  const [isHidden2, setIsHidden2] = useState(true);
  const [animationValue2, setAnimationValue2] = useState(new Animated.Value(0));

  const toggleHidden1 = () => {
    const isHidden = isHidden1;
    const setIsHidden = setIsHidden1;
    const animationValue = animationValue1;
    const setAnimationValue = setAnimationValue1;

    animate(isHidden, setIsHidden, animationValue, setAnimationValue);
  };

  const toggleHidden2 = () => {
    const isHidden = isHidden2;
    const setIsHidden = setIsHidden2;
    const animationValue = animationValue2;
    const setAnimationValue = setAnimationValue2;

    animate(isHidden, setIsHidden, animationValue, setAnimationValue);
  };

  const animate = (isHidden, setIsHidden, animationValue, setAnimationValue) => {
    if (isHidden) {
      setIsHidden(false);
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsHidden(true));
    }
  };

  const slideInStyle1 = {
    height: animationValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    }),
    overflow: 'hidden',
  };

  const slideInStyle2 = {
    height: animationValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80],
    }),
    overflow: 'hidden',
  };

    return(
        <View style={{flex: 1, backgroundColor: '#48D1CC'}}>
            <ScrollView contentContainerStyle={{minHeight: 1100, backgroundColor: '#48D1CC', paddingLeft: 20, paddingRight: 20}} showsVerticalScrollIndicator={false}>
                <View style={{width: '95%',marginTop:50, borderBottomWidth: 1, borderColor: 'white'}}>
                  <TouchableOpacity style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}  onPress={toggleHidden1}>
                      <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white', marginRight: 10}}>Bấm vào để {isHidden1 ? 'hiện' : 'hiện'} thẻ con</Text>
                      <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                  </TouchableOpacity>
                  <Animated.View style={[slideInStyle1, {}]}>
                      <TouchableOpacity onPress={() => navigation.navigate(ThongTinThueBao)} style={{padding: 10, paddingLeft: 40, flexDirection: 'row'}}>
                        <Image source={require('../images/profile-button.jpg')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                        <Text style={{color: 'white'}}>Thông tin thuê bao</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {navigation.navigate(TTTK)}} style={{padding: 10, paddingLeft: 40, flexDirection: 'row'}}>
                        <Image source={require('../images/profile-button.jpg')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                        <Text style={{color: 'white'}}>Thông tin tài khoản</Text>
                      </TouchableOpacity>
                  </Animated.View>
                </View>
                <View style={{width: '95%', borderBottomWidth: 1, borderColor: 'white'}}>
                  <TouchableOpacity  onPress={() => {navigation.navigate(LichSuTieuDung)}} style={{flexDirection: 'row', padding: 20}}>
                      <Image source={require('../images/shopping.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Lịch sử tiêu dùng</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(NapThe)}} style={{flexDirection: 'row', padding: 20}}>
                    <Image source={require('../images/shopping.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Nạp thẻ</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '95%', borderBottomWidth: 1, borderColor: 'white'}}>
                  <TouchableOpacity onPress={() => {navigation.navigate(MuaSIMSoDep)}} style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
                    <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Mua SIM số đẹp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(MuaSIMData)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Mua SIM Data</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '95%', borderBottomWidth: 1, borderColor: 'white'}}>
                  <TouchableOpacity onPress={() => {navigation.navigate(CauHinhDangNhap)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Cấu hình đăng nhập</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(TrungTamHoTro)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Trung tâm hỗ trợ</Text>
                  </TouchableOpacity>
                  <View style={{}}>
                      <TouchableOpacity style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}  onPress={toggleHidden2}>
                        <Image source={require('../images/user.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                        <Text style={{color: 'white', marginRight: 20}}>Đổi ngôn ngữ</Text>
                        <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                      </TouchableOpacity>
                      <Animated.View style={[slideInStyle2, {}]}>
                          <TouchableOpacity style={{padding: 10, paddingLeft: 40}}>
                            <Text style={{color: 'white'}}>Tiếng Anh</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10, paddingLeft: 40}}>
                            <Text style={{color: 'white'}}>Tiếng Việt</Text>
                          </TouchableOpacity>
                      </Animated.View>
                  </View>
                  <TouchableOpacity onPress={() => {navigation.navigate(DanhGiaChatLuong)}} style={{flexDirection: 'row', padding: 20}}>
                    <Image source={require('../images/quality.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                      <Text style={{color: 'white'}}>Đánh giá chất lượng</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '80%',}}>
                  <TouchableOpacity onPress={() => {navigation.navigate(DieuKhoanVaDieuKienGiaoDichChung)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/dieu-khoan.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                    <Text style={{color: 'white'}}>Điều khoản và điều kiện giao dịch chung</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(ChinhSachBaoMatThongTin)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/bao-mat.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                    <Text style={{color: 'white'}}>Chính sách bảo mật thông tin</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(ThongTinUngDung)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/information.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                    <Text style={{color: 'white'}}>Thông tin ứng dụng</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate(First)}} style={{flexDirection: 'row', padding: 20}}>
                  <Image source={require('../images/logout.png')} style={{width: 20, height: 20, tintColor: 'white', marginRight: 20}}/>
                    <Text style={{color: 'white'}}>Đăng xuất</Text>
                  </TouchableOpacity>
                </View>
                <View style={{padding: 20}}>
                  <Text style={{color: 'white'}}>Phiên bản: 1.12.6</Text>
                  <Image source={require('../images/kiemchung.png')} style={{marginLeft: -25, width: 140, height: 60}}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Menu;