
import React from 'react';
import {
    Box, Icon
} from 'native-base'
import { Path, G } from "react-native-svg"


interface Props {
    color: string;
}

export default function IconArrowBack(props: Props) {
    return (
        <Icon width="30" height="30" viewBox="0 0 30 30" fill="none" >
            <Path d="M14.5875 4.8375L12.375 2.625L0 15L12.375 27.375L14.5875 25.1625L4.425 15L14.5875 4.8375Z" fill={props.color} />
        </Icon>

    )
}
