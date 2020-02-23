import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR } from './storeUrlConstants.jsx'

const initialState = {
    data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
    error: ''
}

export default function storeUrl(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, data: action.posts, error: '' }

        case GET_POSTS_ERROR:
            return { ...state, error: action.error }

        case DELETE_POST_SUCCESS:
            return { ...state }

        case DELETE_POST_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}