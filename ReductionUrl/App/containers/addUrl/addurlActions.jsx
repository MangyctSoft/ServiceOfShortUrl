import { ADD_URL_SUCCESS, ADD_URL_ERROR, CHANGE_URL } from './addUrlConstants.jsx'


import "isomorphic-fetch"

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