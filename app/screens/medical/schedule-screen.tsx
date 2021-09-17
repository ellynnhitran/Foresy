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
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
    Timeline,
    CalendarProvider,
    WeekCalendar, ExpandableCalendar
} from "react-native-calendars";
import IconArrowBack from '@components/icon/arrow-back'
import { color } from '@theme/color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamList } from '@navigators/main-navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';



interface Props {
    navigation: StackNavigationProp<MainNavigatorParamList>
}


interface MarkedDate {

}




export function MedicalScheduleScreen(props: Props) {

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
                    Lịch trình khám sức khoẻ
                </Text>
            </Center>

            <ScrollView style={{ ...styles.container_padding }}>

                <View style={{ marginBottom: 40 }}></View>

                <Flex direction="row" align="center" justify="space-between">
                    <Text style={{ ...styles.textDefault, color: "#fff", fontSize: FontSizeText(23), }}>Thời gian</Text>
                    <TouchableOpacity style={{ padding: 10, borderRadius: 10000, backgroundColor: '#F5AF19' }}>
                        <FontAwesomeIcon icon={faPencilAlt} size={25} color="white" />

                    </TouchableOpacity>
                </Flex>

                <View style={{marginBottom: 20}}></View>

                <Calendar
                    markedDates={{
                        '2021-09-20': {
                            customStyles: {
                                container: {
                                    backgroundColor: '#3865E0',
                                    borderRadius: 5
                                },
                                text: {
                                    color: '#fff',
                                    fontWeight: '700'
                                }
                            }
                        },

                    }}
                    markingType={"custom"}
                    onDayPress={(e) => {
                        console.log(e)
                    }}

                    theme={{
                        todayTextColor: "red",
                        textDayFontWeight: '400',
                        textDayHeaderFontWeight: '400',
                    }}
                />



            </ScrollView>
        </SafeAreaView>
    )
}
