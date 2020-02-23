import { combineReducers } from 'redux'
import addUrl from '../containers/addUrl/addUrlReducer.jsx'
import storeUrl from '../containers/storeUrl/storeUrlReducer.jsx'

export default combineReducers({
    addUrl,
    storeUrl
})