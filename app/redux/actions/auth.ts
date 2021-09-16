import AuthType from '../types/auth'
// import {UserType} from '../types/user'
import { AppDispatch, dispatch } from '../../store'
// import * as AuthAPI from '../../apis/auth-api'
// import * as OTP from '@models/request/otp'
// import RegisterDTO from '@models/request/registerDTO'
// import UserDTO from '@models/response/userDTO'
import * as Storage from '@utils/storage'
// import OtpDTO from '@models/response/otpDTO'



// const sendOTP = (params: OTP.SendOTP) => async (dispatch: AppDispatch) => {

//     try {
//         let response : any = await AuthAPI.SendOTP(params)

//         // console.log("response: ", response)
//         dispatch({
//             type: AuthType.SEND_OTP_SUCCESS,
//             payload: null
//         })
//     }
//     catch (err) {
//         console.log(err)
//         dispatch({
//             type: AuthType.SEND_OTP_FAIL,
//             payload: err?.message
//         })
//     }

// }

// const verifyOTP = (params : OTP.VerifyOTP) => async (dispatch: AppDispatch) => {
//     try{
//         let response : any= await AuthAPI.VerifyOTP(params)
//         console.log("verifyOTP success")
//         console.log(response)
//         let otpDTO = new OtpDTO()
//         otpDTO.otp_token = response?.otp_token
//         otpDTO.phone_number_exists = response?.phone_number_exists

//         if (!!otpDTO.phone_number_exists){
//             let user = new UserDTO(response?.user)
//             await Storage.save('user', user)
//             await Storage.saveString('access_token', response.access_token)
//             await Storage.saveString('device_token', response.device_token)
//             dispatch({
//                 type: AuthType.REGISTER_SUCCESS,
//             })
//             dispatch({
//                 type: UserType.INFO_USER,
//                 payload: user
//             })
//         }
//         dispatch({
//             type: AuthType.VERIFY_OTP_SUCCESS,
//             payload: otpDTO
//         })
//     }
//     catch (err) {
//         console.log("verifyOTP fail")
//         console.log(err?.message)
//         // console.log(JSON.stringify(err))
//         dispatch({
//             type: AuthType.VERIFY_OTP_FAIL,
//             payload: err?.message
//         })
//     }

// }

// const Register = (params: RegisterDTO) => async (dispatch: AppDispatch) => {
//     try{
//         let response : any = await AuthAPI.Register(params)
//         console.log("register: ",response.data)
//         let user = new UserDTO(response.data.user);
//         await Storage.save('user', user)
//         Storage.saveString('access_token', response.data.access_token)
//         Storage.saveString('device_token', response.data.device_token)
//         dispatch({
//             type: AuthType.REGISTER_SUCCESS
//         })
//         dispatch({
//             type: UserType.INFO_USER,
//             payload: user
//         })
        
//     }
//     catch(err){
//         console.log(err)
//         dispatch({
//             type: AuthType.REGISTER_FAIL,
//             payload: err?.message
//         })
//     }
// }

// const SkipLogin = (skip_login: boolean) => {
//     return{
//         type: AuthType.SKIP_LOGIN,
//         payload: skip_login
//     }
// }

// const Logout = () => async (dispatch: AppDispatch) => {
//     await Storage.clear()
//     dispatch({
//         type: AuthType.LOGOUT
//     })
//     dispatch({
//         type: UserType.INFO_USER,
//         payload: {}
//     })
// }

// const CheckCache = () => async (dispatch: AppDispatch) => {
//     let user = await Storage.load('user')
//     let access_token = await Storage.loadString('access_token')
//     let device_token = await Storage.loadString('device_token')
//     if (!!user && !!access_token && !!device_token) {
//         dispatch({
//             type: AuthType.REGISTER_SUCCESS,
//         })
//         dispatch({
//             type: UserType.INFO_USER,
//             payload: user
//         })
//     }

// }


export const AuthActions = {
    login: () => dispatch({type: AuthType.AUTH_LOGIN, payload: true}),
    logout: () => dispatch({type: AuthType.AUTH_LOGIN, payload: false})
    // sendOTP: (params : OTP.SendOTP) => dispatch(sendOTP(params) as any),
    // verifyOTP: (params: OTP.VerifyOTP) => dispatch(verifyOTP(params) as any),
    // Register: (params: RegisterDTO) => dispatch(Register(params) as any),
    // SkipLogin: (skip_login: boolean) => dispatch(SkipLogin(skip_login)),
    // Logout: () => dispatch(Logout() as any),
    // CheckCache: () => dispatch(CheckCache() as any),
}
