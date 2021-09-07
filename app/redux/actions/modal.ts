import {ModalType} from '../types/modal'
import { AppDispatch, dispatch } from '../../store'


const ShowLoading = (is_loading: boolean) => {
    return{
        type: ModalType.LOADING,
        payload: is_loading
    }
}


const ShowNotification = (data: object) => {
    return {
        type: ModalType.NOTIFICATION,
        payload: data
    }
}

const AuthActions = {
    ShowLoading: (is_loading : boolean) => dispatch(ShowLoading(is_loading) as any),
    ShowNotification: (data: object) => dispatch(ShowNotification(data) as any)
}

export default AuthActions