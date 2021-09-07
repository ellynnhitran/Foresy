import React from 'react';
import {
    View,
    Text,
    ImageBackground,
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


export function LoginScreen(props: Props) {

    return (

        <AuthLayout>
            {/* input */}
            <View
                style={styles.inputContainer}
            >
                <Image source={require('@assets/images/icon-email.png')} style={{ width: 25, height: 20 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor={color.textPlaceholder}
                />
            </View>

            {/* input */}
            <View
                style={styles.inputContainer}
            >
                <Image source={require('@assets/images/icon-protect.png')} style={{ width: 21, height: 26, marginRight: 4 }} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                    placeholderTextColor={color.textPlaceholder}
                    secureTextEntry={true}
                />
            </View>

            <View style={{ alignItems: 'flex-end', width: '100%', margin: 5 }}>
                <TouchableOpacity style={{ padding: 10 }} >
                    <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontWeight: 'bold' }}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            {/* button */}
            <TouchableOpacity style={styles.button} >
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontSize: FontSizeText(18), fontWeight: 'bold', textTransform: 'uppercase' }}>Đăng nhập</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontFamily: fontCustom.regular }} >Bạn chưa có tài khoản? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('RegisterScreen')} >
                    <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontWeight: 'bold' }}>Đăng ký</Text>
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