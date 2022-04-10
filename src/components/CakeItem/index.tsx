import React from 'react';
import { useStyles } from './styles';

function CakeItem(props: any) {
    const classes: any = useStyles();

    return (
        <div
            className={classes.styleImage}
            style={{
                backgroundImage: `url("${props?.image}")`,
                objectFit: 'fill'
            }}
        >
            <div style={{height: 272}}></div>
            <div style={{backgroundColor: 'green', position: 'relative', left: 0, bottom: 0, right: 0, height: 40, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{color: 'white'}}>{"05.21.Morning"}</p>
            </div>
        </div >
    )
}

export default CakeItem;