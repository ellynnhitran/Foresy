import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import { color } from '@theme/color'
import { fontCustom } from '@theme/fonts'
import { FontSizeText } from '@theme/size'
import AuthLayout from '@components/layouts/auth-layout';
import { StackNavigationProp } from '@react-navigation/stack';




interface Props{
    navigation: StackNavigationProp<any>
}

export function RegisterScreen(props: Props) {

    return (

        <AuthLayout>
            {/* input */}
            <View
                style={styles.inputContainer}
            >
                <Image source={require('@assets/images/icon-profile.png')} style={{ width: 25, height: 25 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Họ và tên"
                    placeholderTextColor={color.textPlaceholder}
                />
            </View>

            {/* input */}
            <View style={styles.inputContainer}>
                <Image source={require('@assets/images/icon-email.png')} style={{ width: 25, height: 25 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor={color.textPlaceholder}
                />
            </View>

            <View style={{ marginTop: 15, marginBottom: 15 }}>
                <View style={styles.alertErrorBg}>
                    <Text style={styles.alertErrorText}>Email đã tồn tại</Text>
                </View>
            </View>

            {/* button */}
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("VerifyScreen")} >
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontSize: FontSizeText(18), fontWeight: 'bold', textTransform: 'uppercase' }}>Gửi mã xác nhận</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular }} >Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("LoginScreen")} >
                    <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontWeight: 'bold' }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>

            {/* login with social */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>
                <TouchableOpacity>
                    <Image source={require('@assets/images/icon-gg.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <View style={{ width: 50 }}></View>
                <TouchableOpacity>
                    <Image source={require('@assets/images/icon-fb.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
        </AuthLayout>
    )
}