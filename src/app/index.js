import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import store from "./store/livetalkStore";

import {Provider} from "react-redux";

import './assets/css/material-dashboard-react.css';
import  {History}  from "utils";
import { ThemeProvider } from '@livechat/ui-kit'


import indexRoutes from './routes/index.jsx';

ReactDOM.render(
<ThemeProvider>
        <Provider store={store}>
    <Router history={History}>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                })
            }
        </Switch>
    </Router></Provider></ThemeProvider>
    , document.getElementById('root'));