import { ADD_URL_SUCCESS, ADD_URL_ERROR, CHANGE_URL } from './addUrlConstants.jsx'

const initialState = {
    texturl: '',
    error: ''
}

export default function addUrl(state = initialState, action) {
    switch (action.type) {
        case ADD_URL_SUCCESS:
            return { ...state, texturl: '', error: '' }

        case ADD_URL_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_URL:
            return { ...state, texturl: action.payload }        

        default:
            return state;
    }
}