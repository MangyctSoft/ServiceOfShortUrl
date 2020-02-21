import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/app.jsx' //3
import urlReducer from './containers/url/urlReducer.jsx'

function configureStore(initialState) {
    return createStore(urlReducer, initialState, applyMiddleware(thunk))
}

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
)