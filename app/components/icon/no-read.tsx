
import React from 'react';
import {
    Box, Icon
} from 'native-base'
import { Path, G } from "react-native-svg"


interface Props {
    color: string;
}

export default function IconNoRead(props: Props) {
    return (
        <Icon width="22" height="22" viewBox="0 0 22 22" fill="none" >
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z" fill={props.color}/>
        </Icon>
        

    )
}
