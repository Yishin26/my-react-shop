import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './pages/App';
import Login from './pages/Login'

//放入所有的Page

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/login' component={Login} />

            </Switch>
        </BrowserRouter>

    )

}

export default Router;