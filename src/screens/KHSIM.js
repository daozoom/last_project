import React, { Component } from 'react'
import{
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native'

const KHSIM = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.p1}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.TOp1}>
                    <Image source={require('../images/back.png')} style={styles.imgp1}/>
                </TouchableOpacity>
                <Text style={styles.textp1}>
                    Kích hoạt SIM
                </Text>
            </View>
            <View style={styles.p2}>
                <View style={styles.childp2}>
                    <View style={styles.childp21}>
                        <View style={styles.viewtextchildp2}>
                            <Text style={styles.textchildp2}>
                                Cách 1. Quét mã QR in trên tem sim hoặc được gửi về email
                            </Text>
                        </View>
                        <Image source={require('../images/sim1.png')} style={styles.imgchildp2}/>
                    </View>
                    <View style={styles.childp22}>
                        <View style={styles.viewtextchildp2}>
                            <Text style={styles.textchildp2}>
                                Cách 2. Quét mã Serial SIM
                            </Text>
                        </View>
                        <Image source={require('../images/sim2.png')} style={styles.imgchildp2}/>
                    </View>
                    <View style={styles.childp23}>
                        <TouchableOpacity style={styles.TOp231}>
                            <Text style={styles.textp231}>
                                Quét mã ngay
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.viewp231}>
                            <View style={styles.gachngang} />
                            <Text style={styles.hoac}>Hoặc</Text>
                            <View style={styles.gachngang} />
                        </View>
                        <TouchableOpacity style={styles.TOp232}>
                            <Text style={styles.textp232}>
                                Nhập mã thủ công
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    p1: {
        width: '100%',
        height: '13%',
        backgroundColor: '#E54646',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30
    },
    TOp1:{
        width: '10%',
        height: '20%',
        justifyContent: 'center',
        marginLeft: 20
    },
    imgp1: {
        width: 15,
        height: 15,
        tintColor: 'white',
        resizeMode: 'contain'
    },
    textp1:{
        flex: 1,
        color: 'white',
        fontWeight:'bold',
        marginLeft: 77,
        fontSize: 17
    },
    p2:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE9E9'
    },
    childp2:{
        width: '85%',
        height: '97%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20
    },
    viewtextchildp2:{
        height: 60,
        width: '95%',
        borderBottomWidth: 1,
        borderColor: '#EEE9E9',
        paddingTop: 10,
        paddingLeft: 10
    },
    textchildp2:{
        fontWeight: 'bold',
    },
    imgchildp2:{
        width: '80%',
        height: 200,
        resizeMode: 'contain'
    },
    childp21:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    childp22:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    childp23:{
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TOp231: {
        width: '60%',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textp231: {
        color: 'white',
        fontWeight: 'bold',
    },
    viewp231: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
        marginVertical: 10
    },
    gachngang: {
        flex: 0.2, 
        height: 1, 
        backgroundColor: 'red', 
        opacity: 0.5
    },
    hoac: {
        marginHorizontal: 5
    },
    TOp232: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textp232: {
        color: 'red',
        fontWeight: 'bold',
    },
})

export default KHSIM;