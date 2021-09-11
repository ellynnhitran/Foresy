import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    Container,
    Center
} from 'native-base'
import { styles } from './styles'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg'



export function AnlyticsScreen() {

    const [_fill, set_fill] = useState(90)

    return (
        <SafeAreaView style={styles.container}>
            <Center>
                <Image source={require('@assets/images/logo.png')} style={{ width: 200, height: 90 * 200 / 300 }} />
            </Center>

            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={_fill}
                duration={3000}
                tintColor="#00e0ff"
                lineCap="round"
                // renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875">
                    
                {
                    (fill) => (
                        <Text>Hello</Text>
                    )
                }

            </AnimatedCircularProgress>
        </SafeAreaView>
    )
}