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
import { faCheck, faPhoneAlt, faVideo, faChevronRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'



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

export function InboxScreen(props:Props) {
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

            <ScrollView style={{ ...styles.container_padding }}>
                <Flex direction="row" align="flex-end" mt="3">
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={30} />
                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginLeft: 15 }}>
                        <View style={styles.boxMessage}>
                            <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>Do you know what time is it?</Text>
                        </View>
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
                </Flex>

                <Flex direction="row" justify="flex-end" mt="3" align="flex-end" >
                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginRight: 5 }}>
                        <View style={styles.boxMessage}>
                            <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>Do you know what time is it?</Text>
                        </View>
                    </View>
                    <IconCheck color="#19A3FE" />
                </Flex>

                <Flex direction="row" align="flex-end" mt="3">
                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={30} />
                    <View style={{ borderTopLeftRadius: 0, overflow: 'hidden', marginLeft: 15 }}>
                        <View style={styles.boxMessage}>
                            <Text style={{ color: '#fff', fontSize: FontSizeText(17) }}>Do you know what time is it?</Text>
                        </View>
                    </View>
                </Flex>

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
