import {StyleSheet} from 'react-native';
import {color} from '@theme/color'
import {FontSizeText} from '@theme/size'


export const styles = StyleSheet.create({
    bg:{
        flex: 1
    },
    form: {
        width: 275,
        position: 'relative',
        // backgroundColor: "#333"
    },
    inputText: { 
        height: 40,
        backgroundColor: "#fff",
        // width: '50%' ,
        marginLeft: 10,
        fontSize: FontSizeText(14),
        marginRight: 30,
    },
    inputContainer:{
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 20
    },
    button: {
        backgroundColor: color.primaryLight,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertErrorBg: {
        backgroundColor: '#FFE8E8', width: '100%', padding: 15, borderRadius: 5
    },
    alertErrorText:{
        fontSize: FontSizeText(14), color: "#FA5F5F", fontWeight: 'bold', textAlign: 'center'
    },
    alertSuccessBg: {
        backgroundColor: '#E5FFEA', width: '100%', padding: 15, borderRadius: 5
    },
    alertSuccessText:{
        fontSize: FontSizeText(14), color: "#1ACF16", fontWeight: 'bold', textAlign: 'center'
    }
})