import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {
    Center,
    Flex, Spacer,
    Image,
} from 'native-base'
import { styles } from './styles'
import SwitchSelector from "react-native-switch-selector";
import { FontSizeText } from '@theme/size'
import IconArrowBack from '@components/icon/arrow-back';
import { color } from '@theme/color';
import { Img } from '@images';
import IconChevronRight from '@components/icon/chevron-right';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'


interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}




export function GlassesScreen(props: Props) {

    const insets = useSafeAreaInsets()
    const spaceLine = 20

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                onPress={()=>props.navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: insets.top + 10,
                    left: 25,
                    zIndex: 9999
                }}
            >
                <IconArrowBack color="#fff" />
            </TouchableOpacity>

            <Center style={{ marginTop: 10 }}>
                <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20), fontWeight: 'bold' }}>
                    Kết nối thiết bị
                </Text>
            </Center>

            <View style={{ marginTop: 20 }}></View>
            
            {/* main */}
            <View style={{ ...styles.container, backgroundColor: "#F3F3F3", paddingTop: 20 }}>

                <Text style={{...styles.textDefault, fontSize: FontSizeText(25), fontWeight: 'bold', color: color.primaryDark}}>
                    Kính Foresy H
                </Text>
                <Center mt="3">
                    <Image source={Img.glassesDevice} alt="avatar" borderRadius={0} style={{width: 300, height: 125}} resizeMode="cover" />
                </Center>

                <View style={{ marginTop: 30 }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Kết nối qua
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="Bluetooth" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Thời lượng pin
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="98%" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Thông báo
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="Mặc định" editable={false} />
                </Flex>

                {/* <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Liên lạc khẩn
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="093 329 1536" editable={false} />
                </Flex> */}

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Trạng thái
                    </Text>

                    <SwitchSelector
                        initial={0}
                        onPress={value => console.log(value)}
                        textColor={"#2B418A"} //'#7a44cf'
                        selectedColor={"#fff"}
                        buttonColor={"#2B418A"}
                        borderColor={"#2B418A"}
                        borderRadius={0}
                        hasPadding={false}
                        height={30}
                        style={{
                            borderWidth: 2,
                            borderColor: "#2B418A",
                            borderRadius: 5,
                            overflow: "hidden",
                            width: 150,
                        }}
                        options={[
                            { label: "Bật", value: "true", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                            { label: "Tắt", value: "false", } //images.masculino = require('./path_to/assets/img/masculino.png')
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                    />
                </Flex>


            </View>
            {/* end main */}
        </SafeAreaView>
    )
}