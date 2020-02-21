import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from './urlContants.jsx'
import "isomorphic-fetch"

export function receivePosts(data) {
    return {
        type: GET_POSTS_SUCCESS,
        posts: data
    }
}

export function errorReceive(err) {
    return {
        type: GET_POSTS_ERROR,
        error: err
    }
}

export function getUrls(pageIndex = 0) {
    return (dispatch) => {
        let queryTrailer = '?pageIndex=' + pageIndex;
        console.log(queryTrailer);
        fetch(constants.getStore + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch(receivePosts(data))
            }).catch((ex) => {
                console.log(ex);
                dispatch(errorReceive(ex))
            });
    }
}