import { Suspense } from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import navigations from './naviagtions';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Routers(props: any) {
    return (
        <Suspense fallback={<Box sx={{ width: '100%', height: '100%' }}>
            <LinearProgress color="primary" />
        </Box>}>
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
        </Suspense>
    )
}

export default Routers;