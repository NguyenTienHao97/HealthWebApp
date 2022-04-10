import React from 'react';
import { useStyles } from './styles';
import ImageMyRecommend01 from '../../assets/MyRecommend-1.jpg';
import ImageMyRecommend02 from '../../assets/MyRecommend-2.jpg';
import ImageMyRecommend03 from '../../assets/MyRecommend-3.jpg';
import ColItem from '../../components/ColItem';

const cols = [
    {
        id: 1,
        name: "BODY RECORD",
        descrip: "flkadsjfl",
        image: ImageMyRecommend01,
        widht: 300,
        height: 300,
    },
    {
        id: 2,
        name: "MY EXERCISE",
        descrip: "flkadsj",
        image: ImageMyRecommend02,
        width: 300,
        height: 300,
    },
    {
        id: 3,
        name: "MY EXERCISE",
        descrip: "flkadsj",
        image: ImageMyRecommend03,
        width: 300,
        height: 300,
    }
]

function RecordCols(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            {
                cols.map((col: any) => {
                    return (
                        <ColItem 
                            col={col}
                        />
                    )
                })
            }
        </div>
    )
}

export default RecordCols;