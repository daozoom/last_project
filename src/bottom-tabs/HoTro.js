import React, { Component, useState  } from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    Modal,
    Animated
} from 'react-native'

const HoTro = ({navigation}) => {
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

    return(
        <View>
            <View style={{height: 100, width: '100%', backgroundColor: 'red', borderBottomWidth: 1, borderBottomColor: '#C0C0C0', paddingTop: 20, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15}}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{marginRight: 65}}>
                    <Image source={require('../images/back.png')} style={{width: 15, height: 15, tintColor: 'white'}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, color: 'white', fontWeight: 600, marginLeft: 20}}>
                    Hỗ trợ khách hàng
                </Text>
            </View>
            <View style={{alignItems: 'center', backgroundColor: '#EEEEEE'}}>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TouchableOpacity style={{width: 110, height: 90, alignItems: 'center', justifyContent: 'center', shadowOpacity:0.3, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, backgroundColor: 'white', borderRadius: 10}}>
                            <Image source={require('../images/phone-call.png')} style={{width: 40, height: 40, marginBottom: 10, tintColor: 'red'}}/>
                            <Text style={{fontSize: 12, fontWeight: 700}}>Hotline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 110, height: 90, alignItems: 'center', justifyContent: 'center', shadowOpacity:0.3, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10}}>
                            <Image source={require('../images/chat.png')} style={{width: 40, height: 40, marginBottom: 10, tintColor: 'red'}}/>
                            <Text style={{fontSize: 12, fontWeight: 700}}>Chat với CSKH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 110, height: 90, alignItems: 'center', justifyContent: 'center', shadowOpacity:0.3, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, backgroundColor: 'white', borderRadius: 10}}>
                            <Image source={require('../images/map.png')} style={{width: 40, height: 40, marginBottom: 10, tintColor: 'red'}}/>
                            <Text style={{fontSize: 12, fontWeight: 700}}>Danh sách đại lý</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 350, height: 120, backgroundColor: '#00CED1', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10}}>
                        <Text style={{textAlign: 'left', width: 320, marginBottom: 20, fontSize: 16, fontWeight: 700, color: 'white'}}>Câu hỏi thường gặp</Text>
                        <TextInput style={{width: 320, height: 50, backgroundColor: 'white', paddingLeft: 10}} placeholderTextColor={'#808080'} placeholder='Nhập từ khóa'>
                        </TextInput>
                        <TouchableOpacity style={{position: 'absolute', bottom: 30, right: 30}}>
                            <Image source={require('../images/search.png')} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 350, height: 70 }}>
                        <TouchableOpacity onPress={toggleModal} style={{flex: 1, marginBottom: 10, borderWidth: 1, backgroundColor: 'white', borderColor: '#C0C0C0', marginTop: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft: 10}}>Chọn nhóm câu hỏi</Text>
                            <Image source={require('../images/arrow-to-the-bottom.png')} style={{width: 20, height: 20, marginRight: 10}}/>
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
                                            <Text>Hỗ trợ quá trình sử dụng</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                            <Text>iTel Club</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                            <Text>Kênh liên hệ, hỗ trợ</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                            <Text>Đặt hàng, thanh toán, vận chuyển</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                            <Text>iTel Game</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{borderBottomWidth: 1, paddingLeft: 30, paddingVertical: 15, borderColor: '#EEEEEE'}}>
                                            <Text>Thông tin thuê bao</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </Animated.View>
                            </TouchableOpacity>
                        </Modal>
                    </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: 3500 }} showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cách kiểm tra thông tin thuê bao iTel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Hình thức đăng ký thông tin thuê bao iTel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Nhận được tin nhắn bổ sung thông tin thuê bao, nếu không bổ sung thì sẽ như thế nào?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thủ tục đăng ký thông tin thuê bao iTel gồm những gì?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Để kích hoạt thuê bao cần làm gì?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thuê bao bị khóa do không kích hoạt thì phải làm gì để tiếp tục sử dụng?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thủ tục chuyển chủ quyền như thế nào?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thuê bao đã đăng ký thông tin, sau bao lâu không kích hoạt thì bị khóa?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Các trường hợp đăng ký thông tin thuê bao không được chấp nhận</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thủ tục chuyển chủ quyền đối với các số thuê bao được biếu, tặng, cho không chính chủ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Vòng đời thuê bao iTel như thế nào(còn gọi là thời hạn sử dụng sim)?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cập nhật thông tin thuê bao, chuyển chủ quyền thuê bao có mất phí không?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cấu hình APN của iTel là gì?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cách đăng ký, kiểm tra, hủy của các gói cước dữ liệu?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>iTel có mấy loại tài khoản?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cách cài đặt eSIM của nhà mạng iTel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Thủ tục cấp lại SIM/eSIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Phí thay SIM/eSIM là bao nhiêu?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>iTel có dịch vụ 3G/4G chưa?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cách đăng ký dịch vụ 3G/4G?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>iTel hiện nay đang cung cấp các gói 3G/4G nào?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Sử dụng hết dung lượng data (sau khi đã hết số MB/GB tốc độ cao), số phút thoại, số SMS miễn phí thì cước phí sẽ tính như thế nào?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cước Data dùng theo dung lượng được tính như thế nào?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Có thể chia sẻ dữ liệu từ thuê bao iTel của mình không?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Các hình thức nạp tiền cho thuê bao iTel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Cách kiểm tra tài khoản chính?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Có thể mua sim iTel ở đâu?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Đã đặt SIM nhưng chưa nhận được?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Có được dùng thử SIM không?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 350, height: 70, borderRadius: 5, marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', shadowOpacity:0.1, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }}}>
                            <View style={{width: 30, height: 30, borderRadius: 20, marginHorizontal: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', shadowOpacity:0.2, shadowColor: 'black', shadowOffset: { width: 0, height: 0.1 }}}>
                                <Text style={{opacity: 0.4}}>+</Text>
                            </View>
                            <Text style={{flex: 1}}>Khi đặt mua sim, hình thức thanh toán như thế nào?</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
            </View>
        </View>
    )
}

export default HoTro;