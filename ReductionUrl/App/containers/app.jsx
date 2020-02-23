import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreUrl from './storeUrl/storeUrl.jsx';
import AddUrl from './addurl/addurl.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <h1>ЗАГОЛОВОК</h1>
                <AddUrl />
                <StoreUrl />
            </div>
        );
    }
};