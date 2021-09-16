import {StyleSheet} from 'react-native'
import {color} from '@theme/color'
import {fontCustom} from '@theme/fonts'
import { FontSizeText } from '@theme/size'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primaryDark,
        paddingLeft: 20,
        paddingRight: 20,
    },
    container_padding: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    textDefault:{
        color: "#111", fontFamily: fontCustom.regular, fontSize: FontSizeText(14), fontWeight: '500'
    },
    boxMessage: {
        backgroundColor: '#ffffff33', 
        padding: 12, 
        // borderBottomRightRadius: 10, 
        // borderTopRightRadius: 10,
        marginTop: 3,
        borderRadius: 10
    },
    inputSendMsg: {
        width: '80%', backgroundColor: '#414553', padding: 5, 
        paddingLeft: 10, borderRadius: 300, color: "#fff",
        fontSize: FontSizeText(14),
        height: 30
    }
})