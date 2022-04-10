import React from 'react';
import { useStyles } from './styles';

function ColItem(props: any) {
    const classes: any = useStyles();

    return (
        <div style={{ width: 250, height: 250, display: 'flex', marginLeft: 20, marginRight: 20, flex: 1, backgroundColor: 'rgb(255,204,56)', padding: 20 }}>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url("${props.col.image}")`,
                    objectFit: 'scale-down',
                }}
            >
                <div>
                    <div>
                        <p style={{ fontSize: 20, color: 'rgb(220, 176, 57)' }}>
                            {props.col.name}
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'rgb(255, 150, 67)', height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: 'white' }}>
                            {props.col.descrip}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColItem;