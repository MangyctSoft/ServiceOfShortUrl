import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Url from './url/url.jsx'


export default class App extends React.Component {
    render() {
        return (
               <Url />
        );
    }
};