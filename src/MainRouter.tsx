import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../src/components/Header';
import Routers from './Routers';
import Footer from '../src/components/Footer';

function MainRouter(props: any) {
    return (
        <Router>
            <Header />
            <Routers />
            <Footer />
        </Router>
    );
}

export default MainRouter;