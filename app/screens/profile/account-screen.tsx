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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'


interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}


export function AccountScreen(props: Props) {


    const insets = useSafeAreaInsets()
    const spaceLine = 20

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: insets.top + 10,
                    left: 25,
                    zIndex: 99999,
                    // backgroundColor: "red"
                }}
            >
                <IconArrowBack color="#fff" />
            </TouchableOpacity>

            <Center style={{ marginTop: 10 }}>
                <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20), fontWeight: 'bold' }}>
                    Thiết lập tài khoản
                </Text>
            </Center>

            <View style={{ marginTop: 20 }}></View>

            <View style={{ ...styles.container, backgroundColor: "#F3F3F3", paddingTop: 20 }}>

                <Center>
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={125} />
                </Center>

                <View style={{ marginTop: 30 }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Tên
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="Phương Nhi" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Sinh nhật
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="01/01/1990" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Chiều cao
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="185cm" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Cân nặng
                    </Text>
                    <TextInput style={{ ...styles.textDefault, color: "#2B418A", fontSize: FontSizeText(18) }} placeholderTextColor="#2B418A" placeholder="75kg" editable={false} />
                </Flex>

                <View style={{ width: '100%', height: 1, backgroundColor: "#E6E6E6", marginTop: spaceLine, marginBottom: spaceLine }}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#707070", fontWeight: 'bold' }}>
                        Giới tính
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
                            { label: "Name", value: "0", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                            { label: "Nữ", value: "1", } //images.masculino = require('./path_to/assets/img/masculino.png')
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                    />
                </Flex>


            </View>
        </SafeAreaView>
    )
}