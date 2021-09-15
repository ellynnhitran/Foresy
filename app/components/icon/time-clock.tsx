
import React from 'react';
import {
    Icon
} from 'native-base'
import { Path, G } from "react-native-svg"

interface Props {
    color: string;
}

export default function IconTimeClock(props: Props) {
    return (
        <Icon width="21" height="20" viewBox="0 0 21 20" fill="none">
            <Path d="M8.41659 5H10.4999V10H15.7083V12H8.41659V5Z" fill={props.color} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M20.9166 10C20.9166 15.5228 16.2529 20 10.4999 20C4.74695 20 0.083252 15.5228 0.083252 10C0.083252 4.47715 4.74695 0 10.4999 0C16.2529 0 20.9166 4.47715 20.9166 10ZM18.8333 10C18.8333 14.4183 15.1023 18 10.4999 18C5.89755 18 2.16659 14.4183 2.16659 10C2.16659 5.58172 5.89755 2 10.4999 2C15.1023 2 18.8333 5.58172 18.8333 10Z" fill={props.color} />
        </Icon>

    )
}
