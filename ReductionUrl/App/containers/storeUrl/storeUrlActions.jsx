import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR } from './storeUrlConstants.jsx'
import { updateInputControll } from '../inputContorll/inputControllActions.jsx'
import "isomorphic-fetch"


export function getUrls(pageIndex = 0) {
    return (dispatch) => {
        let queryTrailer = '?pageIndex=' + pageIndex;
        fetch(constants.getStore + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch({ type: GET_POSTS_SUCCESS, payload: data })
            }).catch((ex) => {
                console.log(ex);
                dispatch({ type: GET_POSTS_ERROR, payload: ex })
            });
    }
}

export function deleteUrl(id) {
    return (dispatch) => {
        fetch(constants.removeUrl + '?id=' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: DELETE_POST_SUCCESS });
                getUrls(0)(dispatch);
            } else {
                alert('Ошибка удаления записи');
                dispatch({ type: DELETE_POST_ERROR, payload: 'Ошибка удаления записи' });
            }
        }).catch((ex) => {
            dispatch({ type: DELETE_POST_ERROR, payload: ex });
        });
    }
}

export function updateUrl(text) {
    return (dispatch) => {

        dispatch(updateInputControll(text));
    }
}