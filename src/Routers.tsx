import { Suspense, useEffect } from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import navigations from './naviagtions';
import Footer from '../src/components/Footer';

function Routers(props: any) {
    return (
        <Suspense fallback={<div>{"Đang tải trang..."}</div>}>
            <Switch>
                {
                    navigations.map((navigation: any, index: any) => {
                        return <Route
                            key={index}
                            path={navigation?.path}
                            element={<navigation.component {...navigation} />}
                        />
                    })
                }
                
            </Switch>
            <Footer />
        </Suspense>
    )
}

export default Routers;