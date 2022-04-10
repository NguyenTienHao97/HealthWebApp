import React from 'react';
import { useStyles } from './styles';
import Products from '../../containers/Products';
import ImageIconArrow from '../../assets/arrow.png';

const columns = [
    {
        id: 1,
        name: "RECOMMENDED",
        type: "COLUMN",
        text: "abcd"
    },
    {
        id: 2,
        name: "RECOMMENDED",
        type: "DIET",
        text: "abcdef"
    },
    {
        id: 3,
        name: "RECOMMENDED",
        type: "BEATY",
        text: "abcdefgh"
    },
    {
        id: 4,
        name: "RECOMMENDED",
        type: "HEALTH",
        text: "abcdefgh"
    }
]

function Column(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapContent}>
                <div className={classes.girdContainer}>
                    {
                        columns.map((column: any, index: number) => {
                            return (
                                <div key={Math.random() * 1000 + index.toString()} className={classes.girdItem}>
                                    <p className={classes.styleText}>{column.name}</p>
                                    <p style={{ textDecoration: 'underline', textDecorationColor: 'white' }} className={classes.styleText}>{column.type}</p>
                                    <p className={classes.styleText1}>{column.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Products />
            </div>
            <div style={{ paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button style={{ background: 'transparent', width: 50, height: 50, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <img
                        src={ImageIconArrow}
                    />
                </button>
            </div>
        </div>
    )
}

export default Column;