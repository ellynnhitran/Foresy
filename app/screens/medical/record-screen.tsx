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
import IconReaded from '@components/icon/readed'
import IconNoRead from '@components/icon/no-read'
import IconArrowBack from '@components/icon/arrow-back'
import { color } from '@theme/color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faPhoneAlt, faVideo, faChevronRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';



interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}



export function MedicalRecordScreen(props: Props) {

    const insets = useSafeAreaInsets();

    const [_statusSwitch, set_statusSwitch] = useState(false)

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
                    Hồ sơ bệnh án
                </Text>
            </Center>

            <ScrollView style={{ ...styles.container_padding }}>

                <View style={{ marginBottom: 50 }}></View>
                <Flex direction="row" justify="space-between" align="flex-start">
                    <View style={{ width: '70%' }}>
                        <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20) }}>
                            Chia sẽ dữ liệu
                        </Text>
                        <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(14), fontWeight: '400' }}>
                            Cho phép bệnh viện truy cập thông số sức khoẻ
                        </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#E5E5E5", true: "#FF9B70" }}
                        thumbColor={_statusSwitch ? "#fff" : "#fff"}
                        ios_backgroundColor="#E5E5E5"
                        onValueChange={(value)=>set_statusSwitch(value)}
                        value={_statusSwitch}
                    />
                </Flex>

                <View style={{marginTop: 50}}></View>

                <TouchableOpacity activeOpacity={0.8} onPress={()=> props.navigation.navigate('MedicalScheduleScreen')}>
                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{...styles.textDefault, color: "white", fontSize: FontSizeText(17)}}>
                        Lịch trình khám sức khoẻ
                    </Text>
                    <FontAwesomeIcon icon={faChevronRight} size={20} color="white" />
                </Flex>
                </TouchableOpacity>

                <View style={{marginTop: 25, marginBottom: 25, height: 1, width: '100%', backgroundColor: "#4C5678"}}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{...styles.textDefault, color: "white", fontSize: FontSizeText(17)}}>
                        Kết nối dữ liệu với bệnh viện
                    </Text>
                    <FontAwesomeIcon icon={faChevronRight} size={20} color="white" />
                </Flex>

                <View style={{marginTop: 25, marginBottom: 25, height: 1, width: '100%', backgroundColor: "#4C5678"}}></View>

                <Flex direction="row" justify="space-between" align="center">
                    <Text style={{...styles.textDefault, color: "white", fontSize: FontSizeText(17)}}>
                        Thông tin sức khoẻ chi tiết
                    </Text>
                    <FontAwesomeIcon icon={faChevronRight} size={20} color="white" />
                </Flex>


            </ScrollView>
        </SafeAreaView>
    )
}
