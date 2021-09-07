
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// import { useAppSelector } from '@redux-hook/'

// Screens
import { 
    LoginScreen,
    RegisterScreen,
    VerifyScreen
} from '../screens'



export type AuthNavigatorParamList = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    VerifyScreen: undefined
}




const Stack = createStackNavigator<AuthNavigatorParamList>()

interface Screens{
    name: keyof AuthNavigatorParamList,
    component: React.ComponentType<any>
}

const screens: Screens[] = [
    {
        name: 'LoginScreen',
        component: LoginScreen
    },
    {
        name: 'RegisterScreen',
        component: RegisterScreen
    },
    {
        name: 'VerifyScreen',
        component: VerifyScreen
    }
]


export const AuthNavigator = () => {

    // const { auth_phone } = useAppSelector(state => state.Auth)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="VerifyScreen"
        >
            {
                screens.map((screen)=>{
                    return <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />

                })
            }
            
        </Stack.Navigator>
    )
}


