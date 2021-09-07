import React, {ReactNode} from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props{
    children: ReactNode
}


export default function AuthLayout(props: Props) {

    return (
        <ImageBackground
            source={require('@assets/images/auth-bg.png')}
            style={styles.bg}
            resizeMode='cover'
        >
            <SafeAreaView
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    {/* logo */}
                    <Image source={require('@assets/images/logo.png')} style={{ width: 364, height: 91, marginBottom: 50 }} />

                    {/* form */}
                    <View
                        style={styles.form}
                    >

                        <Image 
                            source={require('@assets/images/glasses.png')} 
                            style={{
                                width: 120, height: 120*433/508,
                                position: 'absolute',
                                top: -40,
                                zIndex: 9999,
                                right: -40
                            }} 
                        />

                        {props.children}

                    </View>

                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}