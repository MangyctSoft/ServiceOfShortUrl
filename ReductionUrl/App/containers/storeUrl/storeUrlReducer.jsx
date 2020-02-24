import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR, CHANGE_URL} from './storeUrlConstants.jsx'

const initialState = {
    data: { records: [] },
    error: ''
}

export default function storeUrl(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, data: action.payload, error: '' }

        case GET_POSTS_ERROR:
            return { ...state, error: action.payload }

        case DELETE_POST_SUCCESS:
            return { ...state }

        case DELETE_POST_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}