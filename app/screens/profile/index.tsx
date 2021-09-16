import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import {
    Center,
    Flex, Spacer,
    Image,
} from 'native-base'
import { styles } from './styles'
import { FontSizeText } from '@theme/size'
import { color } from '@theme/color';
import { Img } from '@images';
import IconChevronRight from '@components/icon/chevron-right';
import { StackNavigationProp } from '@react-navigation/stack';
import {MainNavigatorParamList} from '@navigators/main-navigator'
import {AuthActions} from '@actions/auth'


interface Props{
    navigation: StackNavigationProp<MainNavigatorParamList>
}


export function ProfileScreen(props:Props) {



    const logout = ()=>{
        AuthActions.logout()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Center mt="3">
                <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20), fontWeight: 'bold' }}>Trang cá nhân của tôi</Text>
            </Center>

            <View style={{ marginTop: 20 }}></View>

            <View style={{ ...styles.container, backgroundColor: "#F3F3F3", paddingTop: 20 }}>

                <Flex direction="row" justify="space-between" align="center">
                    {/* avatar + info */}
                    <Flex direction="row" align="center">
                        <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={70} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), fontWeight: '600' }}>
                                Phương Nhi
                            </Text>
                            <View style={{ marginBottom: 10 }}></View>
                            <View style={{ backgroundColor: '#1CBB1A', padding: 3, alignSelf: 'flex-start', paddingLeft: 10, paddingRight: 10, borderRadius: 1000 }}>
                                <Text style={{ ...styles.textDefault, fontSize: FontSizeText(12), fontWeight: '800', color: '#fff' }}>
                                    Sức khoẻ tốt
                                </Text>
                            </View>
                        </View>
                    </Flex>
                    {/* QR code */}
                    <TouchableOpacity>
                        <Image source={Img.iconQrCode} alt="qr-code" size={50} />
                    </TouchableOpacity>
                </Flex>

                <View style={{ marginTop: 20 }}></View>

                <TouchableOpacity onPress={()=>props.navigation.navigate('AccountScreen')} activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingAccount} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Thiết lập tài khoản</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingFriend} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Quản lý bạn bè</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingNotification} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Cài đặt thông báo</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('GlassesScreen')} activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingConnect} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Kết nối thiết bị</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingSupport} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Hỗ trợ</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>logout()} activeOpacity={1}>
                    <Flex direction="row" justify="space-between" align="center" mt="4">
                        <Flex direction="row" align="center">
                            <Image source={Img.iconSettingLogout} alt="setting-account" size={50} borderRadius={10} />
                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(18), marginLeft: 10 }}>Đăng xuất</Text>
                        </Flex>
                        <IconChevronRight color="#5E5E5E" />
                    </Flex>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    )
}