import AuthType from '../types/auth'
import { ActionCustom } from '../constants'
// import OtpDTO from '@models/response/otpDTO'


export interface UserState {
    auth_login: boolean,
}

export const userState: UserState = {
    auth_login: false,
}


const Notification = (state = userState, action: ActionCustom) => {
    switch (action.type) {

        case AuthType.AUTH_LOGIN:
            return { ...state, auth_login: action.payload }

        default:
            return state
    }
}

export default Notification;