import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR, ADD_URL_SUCCESS, ADD_URL_ERROR } from './storeUrlConstants.jsx'
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

export function changeUrl(text) {
    console.log(text);
    return {
        type: CHANGE_URL,
        payload: text
    }
}

export function addNewUrl(texturl) {
    return (dispatch) => {
        console.log(texturl);

        if (texturl) {
            console.log('!!!' + texturl);

            fetch(constants.postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(texturl)
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: ADD_URL_SUCCESS });

                } else {
                    alert('Ошибка добавления записи');
                    dispatch({ type: ADD_URL_ERROR, payload: 'Ошибка добавления записи' });
                }
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: ADD_URL_ERROR, payload: ex });
            });
        }
    }
}