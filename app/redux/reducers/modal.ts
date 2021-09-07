import {ModalType} from '../types/modal'
import { ActionCustom } from '../constants'



export interface ModalState {
    modal_loading: boolean,
    modal_notification: {
        status: boolean,
        message: string | null
    },

}

export const modalState: ModalState = {
    modal_loading: false,
    modal_notification: {
        status: false,
        message: null
    },
}


const Notification = (state = modalState, action: ActionCustom) => {
    switch (action.type) {

        case ModalType.LOADING:
            return { ...state, modal_loading: action.payload }

        case ModalType.NOTIFICATION:
            return { ...state, modal_notification: action.payload }

        default:
            return state
    }
}

export default Notification;