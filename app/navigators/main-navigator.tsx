
import React, { Fragment } from "react"
import { StatusBar, SafeAreaView , View} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
// import { useAppSelector } from '@redux-hook/'
import {TabStackParamList} from './tabs-navigator'
import {NavigatorScreenParams} from "@react-navigation/native"

// Screens
import {
    AccountScreen,
    GlassesScreen,
    InboxScreen
} from '../screens'

import { TabsNavigator } from './tabs-navigator'


export type MainNavigatorParamList = {
    TabsNavigator: NavigatorScreenParams<TabStackParamList>,
    AccountScreen: undefined,
    GlassesScreen: undefined,
    InboxScreen: undefined,
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
    {
        name: "AccountScreen",
        component: AccountScreen
    },
    {
        name: "GlassesScreen",
        component: GlassesScreen
    },
    {
        name: "InboxScreen",
        component: InboxScreen
    }
    
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


