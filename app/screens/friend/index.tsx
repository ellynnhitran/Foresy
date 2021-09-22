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
import { color } from '@theme/color';
import { width } from 'styled-system';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'



interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}

export function FriendScreen(props: Props) {
    return (
        <SafeAreaView style={styles.container}>

            <Flex direction="row" align="center" style={styles.container_padding} mt="3">
                <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={50} />
                <Text style={{ ...styles.textDefault, color: "#fff", fontWeight: 'bold', fontSize: FontSizeText(30), textTransform: 'capitalize', marginLeft: 15 }}>
                    Chats
                </Text>
            </Flex>

            {/* search */}
            <Center backgroundColor="#343D5B" style={{ padding: 7 }} mt="4">
                <Flex direction="row" align="center" style={{ width: '90%', backgroundColor: "#ffffff33", borderRadius: 7 }}>
                    <SearchIcon style={{ width: 15, marginRight: 10, marginLeft: 10 }} color="#8E8E93" />
                    <TextInput style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(15), width: '80%' }} placeholderTextColor="#8E8E93" placeholder="Tìm kiếm" />
                </Flex>
            </Center>
            {/* end search */}

            <ScrollView style={{ ...styles.container_padding }}>
                {
                    [1].map((value: number) => (
                        <TouchableOpacity key={value} onPress={() => props.navigation.navigate("InboxScreen")} activeOpacity={0.9} style={{marginTop: 30}}>
                            <Flex direction="row" justify="space-between" align="center">
                                <Flex direction="row" align="center">
                                    <Image source={require('../../../assets/images/avatar.jpeg')} alt="avatar" borderRadius={100} size={65} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(20), fontWeight: '600' }}>Phương Nhi</Text>
                                        <View style={{ marginBottom: 5 }}></View>
                                        <Text style={{ ...styles.textDefault, color: "#ffffff80", fontSize: FontSizeText(14), fontWeight: '600' }}>
                                            You: hello World
                                        </Text>
                                    </View>
                                </Flex>
                                {
                                    value%2==0?(
                                        <IconReaded color="#43474D" />
                                    ):(
                                        <IconNoRead color="#43474D" />
                                    )
                                }
                            </Flex>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
