import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import ThongBao from '../screens/ThongBao';
import TTTK from '../screens/TTTK';

const TrangChu = ({navigation}) => {
    // const navigation = useNavigation();

    return(
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{width: '100%', height: 300, backgroundColor: 'red', alignItems: 'center'}}>
                    <View style={{width: '100%', height: '35%', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.navigate(ThongBao)}>
                            <Image source={require('../images/bell.png')} style={{width: 25, height: 25, tintColor: 'white'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image source={require('../images/menu.png')} style={{width: 25, height: 25, tintColor: 'white'}}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(TTTK)} activeOpacity={0.5} style={{flexDirection: 'row', width: '90%', height: '25%', borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'space-between', paddingHorizontal: 20}}>
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
                    <View style={{width: '100%', height: '40%', flexDirection: 'row'}}>
                        <View style={{width: '50%', paddingLeft: 20}}>
                            <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>
                                Tài khoản gốc
                            </Text>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5}}>
                                10,547,563,924 đ
                            </Text>
                            <Text style={{color: 'white',fontSize: 12, marginTop: 5}}>
                                Hạn sử dụng
                            </Text>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5}}>
                                12/12/2100
                            </Text>
                        </View>
                        <View style={{width: '50%', marginLeft: 15}}>
                            <TouchableOpacity activeOpacity={1} style={{width: '80%', height: '35%',flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 50, marginVertical: 10}}>
                                <Image source={require('../images/wallet.png')} style={{width: 20, height: 20, marginHorizontal: 10}}/>
                                <Text style={{marginLeft: 10}}>
                                    Nạp tiền
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(TTTK)} activeOpacity={1} style={{width: '80%', height: '35%',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 50}}>
                                <Text style={{color: 'white'}}>
                                    Tra cước
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} style={{width: '100%', height: 60, backgroundColor: 'white', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#DCDCDC'}}>
                    <View style={{width: '33%', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../images/sim-card.png')} style={{width: 25, height: 25, marginHorizontal: 5}}/>
                        <View>
                            <Text>Gói cước</Text>
                            <Text style={{fontWeight: 'bold'}}>MAY</Text>
                        </View>
                    </View>
                    <View style={{width: '33%', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../images/network.png')} style={{width: 25, height: 25, tintColor: 'black', marginHorizontal: 5}}/>
                        <View>
                            <Text>Data còn lại/ngày</Text>
                            <Text style={{fontWeight: 'bold'}}>999GB</Text>
                        </View>
                    </View>
                    <View style={{width: '34%', alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                        <Text>Thời hạn</Text>
                        <Text style={{fontWeight: 'bold'}}>10 năm</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: '100%', height: 230, backgroundColor: 'white', alignItems: 'center'}}>
                    <Image source={require('../images/banner.jpg')} style={{width: '98%', height: 200, resizeMode: 'contain' }}/>
                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5}}>COMBO SIM + GÓI CƯỚC CHỈ 70K KHI NHẬP MÃ...</Text>
                </View>
                <View style={{width: '100%', height: 250, backgroundColor: 'white', alignItems: 'center'}}>
                    <Swiper loop={false} style={{paddingLeft: 20, resizeMode: 'contain'}} dotStyle={{backgroundColor: 'gray', width: 8, height: 8, borderRadius: 5, marginHorizontal: 3, opacity: 0.28, marginBottom: -10}} activeDotStyle={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 5, marginHorizontal: 3, marginBottom: -10}}>
                        <View style={{width: '90%', height: '95%', backgroundColor: 'white', borderRadius: 5, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, marginVertical: 5}}>
                            <View style={{width: '100%', height: '46%', flexDirection: 'row'}}>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/bank.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Tài chính{'\n'}bảo hiểm</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/destination.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Du lịch{'\n'}đi lại</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/promotional.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Mua sắm{'\n'}</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/fast-food.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Ăn uống{'\n'}</Text>
                                </View>
                            </View>
                            <View style={{width: '100%', height: '46%', flexDirection: 'row'}}>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/gift-box.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Săn quà{'\n'}iZui</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/bank-card.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Nạp tiền{'\n'}đi lại</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/sim-card-1.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Sim Data{'\n'}</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/sim-card-2.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Sim số đẹp{'\n'}</Text>
                                </View>
                            </View>
                            <View style={{width: '100%', height: '8%'}}>
                            </View>
                        </View>
                        <View style={{width: '90%', height: '95%', backgroundColor: 'white', borderRadius: 5, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, marginVertical: 5}}>
                            <View style={{width: '100%', height: '46%', flexDirection: 'row'}}>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/charging-station.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Điện thoại{'\n'}thiết bị</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/sim-active.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Kích hoạt{'\n'}SIM</Text>
                                </View>
                                <View style={{width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                        <Image source={require('../images/sim-card-3.png')} style={{width: 30, height: 30}}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Cập nhật{'\n'}TTTB</Text>
                                </View>
                            </View>
                            <View style={{width: '100%', height: '46%'}}>
                                </View>
                            <View style={{width: '100%', height: '8%'}}>
                            </View>
                        </View>
                    </Swiper>
                </View>
                <View style={{width: '100%', height: 280, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../images/money-currency.png')} style={{width: 40, height: 40, tintColor: 'red'}}/>
                            <Text style={{color: 'red', fontWeight: '900', fontSize: 25, marginLeft: 5}}>Gói <Text style={{color: 'black'}}>Cước</Text></Text>
                        </View>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
                        <TouchableOpacity style={{width: 170, height: 170, marginHorizontal: 10}}>
                            <LinearGradient colors={['#E54646','#FFFF99']} start={{ x: 0, y: 0.7 }} end={{ x: 1.4, y: 0.5}} style={{width: '100%', height: '100%', borderRadius: 10,  justifyContent: 'center', paddingLeft: 10}}>
                                <Text style={{fontStyle: 'italic', color: 'white', fontWeight: 'bold', fontSize: 25, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>MAY</Text>
                                <View style={{width: '35%', height: 2, backgroundColor: 'white', marginBottom: 5}}></View>
                                <Text style={{color: 'white', height: 60, fontSize: 13}}>4GB/ngày{'\n'}Miễn phí gọi nội{'\n'}mạng</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>77.000đ/tháng</Text>
                            </LinearGradient>
                            <View style={{width: 130, height: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20, position: 'absolute', bottom: -10, right: 20, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                    <Text style={{color: 'red', fontWeight: 'bold'}}>Đăng ký</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 170, height: 170, marginRight: 10}}>
                            <LinearGradient colors={['#FFFF99','#CC66FF']} start={{ x: 0, y: 1.1 }} end={{ x: 1.2, y: 1}} style={{width: '100%', height: '100%', borderRadius: 10,  justifyContent: 'center', paddingLeft: 10}}>
                                <Text style={{fontStyle: 'italic', color: 'white', fontWeight: 'bold', fontSize: 25, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>DPLUS4</Text>
                                <View style={{width: '30%', height: 2, backgroundColor: 'white', marginBottom: 5}}></View>
                                <Text style={{color: 'white', height: 60, fontSize: 12}}>2GB/ngày</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>15.000đ/ngày</Text>
                            </LinearGradient>
                            <View style={{width: 130, height: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20, position: 'absolute', bottom: -10, right: 20, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                <Text style={{color: 'red', fontWeight: 'bold'}}>Đăng ký</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 170, height: 170}}>
                            <LinearGradient colors={['#33CCCC','#00CC66']} start={{ x: 0, y: 1.1 }} end={{ x: 1.2, y: 1}} style={{width: '100%', height: '100%', borderRadius: 10,  justifyContent: 'center', paddingLeft: 10}}>
                                <Text style={{fontStyle: 'italic', color: 'white', fontWeight: 'bold', fontSize: 25, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>DPLUS1</Text>
                                <View style={{width: '30%', height: 2, backgroundColor: 'white', marginBottom: 5}}></View>
                                <Text style={{color: 'white', height: 60, fontSize: 12}}>300MB/ngày</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>5.000đ/ngày</Text>
                            </LinearGradient>
                            <View style={{width: 130, height: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20, position: 'absolute', bottom: -10, right: 20, shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                                <Text style={{color: 'red', fontWeight: 'bold'}}>Đăng ký</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{width: '100%', height: 250, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 20, marginVertical: 5}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../images/shooting-star.png')} style={{width: 30, height: 30, tintColor: 'red'}}/>
                            <Text style={{color: 'red', fontWeight: '900', fontSize: 25, marginLeft: 10}}>iTel <Text style={{color: 'black'}}>CLUB</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>
                                Xem tất cả
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 5}}>
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
                        <TouchableOpacity style={{width: 150, height: 170, borderRadius: 5, alignItems: 'center', marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_club_2.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                            <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Nhóc Giftshop 10...</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                <Image source={require('../images/itel_club_icon_2.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
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
                        <TouchableOpacity style={{width: 150, height: 170, borderRadius: 5, alignItems: 'center', marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_club_3.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                            <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher] Ô{'\n'}mai Hồng Lam 10...</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                <Image source={require('../images/itel_club_icon_3.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
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
                        <TouchableOpacity style={{width: 150, height: 170, borderRadius: 5, alignItems: 'center', marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_club_4.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                            <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Bready 100.000 đ</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                <Image source={require('../images/itel_club_icon_4.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
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
                        <TouchableOpacity style={{width: 150, height: 170, borderRadius: 5, alignItems: 'center', marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_club_5.jpg')} style={{width: '90%', height: '40%', resizeMode: 'stretch'}}/>
                            <Text style={{fontWeight: 'bold', marginTop: 15, marginBottom: -10}}>[UrBox Voucher]{'\n'}Bác Tôm 100.000 đ</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                <Image source={require('../images/itel_club_icon_5.jpg')} style={{width: 30, height: 30, borderRadius: 5}}/>
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
                    </ScrollView>
                </View>
                <View style={{width: '100%', height: 400, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 20, marginVertical: 5}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../images/open-book.jpg')} style={{width: 30, height: 30, tintColor: 'red'}}/>
                            <Text style={{color: 'red', fontWeight: '900', fontSize: 25, marginLeft: 10}}>iTel <Text style={{color: 'black'}}>TRUYỆN</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>
                                Xem tất cả
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 5}}>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginHorizontal: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_1.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Võ Đạo Độc Tôn</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 583</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_2.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Thần Hồn Võ Đế</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 342</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_3.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Tận Thế Người Trần</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 547</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_4.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Chàng Rể Đệ Nhất</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 291</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_5.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Tuyệt Phẩm Thánh Y</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 242</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_6.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Tiên Võ Đế Tôn</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 360</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_7.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Tiên Đế Trở Về</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 387</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_8.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Võ Ảnh 3000 Đạo</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 583</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_9.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Võ Đạo Độc Tôn</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 583</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 150, height: 230, borderRadius: 5, marginRight: 10, backgroundColor: 'white', shadowOpacity:0.5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }}}>
                            <Image source={require('../images/itel_truyen_10.jpg')} style={{width: '100%', height: '60%', borderRadius: 5}}/>
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 10}}>Võ Đạo Độc Tôn</Text>
                            <Text style={{fontSize: 12, marginTop: 30, marginLeft: 10}}>Cập nhật đến chap 583</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default TrangChu;