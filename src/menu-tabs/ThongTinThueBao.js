import React, { Component } from 'react'
import{
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar
} from 'react-native'

const ThongTinThueBao = ({navigation}) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <StatusBar barStyle={'light-content'} />
            <View style={{height: 100, width: '100%', backgroundColor: 'red', paddingTop:20, borderBottomWidth: 1, borderBottomColor: '#C0C0C0', alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginHorizontal: 20, marginRight: 60}}>
                    <Image source={require('../images/back.png')} style={{width: 20, height: 20, tintColor: 'white'}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 700}}>
                    Thông tin thuê bao
                </Text>
            </View>
            <ScrollView contentContainerStyle={{backgroundColor: 'white', paddingHorizontal: 20}}>
                <View style={{paddingVertical: 20}}>
                    <Text style={{fontSize: 20, fontWeight: 700}}>
                        Thông tin của bạn
                    </Text>
                </View>
                <View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>Họ tên</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>CMND</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>Cấp ngày</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>Nơi cấp</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>Địa chỉ thường trú</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 700}}>Ngày sinh</Text>
                        <View style={{height: 50, marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: '#BBBBBB', backgroundColor: '#EEEEEE'}}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ThongTinThueBao;