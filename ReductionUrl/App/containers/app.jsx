import React from 'react'
import ReactDOM from 'react-dom'
import StoreUrl from './storeUrl/storeUrl.jsx'
import InputControll from './inputContorll/inputControll.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <h1>ZIP-URL</h1>
                <InputControll />
                <StoreUrl />
            </div>
        );
    }
};