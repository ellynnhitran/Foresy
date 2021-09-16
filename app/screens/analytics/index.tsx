import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native'
import {
    Container,
    Center,
    Flex, Spacer,
    Box, Icon,
    Progress,

} from 'native-base'
import { styles } from './styles'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontSizeText } from '@theme/size'
import { fontCustom } from '@theme/fonts'
import IconArrowDown from '@components/icon/arrow-down'
import IconChartDecrease from '@components/icon/chart-decrease'
import IconChartIncrease from '@components/icon/chart-increase'
import BoxProgressLine from '@components/box/progress-line';
import IconTimeClock from '@components/icon/time-clock';
import IconBookReadme from '@components/icon/book-readme';
import { color } from '@theme/color';


export function AnlyticsScreen() {

    const [_fill, set_fill] = useState(85)


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.container_padding}>

                <Center>
                    <Image source={require('@assets/images/logo.png')} style={{ width: 200, height: 90 * 200 / 300 }} />
                </Center>

                <Flex direction="row" justify="space-between" align="center">
                    <Text
                        style={{ textTransform: 'uppercase', color: "#33F8BF", fontSize: FontSizeText(22), fontWeight: 'bold', fontFamily: fontCustom.regular }}
                    >level 3</Text>
                    <ImageBackground
                        source={require('@assets/images/icon-notification.png')}
                        style={{ width: 24, height: 30 }}
                    >

                    </ImageBackground>
                </Flex>

                <Flex mt="3">
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#1D1D1D",
                            width: 100,
                            height: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 50,
                            flexDirection: 'row'
                        }}
                    >
                        <Text style={{ fontFamily: fontCustom.regular, color: "#fff", fontSize: FontSizeText(16) }}>
                            Today
                        </Text>
                        <IconArrowDown style={{ marginTop: 35 / 2 - 12, marginLeft: 7 }} />

                    </TouchableOpacity>
                </Flex>


                <Flex direction="row" justify="center" align="center" mt="5" mb="5">
                    <AnimatedCircularProgress
                        size={270}
                        width={14}
                        fill={_fill}
                        duration={3000}
                        tintColor="#63FF4A"
                        lineCap="round"
                        // renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#1E212C">

                        {
                            (fill) => (
                                <Flex align="center">
                                    <Text style={{ fontSize: FontSizeText(16), fontWeight: "500", color: "#fff", fontFamily: fontCustom.regular, textTransform: 'uppercase' }}>Tình trạng sức khoẻ</Text>
                                    <Text
                                        style={{ fontSize: FontSizeText(50), fontFamily: fontCustom.regular, color: "#fff", fontWeight: 'bold' }}
                                    >
                                        8/10
                                    </Text>
                                    <Text style={{ color: '#fff', fontFamily: fontCustom.regular, fontSize: FontSizeText(18) }} >Score</Text>
                                </Flex>
                            )
                        }

                    </AnimatedCircularProgress>
                </Flex>

                <Center style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                            width: '100%',
                            borderRadius: 5,
                            overflow: 'hidden'
                        }}
                    >
                        <Center backgroundColor="#C5F6F6" style={{ padding: 10 }}>
                            <Text style={{ color: "#111", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500', textTransform: 'uppercase' }} >nhịp tim</Text>
                            <Text
                                style={{ color: '#111', fontFamily: fontCustom.regular, fontSize: FontSizeText(36), fontWeight: 'bold' }}
                            >
                                70bpm
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <IconChartDecrease />
                                <Text style={{ color: '#111', fontFamily: fontCustom.regular, fontSize: FontSizeText(12), marginLeft: 5 }}>5% so với tháng trước</Text>
                            </View>
                            <Box
                                backgroundColor="#CDFFCC"
                                style={{
                                    padding: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    borderRadius: 3
                                }}
                            >
                                <Text style={{ color: '#14A811', fontSize: FontSizeText(12), fontWeight: 'bold' }}>Tình trạng ổn định</Text>
                            </Box>
                        </Center>

                    </TouchableOpacity>
                </Center>

                <View style={{ marginTop: 30 }}></View>


                <Flex direction="row" justify="space-between">
                    <BoxProgressLine
                        title="Nhịp tim"
                        value={6.5}
                        unit="giờ/ngày"
                        progress={90}
                        style={{
                            bgColorBox: "#2678FE",
                            colorProgress: "#63FF4A",
                            width: 175,
                            height: 125,
                            space: 15
                        }}
                    />
                    <Center style={{ width: 135, backgroundColor: '#B8D3FF', borderRadius: 8, justifyContent: 'flex-start', padding: 10 }}>
                        <Text style={{ color: "#15214A", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500', textTransform: 'uppercase' }}>Cảm xúc</Text>

                        <Image source={require('@assets/images/icon-smile.png')} style={{ width: 60, height: 60, marginTop: 15 }} />
                    </Center>
                </Flex>

                <View style={{ marginTop: 30 }}></View>

                <Center style={{ backgroundColor: "#C5F6F6", padding: 10, borderRadius: 8 }}>
                    <Text style={{ ...styles.textTitle, fontSize: FontSizeText(16) }}>LƯỢNG CALO BODY</Text>

                    <Flex direction="row" align="flex-end" mt="1" mb="2">
                        <Text style={{ color: "#15214A", fontFamily: fontCustom.regular, fontSize: FontSizeText(24), fontWeight: 'bold', textTransform: 'uppercase' }} >500</Text>
                        <Text style={{ color: "#15214A", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500' }} >CAL</Text>
                    </Flex>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconChartIncrease />
                        <Text style={{ color: '#111', fontFamily: fontCustom.regular, fontSize: FontSizeText(12), marginLeft: 5 }}>5% so với tháng trước</Text>
                    </View>

                    <Flex direction="row" mt="3">
                        <BoxProgressLine
                            title="Bữa ăn"
                            value={1800}
                            unit="CAL"
                            progress={90}
                            style={{
                                bgColorBox: "#2678FE",
                                colorProgress: "#63FF4A",
                                width: 125,
                                height: 100,
                                space: 7
                            }}
                        />
                        <View style={{ marginLeft: 30 }}></View>
                        <BoxProgressLine
                            title="Vận động"
                            value={800}
                            unit="CAL"
                            progress={90}
                            style={{
                                bgColorBox: "#FA4C4C",
                                colorProgress: "#63FF4A",
                                width: 125,
                                height: 100,
                                space: 7
                            }}
                        />
                    </Flex>

                </Center>

                <View style={{ marginTop: 30 }}></View>

                <Box>
                    <Text style={{ ...styles.textTitle, fontSize: FontSizeText(15), textAlign: "center", color: "#fff" }}>
                        Công cụ hỗ trợ
                    </Text>
                    <View style={{ marginTop: 17 }}></View>
                    <Flex direction="row" align="center" p="3" style={{ width: "100%", backgroundColor: "#82C572", height: 40, borderRadius: 5 }}>
                        <IconTimeClock color="white" />
                        <Text style={{ ...styles.textTitle, color: "#fff", marginLeft: 10, textTransform: 'none' }}>Thiết lập lối sống theo khoa học</Text>
                    </Flex>
                    <View style={{ marginTop: 10 }}></View>
                    <Flex direction="row" align="center" p="3" style={{ width: "100%", backgroundColor: "#82C572", height: 40, borderRadius: 5 }}>
                        <IconBookReadme color="white" />
                        <Text style={{ ...styles.textTitle, color: "#fff", marginLeft: 10, textTransform: 'none' }}>Tạo hồ sơ bệnh án</Text>
                    </Flex>
                </Box>

                <View style={{ marginTop: 30 }}></View>

                <Box backgroundColor="#fff" style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <View
                        style={{
                            backgroundColor: "#2A449D",
                            width: 250,
                            padding: 5,
                            borderBottomRightRadius: 5
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textTitle,
                                color: "#fff",
                                fontSize: FontSizeText(10),
                                textAlign: "center",
                            }}
                        >
                            Món ăn phù hợp với sức khoẻ của bạn
                        </Text>
                    </View>


                    <View style={{ marginTop: 15 }}></View>

                    <ScrollView horizontal={true} style={{paddingBottom: 10}}>
                        <View style={{ marginLeft: 10 }}></View>
                        <Flex align="center" justify="space-between" style={{ width: 140, height: 95 }}>
                            <Image source={require("@assets/images/meal-1.png")} style={{ width: 120, height: 70, borderRadius: 5 }} />
                            <Text style={{ ...styles.textTitle, color: color.primaryDark, fontWeight: "bold", }}>
                                Ức gà
                            </Text>
                        </Flex>
                        <Flex align="center" justify="space-between" style={{ width: 140, height: 95 }}>
                            <Image source={require("@assets/images/meal-2.png")} style={{ width: 120, height: 70, borderRadius: 5 }} />
                            <Text style={{ ...styles.textTitle, color: color.primaryDark, fontWeight: "bold", }}>
                                Cà rốt
                            </Text>
                        </Flex>
                        <Flex align="center" justify="space-between" style={{ width: 140, height: 95 }}>
                            <Image source={require("@assets/images/meal-3.png")} style={{ width: 120, height: 70, borderRadius: 5 }} />
                            <Text style={{ ...styles.textTitle, color: color.primaryDark, fontWeight: "bold", }}>
                                Táo
                            </Text>
                        </Flex>
                        <Flex align="center" justify="space-between" style={{ width: 140, height: 95 }}>
                            <Image source={require("@assets/images/meal-1.png")} style={{ width: 120, height: 70, borderRadius: 5 }} />
                            <Text style={{ ...styles.textTitle, color: color.primaryDark, fontWeight: "bold", }}>
                                Ức gà
                            </Text>
                        </Flex>

                    </ScrollView>
                </Box>

                <View style={{ marginTop: 30 }}></View>


            </ScrollView>
        </SafeAreaView>
    )
}