import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import First from './src/screens/First';
import Login from './src/screens/Login';
import KHSIM from './src/screens/KHSIM';
import TrangChu from './src/bottom-tabs/TrangChu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItelClub from './src/bottom-tabs/ItelClub';
import HoTro from './src/bottom-tabs/HoTro';
import TaiKhoan from './src/bottom-tabs/TaiKhoan';
import Menu from './src/bottom-tabs/Menu';
import ThongBao from './src/screens/ThongBao';
import TTTK from './src/screens/TTTK';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CauHinhDangNhap from './src/menu-tabs/CauHinhDangNhap';
import ChinhSachBaoMatThongTin from './src/menu-tabs/ChinhSachBaoMatThongTin';
import DanhGiaChatLuong from './src/menu-tabs/DanhGiaChatLuong';
import DieuKhoanVaDieuKienGiaoDichChung from './src/menu-tabs/DieuKhoanVaDieuKienGiaoDichChung';
import LichSuTieuDung from './src/menu-tabs/LichSuTieuDung';
import MuaSIMData from './src/menu-tabs/MuaSIMData';
import MuaSIMSoDep from './src/menu-tabs/MuaSIMSoDep';
import NapThe from './src/menu-tabs/NapThe';
import ThongTinThueBao from './src/menu-tabs/ThongTinThueBao';
import ThongTinUngDung from './src/menu-tabs/ThongTinUngDung';
import TrungTamHoTro from './src/menu-tabs/TrungTamHoTro';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeTab({navigation}) {
  // const [selectedTab, setSelectedTab] = useState('Trang chủ'); // Tab ban đầu được chọn

  // const changeColor = (tabName) => {
  //   setSelectedTab(tabName); // Lưu trữ tab được chọn
  // };

  // const getIconColor = (tabName) => {
  //   return selectedTab === tabName ? 'red' : '#808080';
  // };

  // const getTextColor = (tabName) => {
  //   return selectedTab === tabName ? 'red' : '#808080';
  // };
    const openDrawer = () => {
      navigation.openDrawer();
    };

    return (
      <Tab.Navigator screenOptions={{tabBarStyle: { paddingBottom: 20 }, headerShown: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: '#808080'}} >
            <Tab.Screen name="Trang chủ" component={TrangChu} options={{tabBarIcon: () =>( 
              <TouchableOpacity> 
                <Image source={(require('./src/images/home-button.jpg'))} style={{width: 20, height: 20, tintColor: 'red'}}/>
              </TouchableOpacity>
            )
            }}/>
            <Tab.Screen name="HoTro" component={HoTro} options={{tabBarIcon: () => (
              <TouchableOpacity >
                <Image source={(require('./src/images/hotro-button.jpg'))} style={{width: 20, height: 20, tintColor: 'red'}}/>
              </TouchableOpacity>
              ), tabBarLabel: 'Hỗ trợ'}}/>
            <Tab.Screen name="ItelClub" component={ItelClub} options={{tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate(ItelClub)}>
            <Image source={(require('./src/images/itelclub-button.jpg'))} style={{width: 100, height: 50, resizeMode: 'contain', marginTop: 20}}/>

            </TouchableOpacity>
            ), tabBarLabel: ''}}/>
            <Tab.Screen name="TaiKhoan" component={TTTK} options={{tabBarIcon: () => (
            <TouchableOpacity >
            <Image source={(require('./src/images/profile-button.jpg'))} style={{width: 20, height: 20, tintColor: 'red'}}/>

            </TouchableOpacity>
            ), tabBarLabel: 'Tài khoản'}}/>
            <Tab.Screen name="Menu" component={Menu} options={{tabBarIcon: () => 
              (
                <TouchableOpacity onPress={openDrawer}>
                  <Image source={(require('./src/images/menu-button.jpg'))} style={{width: 20, height: 20, tintColor: 'red'}}/>
                </TouchableOpacity>
              ), tabBarLabel: 'Menu'}}/>
      </Tab.Navigator>
    )
}

const StackNav = () => {
  return(
    <Stack.Navigator initialRouteName="First" screenOptions={{gestureEnabled: false, headerShown: false}}>
            <Stack.Screen name="First" component={First} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeDrawer} />
            <Stack.Screen name="HomeTabs" component={HomeTab} />
            <Stack.Screen name="ThongTinThueBao" component={ThongTinThueBao} />
            <Stack.Screen name="TTTK" component={TTTK} />
            <Stack.Screen name="LichSuTieuDung" component={LichSuTieuDung} />
            <Stack.Screen name="NapThe" component={NapThe} />
            <Stack.Screen name="MuaSIMSoDep" component={MuaSIMSoDep} />
            <Stack.Screen name="MuaSIMData" component={MuaSIMData} />
            <Stack.Screen name="CauHinhDangNhap" component={CauHinhDangNhap} />
            <Stack.Screen name="TrungTamHoTro" component={TrungTamHoTro} />
            <Stack.Screen name="DanhGiaChatLuong" component={DanhGiaChatLuong} />
            <Stack.Screen name="DieuKhoanVaDieuKienGiaoDichChung" component={DieuKhoanVaDieuKienGiaoDichChung} />
            <Stack.Screen name="ChinhSachBaoMatThongTin" component={ChinhSachBaoMatThongTin} />
            <Stack.Screen name="ThongTinUngDung" component={ThongTinUngDung} />
            <Stack.Screen name="ThongBao" component={ThongBao} />
            <Stack.Screen name="KHSIM" component={KHSIM} />
            
        </Stack.Navigator>
  )
}

function HomeDrawer () {
  return(
    <Drawer.Navigator drawerContent={Menu} screenOptions={{headerShown: false}}>
      {/* <Drawer.Screen name="HomeTabs" component={HomeTab} /> */}
      {/* <Drawer.Screen name="ThongTinThueBao" component={ThongTinThueBao}/>
      <Drawer.Screen name="ThongTinTaiKhoan" component={TaiKhoan}/>
      <Drawer.Screen name="LichSuTieuDung" component={LichSuTieuDung}/>
      <Drawer.Screen name="NapThe" component={NapThe}/>
      <Drawer.Screen name="MuaSIMSoDep" component={MuaSIMSoDep}/>
      <Drawer.Screen name="MuaSIMData" component={MuaSIMData}/>
      <Drawer.Screen name="CauHinhDangNhap" component={CauHinhDangNhap}/>
      <Drawer.Screen name="TrungTamHoTro" component={TrungTamHoTro}/>
      <Drawer.Screen name="DanhGiaChatLuong" component={DanhGiaChatLuong}/>
      <Drawer.Screen name="DieuKhoanVaDieuKienGiaoDichChung" component={DieuKhoanVaDieuKienGiaoDichChung}/>
      <Drawer.Screen name="ChinhSachBaoMatThongTin" component={ChinhSachBaoMatThongTin}/>
      <Drawer.Screen name="ThongTinUngDung" component={ThongTinUngDung}/> */}
      <Drawer.Screen name="Homi" component={StackNav}/>
    </Drawer.Navigator>
  )
}
const App = () => {
  return (
    // <First/>
    // <Login/>
    // <KHSIM/>
    // <TrangChu/>
    // <ThongBao/>
    // <TTTK/>
    // <HoTro/>
    // <ItelClub/>
    // <Menu/>
    // <ThongTinThueBao/>
    // <MuaSIMData/>
    <NavigationContainer>
        <HomeDrawer/>
    </NavigationContainer>
  );
}

export default App;