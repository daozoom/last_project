import React, { Component } from 'react'
import{
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

const TTTK = ({navigation}) => {
    return(
        <View>
            <View style={{height: 180, width: '100%', backgroundColor: 'red', borderBottomWidth: 1, borderBottomColor: '#C0C0C0', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15, paddingBottom: 50}}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{marginRight: 65}}>
                    <Image source={require('../images/back.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 600}}>
                    Thông tin tài khoản
                </Text>
            </View>
            <View style={{width: '100%', height: 1500, top: 100, position: 'absolute'}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: 1800, alignItems: 'center'}}>
                    <View style={{height: 410, backgroundColor: 'white', justifyContent: 'space-around', width: '80%', borderRadius: 15, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginBottom: -20}}>
                            <Image source={require('../images/mobile-phone.png')} style={{width: 15, height: 15}}/>
                            <Text style={{fontWeight: 700}}> Số điện thoại</Text>
                        </View>
                        <View style={{borderTopWidth: 1, borderBottomWidth: 1, height: '65%', borderColor: '#CFCFCF', paddingLeft: 20, justifyContent:'space-around'}}>
                            <View>
                                <Text>Tài khoản gốc</Text>
                                <Text style={{fontSize: 20, color: 'red', fontWeight: 700, marginTop: 5}}>1.549.543.234 đ</Text>
                            </View>
                            <View>
                                <Text>Tài khoản khuyến mãi</Text>
                                <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5}}>5.425.764.567 đ</Text>
                            </View>
                            <View>
                                <Text>Ngày hòa mạng</Text>
                                <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5}}>01/01/2023</Text>
                            </View>
                            <View>
                                <Text>Mã giới thiệu</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5}}>82596X</Text>
                                    <TouchableOpacity style={{marginTop: 6, marginLeft: 10}}>
                                        <Image source={require('../images/copy.jpg')} style={{width: 20, height: 20, tintColor: 'red'}}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: -20}}>
                            <Text style={{color: 'red', paddingLeft: 20}}>Lịch sử tiêu dùng </Text>
                        </View>
                    </View>
                    <View style={{height: 410, backgroundColor: 'white', width: '80%', marginTop: 30, borderRadius: 15, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                        <View style={{height: 100, backgroundColor: 'red', justifyContent: 'center', borderTopRightRadius: 15, borderTopLeftRadius: 15, paddingLeft: 20}}>
                            <Text style={{color: 'white', fontSize: 30, fontStyle: 'italic', fontWeight: '900', marginBottom: 5}}>Gói cước đăng ký</Text>
                            <Text style={{color: 'white', fontWeight: 400, fontSize: 11, marginBottom: 5}}>Ngày bắt đầu dd/mm/yy hh/mm/ss</Text>
                            <Text style={{color: 'white', fontWeight: 400, fontSize: 11}}>Ngày kết thúc dd/mm/yy hh/mm/ss</Text>
                        </View>
                        <Text style={{paddingLeft: 20, fontSize: 14, marginVertical: 20, fontWeight: 'bold'}}>Ưu đãi còn lại</Text>
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginBottom: 20}}>
                            <Text style={{fontSize: 14, width: '50%'}}>SMS ngoại mạng</Text>
                            <View >
                                <Text style={{fontSize: 14}}>Data gói chính</Text>
                                <Text style={{fontSize: 14, fontWeight: 700}}>29865 MB</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginBottom: 20}}>
                            <View style={{width: '50%'}}>
                                <Text style={{fontSize: 14}}>SMS nội mạng</Text>
                                <Text style={{fontSize: 14, fontWeight: 700}}>100 SMS</Text>
                            </View>
                            <Text style={{fontSize: 14}}>Data gói phụ</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginBottom: 40}}>
                            <Text style={{fontSize: 14, width: '50%'}}>Voice nội mạng</Text>
                            <Text style={{fontSize: 14}}>Data khuyến mại</Text>
                        </View>
                        <Text style={{paddingLeft: 20, fontSize: 14}}>Voice ngoại mạng</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default TTTK;