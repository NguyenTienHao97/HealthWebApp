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
            <div className={classes.wrapLabel}>
                <p style={{color: 'white'}}>{"05.21.Morning"}</p>
            </div>
        </div >
    )
}

export default CakeItem;