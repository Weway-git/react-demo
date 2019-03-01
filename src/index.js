import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route  } from 'react-router';
import { HashRouter } from 'react-router-dom'

import Home from "./pages/Home"

ReactDOM.render((
    <HashRouter>
        <div>
    <Route path="/" component = {Home}/>
    {/*<Route path="/user/add" component={UserAdd}/>*/}

    </HashRouter>
), document.getElementById('app'));

