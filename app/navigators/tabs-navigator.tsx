/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Animated, Easing, StyleSheet, View } from 'react-native';
import { TransitionSpec } from '@react-navigation/stack/src/types';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

// theme
import { FontSizeText } from '@theme/size'

// screens
import {
    AnlyticsScreen
} from "../screens"


const config = {
    duration: 900,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
};

const transitionSpec: TransitionSpec = {
    animation: 'timing',
    config: config
}

const optionsScreen: BottomTabNavigationOptions = {
    header: () => null,
    headerShown: false,
    headerTransparent: true,


}



export type TabStackParamList = {
    HomeScreen: undefined,
    NewsScreen: undefined,
    QAScreen: undefined,
};
// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Tab = createBottomTabNavigator();


const Screens = [
    {
        name: 'AnlyticsScreen',
        component: AnlyticsScreen,
        options: {
            ...optionsScreen,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
                focused ? <Image
                    source={require('@assets/images/tab-analytics-active.png')}
                    style={{ width: 30, height: 30 * 138 / 100 }}
                />
                    :
                    <Image
                        source={require('@assets/images/tab-analytics-deactive.png')}
                        style={{ width: 30, height: 30 }}
                    />
            ),

        },
    },

]



export const TabsNavigator = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#fbf5bb',
                    tabBarInactiveTintColor: '#eccb85',
                    keyboardHidesTabBar: true,
                    tabBarStyle: {
                        backgroundColor: '#15214A',
                    },
                    tabBarItemStyle: {
                        backgroundColor: '#15214A'
                    }

                })}
            >
                {
                    Screens.map((screen) => (
                        <Tab.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                            options={screen.options}
                        />

                    ))
                }
            </Tab.Navigator>

        </>
    )
}



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        backgroundColor: '#000d33',
        height: 55,
        paddingTop: 3,
        paddingBottom: 3,
        borderTopColor: '#fef698',
        borderTopWidth: 0.4,
        fontSize: FontSizeText(10),
    },
    icon_bottom: {
        transform: [{ translateY: 0 }],
    },
});