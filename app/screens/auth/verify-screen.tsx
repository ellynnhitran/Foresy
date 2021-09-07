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

export function VerifyScreen(props: Props) {

    return (

        <AuthLayout>
            {/* input */}
            <View style={styles.inputContainer}>
                <Image source={require('@assets/images/icon-check-bag.png')} style={{ width: 25, height: 25 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mã xác thực"
                    placeholderTextColor={color.textPlaceholder}
                />
            </View>
        
            {/* input */}
            <View style={styles.inputContainer}>
                <Image source={require('@assets/images/icon-protect.png')} style={{ width: 21, height: 26 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                    placeholderTextColor={color.textPlaceholder}
                />
            </View>

            

            <View style={{ marginTop: 15, marginBottom: 15 }}>
                <View style={styles.alertSuccessBg}>
                    <Text style={styles.alertSuccessText}>Đã gửi mã xác nhận</Text>
                </View>
            </View>

            {/* button */}
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("LoginScreen")} >
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontSize: FontSizeText(18), fontWeight: 'bold', textTransform: 'uppercase' }}>Đăng ký</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular }} >Bạn chưa có mã? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("LoginScreen")} >
                    <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontWeight: 'bold' }}>Gửi lại</Text>
                </TouchableOpacity>
            </View>

           
        </AuthLayout>
    )
}