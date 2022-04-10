import React from 'react';
import { useStyles } from './styles';
import BackgroundImageProgressCircle from '../../components/BackgroundImageProgressCircle';
import Menus from '../../containers/Menus';
import CLineChart from '../../components/LineChart';

function Home(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapSection}>
                <BackgroundImageProgressCircle />
                <CLineChart />
            </div>
            <Menus />
        </div>
    )
}

export default Home;