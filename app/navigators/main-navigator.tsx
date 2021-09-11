
import React, { Fragment } from "react"
import { StatusBar, SafeAreaView , View} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
// import { useAppSelector } from '@redux-hook/'

// Screens
import {
    LoginScreen,
} from '../screens'

import { TabsNavigator } from './tabs-navigator'


export type MainNavigatorParamList = {
    TabsNavigator: undefined,
}




const Stack = createStackNavigator<MainNavigatorParamList>()

interface Screens {
    name: keyof MainNavigatorParamList,
    component: React.ComponentType<any>
}

const screens: Screens[] = [
    {
        name: 'TabsNavigator',
        component: TabsNavigator
    },
]


export const MainNavigator = () => {

    // const { auth_phone } = useAppSelector(state => state.Auth)

    return (
        <>
            {/* <SafeAreaView style={{ flex: 0, backgroundColor: "red" }} /> */}
            <StatusBar barStyle="light-content" />

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="TabsNavigator"
            >
                {
                    screens.map((screen) => {
                        return <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />

                    })
                }

            </Stack.Navigator>


        </>
    )
}


