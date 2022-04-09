import { Suspense, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import navigations from './naviagtions';

function Routers(props: any) {
    return (
        <Suspense fallback={<div>{"Đang tải trang..."}</div>}>
            <Switch>
                {
                    navigations.map((navigation: any, index: any) => {
                        console.log('navigation?.path', navigation?.path);
                        return <Route
                            key={index}
                            path={navigation?.path}
                            exact={navigation?.exact}
                            render={(props: any) => <navigation.component {...props} />}
                        />
                    })
                }
            </Switch>
        </Suspense>
    )
}

export default Routers;