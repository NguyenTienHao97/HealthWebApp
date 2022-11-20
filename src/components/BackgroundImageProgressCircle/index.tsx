import React from 'react';
import { useStyles } from './styles';
import BackgroundImage from '../../assets/d01.jpg';
import ProgressCircle from '../ProgressCircle';

function BackgroundImageProgressCircle() {
    const classes: any = useStyles();

    return (
        <div
            className={classes.styleImage}
            style={{
                backgroundImage: `url("${BackgroundImage}")`,
                objectFit: 'contain',
            }}
        >
            <ProgressCircle />
        </div >
    )
}

export default BackgroundImageProgressCircle;