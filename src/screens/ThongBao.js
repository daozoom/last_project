import React, { Component } from 'react'
import{
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'

const ThongBao = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={{height: 80, width: '100%', borderBottomWidth: 1, borderBottomColor: '#C0C0C0', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/back.png')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 600}}>
                    Thông báo
                </Text>
                <TouchableOpacity>
                    <Image source={require('../images/bin.jpg')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
            </View>
            <View style={{height: 600, width: '100%', alignItems: 'center'}}>
                <View style={{height: 70, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Text>Thông báo iTel</Text>
                    <TouchableOpacity style={{borderBottomWidth: 1}}>
                        <Text >Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../images/cute.jpg')} style={{width: '90%', height: 350, marginBottom: 10}}/>
                <Text>Bạn hiện tại không có thông báo nào!</Text>
            </View>
        </SafeAreaView>
    )
}
export default ThongBao;