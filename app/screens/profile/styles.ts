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
        color: "#111", fontFamily: fontCustom.regular, fontSize: FontSizeText(14),
    }
})