import { combineReducers } from 'redux'
import storeUrl from '../containers/storeUrl/storeUrlReducer.jsx'
import inputControll from '../containers/inputContorll/inputControllReducer.jsx'

export default combineReducers({
    inputControll,
    storeUrl
})