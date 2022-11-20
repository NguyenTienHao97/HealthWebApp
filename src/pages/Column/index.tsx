import React from 'react';
import { useStyles } from './styles';
import Products from '../../containers/Products';
import ImageIconArrow from '../../assets/svgs/icon_scroll.svg';

const columns = [
    {
        id: 1,
        name: "RECOMMENDED",
        type: "COLUMN",
        text: "オススメ"
    },
    {
        id: 2,
        name: "RECOMMENDED",
        type: "DIET",
        text: "ダイエット"
    },
    {
        id: 3,
        name: "RECOMMENDED",
        type: "BEATY",
        text: "美容"
    },
    {
        id: 4,
        name: "RECOMMENDED",
        type: "HEALTH",
        text: "健康"
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
                                    <p style={{ marginBottom: 5 }} className={classes.styleText}>{column.type}</p>
                                    <div className={classes.styleDivide}></div>
                                    <p className={classes.styleText1}>{column.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Products />
            </div>
            <div className={classes.wrapImageArrow}>
                <button className={classes.styleBtnArrow}>
                    <img
                        src={ImageIconArrow}
                    />
                </button>
            </div>
        </div>
    )
}

export default Column;