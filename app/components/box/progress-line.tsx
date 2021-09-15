import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native'
import {
    Center,
    Flex,
    Progress,
} from 'native-base'
import {FontSizeText} from '@theme/size'
import {fontCustom} from '@theme/fonts'
import ProgressBar from "react-native-animated-progress";


interface Props{
    title: string,
    value: number,
    unit: string,
    progress: number,
    style:{
        bgColorBox: string,
        colorProgress: string,
        width?: number,
        height?: number,
        space: number
    }
}

export default function BoxProgressLine(props: Props){

    return(
        <TouchableOpacity
        activeOpacity={0.9}
        style={{
            backgroundColor: props.style.bgColorBox,
            borderRadius: 8,
            width: props.style.width,
            height: props.style.height,
            padding: 10,
            justifyContent: 'center'
        }}
    >
        <Center>
            <Text style={{ color: "#fff", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500', textTransform: 'uppercase' }} >{props.title}</Text>
            <Flex direction="row" align="flex-end" style={{marginBottom: props.style.space, marginTop: props.style.space-5}}>
                <Text style={{ color: "#fff", fontFamily: fontCustom.regular, fontSize: FontSizeText(30), fontWeight: 'bold', textTransform: 'uppercase' }} >{props.value}</Text>
                <Text style={{ color: "#fff", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500' }} >{props.unit}</Text>
            </Flex>
        </Center>
        {/* <Progress colorScheme={props.style.colorProgress} bg="#fff" value={props.progress} size="md" /> */}
        <ProgressBar
          progress={80}
          height={10}
          trackColor="#fff"
          backgroundColor={props.style.colorProgress}
          animated={true}
        />
    </TouchableOpacity>
    )
    
}