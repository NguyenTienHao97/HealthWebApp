import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../src/components/Header';
import Routers from './Routers';

function MainRouter(props: any) {
    return (
        <Router>
            <Header />
            <Routers />
        </Router>
    );
}

export default MainRouter;