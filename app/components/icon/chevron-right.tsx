
import React from 'react';
import {
    Box, Icon
} from 'native-base'
import { Path, G } from "react-native-svg"


interface Props{
    color: string;
}

export default function IconChevronRight(props: Props) {
    return (
        <Icon width="9" height="16" viewBox="0 0 9 16" fill="none">
            <Path d="M0 2.34317L1.41421 0.928955L8.48528 8.00002L1.41421 15.0711L0 13.6569L5.65685 8.00002L0 2.34317Z" fill={props.color} />
        </Icon>
    )
}
