import React, { useState, useEffect } from 'react'
import{
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Linking,
    Alert
} from 'react-native'
import First from './First';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = async () => {
        if (phoneNumber === '0123456789' || phoneNumber === '0987654321') {
        try {
            await AsyncStorage.setItem('userToken', 'userTokenValue'); 
            navigation.navigate('HomeTabs');
        } catch (error) {
            console.log('Error saving login info:', error);
        }
        } else {
        Alert.alert('Lỗi', 'Số điện thoại không chính xác hoặc chưa được kích hoạt!');
        }
    };
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogin = () => {
    //     // Thực hiện xác thực đăng nhập ở đây
    //     // Ví dụ: Kiểm tra phoneNumber có hợp lệ không
    //     if (phoneNumber === '0123456789' || phoneNumber === '0987654321') {
    //       setIsLoggedIn(true);
    //       navigation.navigate('HomeTabs'); // Chuyển hướng sau khi đăng nhập thành công
    //     } else {
    //         Alert.alert('Lỗi', 'Số điện thoại không chính xác.');
    //     }
    //   };

    // const handleLinkPress = () => {
    // Linking.openURL(''); 
    // };
    return(
        <SafeAreaView style={styles.container}>

            {/* Phần 1 */}
            <View style={styles.item1}>
                <TouchableOpacity onPress={() => navigation.navigate(First)} style={styles.TOexit}>
                    <Image source={require('../images/exit.png')} style={styles.imgexit}/>
                </TouchableOpacity>
            </View>

            {/* Phần 2 */}
            <View style={styles.item2}>
                <Image source={require('../images/itel_do.jpg')} style={styles.imgitel}/>
            </View>

            {/* Phần 3 */}
            <View style={styles.item3}>

                {/* Phần 3.1 */}
                <View style={styles.p31}>
                    <Image source={require('../images/smartphone.png')} style={styles.imgTextInput}/>
                    <TextInput value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} placeholder='Số điện thoại' style={styles.TextInput}/>
                </View>

                {/* Phần 3.2 */}
                <View style={styles.p32}>
                    <TouchableOpacity style={styles.TOButton} onPress={handleLogin}>
                        <Text style={styles.TOButtonText}>
                            Xác nhận
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TOImgFI}>
                        <Image source={require('../images/face-id.png')} style={styles.imgFI}/>
                    </TouchableOpacity>
                </View>

                {/* Phần 3.3 */}
                <View style={styles.p33}>
                    <TouchableOpacity style={styles.TOLogin}>
                        <Image source={require('../images/network.png')} style={styles.img33}/>
                        <Text style={styles.text33}>
                            Đăng nhập bằng 3G / 4G
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TOLogin}>
                        <Image source={require('../images/zalo-icon.png')} style={styles.img33}/>
                        <Text style={styles.text33}>
                            Đăng nhập bằng Zalo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TOLogin}>
                        <Image source={require('../images/apple-icon.jpg')} style={styles.img33}/>
                        <Text style={styles.text33}>
                            Đăng nhập bằng Apple
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.TOmxh}>
                        <TouchableOpacity style={styles.TOgoogle}>
                            <Image source={require('../images/icon-google.png')} style={styles.imgmxh}/>
                            <Text style={styles.textmxh}>
                                Google
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TOfacebook}>
                            <Image source={require('../images/icon-facebook.jpg')} style={styles.imgmxh}/>
                            <Text style={styles.textmxh}>
                                Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Phần 4 */}
            <View style={styles.item4}>
                <View style={styles.viewtextp41}>
                <Text style={styles.textp4}>
                    Bằng việc Đăng nhập, bạn đã đồng ý thực hiện mọi giao dịch theo{' '}
                    <Text style={styles.textp41} /*onPress={handleLinkPress}*/>
                        Điều khoản sử dụng và Chính sách bảo mật của iTel
                    </Text>
                </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    // Khung
    container:{
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center', 
    },

    // Phần 1
    item1: {
        width: '100%', 
        height: '10%', 
        alignItems:'flex-end'
    },
    TOexit: {
        width: '10%',
        margin: 15
    },
    imgexit: {
        width: 30, 
        height: 30
    },

    // Phần 2
    item2: {
        width: '100%', 
        height: '30%', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    imgitel: {
        width: 200, 
        height: 200,
        resizeMode: 'contain'
    },

    // Phần 3
    item3: {
        width: '100%', 
        height: '50%',
        alignItems: 'center',
    },

        // Phần 3.1
        p31: {
            width: '100%', 
            height: '20%',
            justifyContent: 'center', 
            alignItems: 'center'
        },
        imgTextInput: {
            width: 30, 
            height: 30, 
            position:'absolute', 
            left: 30,
            zIndex: 1
        },
        TextInput: {
            width:'90%', 
            height: 50, 
            borderWidth: 1, 
            paddingLeft: 120, 
            borderRadius:5,
            borderColor: '#DCDCDC',
            backgroundColor: '#FFFAF0',
        },

        // Phần 3.2
        p32: {
            width: '100%', 
            height: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        TOButton: {
            backgroundColor:'red', 
            width: '70%', 
            height: 50, 
            marginRight: 25,
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 5
        },
        TOButtonText: {
            color:'white', 
            fontWeight:'bold'
        },
        TOImgFI: {
            backgroundColor:'red', 
            width: 50, 
            height: 50,
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius:5
        },
        imgFI: {
            width: 30, 
            height: 30, 
            tintColor:'white'
        },
        // Phần 3.3
        p33: {
            width: '100%',
            height: '60%',
            alignItems: 'center', 
            marginVertical: 10,
        },
        TOLogin: {
            width: '90%',
            height: 50,
            borderRadius:5,
            marginVertical: 5,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#FFFAF0'
        },
        text33: {
            fontWeight:'bold', 
        },
        img33: {
            width: 30,
            height: 30,
            resizeMode:'contain',
            marginHorizontal: 10
        },
        TOmxh:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '20%',

        },
        TOgoogle:{
            width:'40%',
            height: 60,
            backgroundColor: '#FF6347',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 18,
            borderRadius:5
        },
        TOfacebook:{
            width:'40%',
            height: 60,
            backgroundColor: '#1C86EE',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 18,
            borderRadius:5
        },
        imgmxh:{
            resizeMode:'contain',
            width: 30,
            height: 30,
        },
        textmxh:{
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 10
        },
    // Phần 4
    item4: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        marginTop: 20,
        paddingTop: 10,
        borderColor: '#DCDCDC',
    },
    viewtextp41:{
        width: '95%',
        height: '100%'
    },
    textp4: {
    },
    textp41: {
        color: 'red',
        textDecorationLine: 'underline'
    },
});

export default Login;