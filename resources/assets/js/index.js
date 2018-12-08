import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskEdit from './components/TaskEdit';

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/:id/edit" component={TaskEdit} />
                    <App />
                </Switch>
            </div>
        </BrowserRouter>,

        document.getElementById('root')
    );
}
