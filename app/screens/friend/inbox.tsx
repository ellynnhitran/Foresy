import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,

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
import { faCheck, faPhoneAlt, faVideo, faChevronRight, faThumbsUp, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'
import { Img } from '@images';



interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}


const IconCheck = ({ color }: { color: string }) => {
    return (
        <View style={{ borderWidth: 2, borderColor: color, borderRadius: 100000, padding: 3, height: 20 }}>
            <FontAwesomeIcon icon={faCheck} color={color} size={10} />
        </View>
    )
}

export function InboxScreen(props: Props) {

    const dataChat = [
        {
            type: "me",
            text: ["Hello phương nhi, b khoẻ chứ ?"]
        },
        {
            type: "you",
            text: ["yehh tôi ổn b ơi"]
        },
        {
            type: "robot",
            text: ["Sức khoẻ phương nhi 8/10", "Nhưng có vẻ bạn ấy đang buồn, hic", "Bạn có thể rủ Phương Nhi đi ăn"]
        },
        {
            type: "me",
            text: ["Tối nay mình đi ăn nhé"]
        },
        {
            type: "you",
            text: ["Ăn gì cũng được."]
        },
        {
            type: "robot",
            text: ["Phương Nhi thích ăn đồ ăn Hàn Quốc, Nhật bản, hihi"]
        },
        {
            type: "me",
            text: ["Đồ ăn Nhật bản nhé"]
        },
        // {
        //     type: "robot",
        //     text: ["Các nhà hàng nhật bàn gần đây: Asami, Lẩu năm Nhật Bản,..."]
        // },
        {
            type: "you",
            text: ["Ok bạn luôn, bạn hiểu ý tớ ghê", "Ăn ở Lẩu nắm Nhật Bản nhé"]
        },
        {
            type: "me",
            text: ["hehe, bạn đi được mấy giờ nè"]
        },
        {
            type: "you",
            text: ["19h30 tôi sẽ tới nhé bạn"]
        },
        {
            type: "me",
            text: ["ok bạn nha, hẹn bạn ở đó."]
        },
        {
            type: "robot",
            text: ["Bạn có muốn đặt bàn tại Lẩu nắm Nhật Bản vào lúc 19:30"],
            actions: ["Tôi đồng ý", "Tôi từ chối", "Nhắc lại sau"]
        }
    ]

    return (
        <SafeAreaView style={styles.container}>

            <Flex direction="row" align="center" justify="space-between" style={styles.container_padding} mt="3">
                <Flex direction="row" align="center">
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <IconArrowBack color="#19A3FE" />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={45} ml="2" />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: FontSizeText(17), textTransform: 'capitalize' }}>
                            Phương Nhi
                        </Text>
                        <Text style={{ color: "#ffffff80", fontWeight: '600', fontSize: FontSizeText(13) }}>Menssenger</Text>
                    </View>
                </Flex>

                <Flex direction="row" align="center">
                    <FontAwesomeIcon icon={faPhoneAlt} color={"#19A3FE"} size={30} />
                    <View style={{ marginLeft: 25 }}></View>
                    <FontAwesomeIcon icon={faVideo} color={"#19A3FE"} size={30} />
                </Flex>
            </Flex>

            <ScrollView style={{ paddingLeft: 5, paddingRight: 5, marginTop: 10}}>

                {
                    dataChat.map((chat, index: number) => {
                        if (chat.type == "you")
                            return (
                                <Flex key={index} direction="row" align="flex-end" mt="3">
                                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={30} />
                                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginLeft: 15, maxWidth: "70%" }}>
                                    
                                    {
                                        chat.text.map((msg) => (

                                                <View key={msg} style={styles.boxMessage}>
                                                    <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>
                                                        {msg}
                                                    </Text>
                                                </View>

                                        ))
                                    }
                                            </View>

                                </Flex>
                            )
                        else if (chat.type == "me")
                            return (
                                <Flex key={index} direction="row" justify="flex-end" mt="3" align="flex-end">
                                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginRight: 5, maxWidth: "70%" }}>
                                        {
                                            chat.text.map((msg) => (
                                                <View style={styles.boxMessage}>

                                                    <Text key={msg} style={{ color: '#fff', fontSize: FontSizeText(17) }}>
                                                        {msg}
                                                    </Text>
                                                </View>

                                            ))
                                        }
                                    </View>
                                    <IconCheck color="#19A3FE" />
                                </Flex>
                            )
                        else return (
                            <Flex key={index} direction="row" align="flex-end" mt="3" alignSelf="flex-start">
                                {/* <Image source={Img.iconForesy} alt="avatar" borderRadius={100} size={30} /> */}
                                <View style={{ borderTopLeftRadius: 0, marginLeft: 15, maxWidth: "70%" }}>
                                
                                <FontAwesomeIcon icon={faLightbulb} color={"#FFF500"} size={30} style={{position: 'absolute', top: -10, right: -10, zIndex: 99}}/>

                                    {
                                        chat.text.map((msg) => (
                                            <View key={msg} style={{...styles.boxMessage, backgroundColor: "#11111173"}}>
                                                <Text style={{...styles.textDefault, fontWeight: '400', color: '#fff', fontSize: FontSizeText(15) }}>
                                                    {msg}
                                                </Text>
                                            </View>
                                        ))


                                    }
                                    <Flex direction="row" justify="flex-start" alignSelf="flex-start" wrap="wrap" >
                                        {
                                            chat?.actions?.map((action) => (

                                                <TouchableOpacity
                                                    style={{
                                                        padding: 5, borderRadius: 5,
                                                        paddingLeft: 10, paddingRight: 10,
                                                        backgroundColor: '#FF8D23',
                                                        marginTop: 7, marginLeft: 7
                                                    }}
                                                >
                                                    <Text style={{ color: "#fff", fontWeight: 'bold' }}>{action}</Text>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </Flex>

                                </View>
                            </Flex>

                        )

                    })
                }

                {/* 

                <Flex direction="row" align="flex-end" mt="3">
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={30} />
                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginLeft: 15 }}>
                        <View style={styles.boxMessage}>
                            <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>Do you know what time is it?</Text>
                        </View>
                    </View>
                </Flex>




                <Flex direction="row" align="flex-end" mt="3">
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={30} />
                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginLeft: 15 }}>
                        <View style={styles.boxMessage}>
                            <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>Do you know what time is it?</Text>
                        </View>
                    </View>
                </Flex> */}


                <View style={{ marginTop: 20 }}></View>

            </ScrollView>

            <Flex direction="row" justify="space-between" align="center" backgroundColor="#111" pt="2" pb="2">
                <FontAwesomeIcon icon={faChevronRight} color={"#19A3FE"} size={20} style={{ marginLeft: 5, marginRight: 5 }} />

                <TextInput
                    style={styles.inputSendMsg}
                    placeholder="Aa"
                    placeholderTextColor="#999999"
                />

                <FontAwesomeIcon icon={faThumbsUp} color={"#19A3FE"} size={20} style={{ marginLeft: 5, marginRight: 10 }} />


            </Flex>

        </SafeAreaView>
    )
}
