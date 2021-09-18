import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Switch
} from 'react-native'
import {
    Container,
    Center,
    Flex, Spacer,
    Box, Icon,
    SearchIcon,
    Image
} from 'native-base'
import { styles } from './styles'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontSizeText } from '@theme/size'
import { fontCustom } from '@theme/fonts'
import IconArrowBack from '@components/icon/arrow-back'
import { color } from '@theme/color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const dataHospital = [
    {
        name: "Bệnh viện Hồng Ngọc",
        active: false
    },
    {
        name: "Bệnh viện Sài Gòn",
        active: false
    },
    {
        name: "Bệnh viện Đại học Y Hà Nội",
        active: true
    },
    {
        name: "Bệnh viện Thủ Đức",
        active: false
    },
]

interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}

export function ConnectHospitalScreen(props: Props) {

    const insets = useSafeAreaInsets();

    const [_statusSwitch, set_statusSwitch] = useState(false)

    const [_hospitals, set_hospitals] = useState(dataHospital)

    const onChooseHospital = (index: number) => {
        let arr = [..._hospitals];
        arr[index].active = !arr[index].active;
        set_hospitals(arr)
    }


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
                    Kết nối với bệnh viện
                </Text>
            </Center>


            {/* search */}
            <Center backgroundColor="#343D5B" style={{ padding: 7 }} mt="4">
                <Flex direction="row" align="center" style={{ width: '90%', backgroundColor: "#ffffff33", borderRadius: 7 }}>
                    <SearchIcon style={{ width: 15, marginRight: 10, marginLeft: 10 }} color="#8E8E93" />
                    <TextInput style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(15), width: '80%' }} placeholderTextColor="#8E8E93" placeholder="Tìm kiếm" />
                </Flex>
            </Center>
            {/* end search */}


            <View style={{ ...styles.container_padding, marginTop: 20, marginBottom: 10 }}>
                <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20) }}>
                    Chọn bệnh viện
                </Text>
            </View>

            <ScrollView style={{ ...styles.container_padding }}>

                {
                    _hospitals.map((hospital, index: number) => {
                        if (!hospital.active)
                            return (
                                <View key={hospital.name}>
                                    <TouchableOpacity activeOpacity={1} onPress={()=>onChooseHospital(index)}>
                                        <Flex direction="row" align="center" backgroundColor="#fff" style={{ borderRadius: 7 }} p="3">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} color="#3865E0" size={20} />
                                            <Text style={{ ...styles.textDefault, fontSize: FontSizeText(14), marginLeft: 10 }}>
                                                {hospital.name}
                                            </Text>
                                        </Flex>
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 15 }}></View>
                                </View>
                            )
                        else return (
                            <View key={hospital.name}>
                                <TouchableOpacity activeOpacity={1} onPress={()=>onChooseHospital(index)}>
                                    <Flex direction="row" align="center" backgroundColor="#fff" style={{ borderRadius: 7, backgroundColor: "#3864DC" }} p="3">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#F95656" size={20} />
                                        <Text style={{ ...styles.textDefault, fontSize: FontSizeText(14), marginLeft: 10, color: "#fff" }}>
                                            {hospital.name}
                                        </Text>
                                    </Flex>
                                </TouchableOpacity>
                                <View style={{ marginTop: 15 }}></View>
                            </View>
                        )
                    })
                }






            </ScrollView>

            <Center style={{ padding: 20 }}>
                <TouchableOpacity style={{ backgroundColor: "#FF8D23", width: '100%', padding: 10, borderRadius: 7 }}>
                    <Text style={{ ...styles.textDefault, fontSize: FontSizeText(20), color: "#fff", textAlign: 'center' }}>Kết nối</Text>
                </TouchableOpacity>
            </Center>
        </SafeAreaView>
    )
}
