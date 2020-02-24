import { ADD_URL_SUCCESS, ADD_URL_ERROR, CHANGE_URL, UPDATE_URL_SUCCESS, UPDATE_URL_ERROR, CHANGE_UPDATE } from './inputControllConstants.jsx'
import UpdateState from '../../Util/updateHelp.jsx'

const initialState = {
    isUpdate: UpdateState.isUpdate(),   
    id: 0,
    longUrl: '',    
    error: ''
}

export default function inputControll(state = initialState, action) {
    switch (action.type) {
        

        case ADD_URL_SUCCESS:
            return { ...state, isUpdate: false, id: 0, longUrl: '', error: '' }

        case ADD_URL_ERROR:
            return { ...state, error: action.payload }

        case UPDATE_URL_SUCCESS:
            return { ...state, isUpdate: false, id: 0, longUrl: '', error: '' }

        case UPDATE_URL_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_URL:
            return { ...state, longUrl: action.payload  }

        case CHANGE_UPDATE:
            return { ...state, isUpdate: true, id: action.payload.id, longUrl: action.payload.longUrl }

        default:
            return state;
    }
}