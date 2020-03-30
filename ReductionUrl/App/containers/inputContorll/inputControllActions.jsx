import { ADD_URL_SUCCESS, ADD_URL_ERROR, CHANGE_URL, UPDATE_URL_SUCCESS, UPDATE_URL_ERROR, CHANGE_UPDATE } from './inputControllConstants.jsx'
import { getUrls } from '../storeUrl/storeUrlActions.jsx'
import UpdateState from '../../Util/updateHelp.jsx'

import "isomorphic-fetch"


export function changeUrl(text) {
    return {
        type: CHANGE_URL,
        payload: text
    }
}

export function addNewUrl(texturl) {
    return (dispatch) => {
        if (texturl) {
            fetch(constants.postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(texturl)
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: ADD_URL_SUCCESS });
                    getUrls()(dispatch);

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

export function updateUrl(id, longUrl) {
    return (dispatch) => {
        if (id && longUrl) {
            fetch(constants.updateUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ id: id, longUrl: longUrl })
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: UPDATE_URL_SUCCESS });
                    getUrls()(dispatch);

                } else {
                    alert('Ошибка добавления записи');
                    dispatch({ type: UPDATE_URL_ERROR, payload: 'Ошибка добавления записи' });
                }
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: UPDATE_URL_ERROR, payload: ex });
            });
        }
    }
}

export function updateInputControll(data) {
    return (dispatch) => {
        dispatch({ type: CHANGE_UPDATE, payload: data });        
    }
}

export function buttonCancel() {
    UpdateState.setUpdate(false);    
    return {
        type: ADD_URL_SUCCESS
    }
}