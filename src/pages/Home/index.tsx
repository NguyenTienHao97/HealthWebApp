import React from 'react';
import { useStyles } from './styles';
import BackgroundImageProgressCircle from '../../components/BackgroundImageProgressCircle';

function Home(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <BackgroundImageProgressCircle />
        </div>
    )
}

export default Home;