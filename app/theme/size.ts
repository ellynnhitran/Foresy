import {Dimensions} from 'react-native';

const { width, fontScale } = Dimensions.get("window");
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const scale = Dimensions.get('window').scale;


export const FontSizeText = (size : number)=>{
    // console.log("font system: ", fontScale);
    // console.log("font custom: ", Math.round(size/fontScale));
    return size/fontScale;
}

export const HeightSizeW = (ratio : number) =>{
    let height = ratio*maxHeight/100;

    return height;
}

export const WidthSizeW = (ratio : number) =>{
    let width = ratio*maxWidth/100;

    return width;
}

export const MaxHeight = maxHeight
