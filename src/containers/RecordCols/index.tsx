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
        descrip: "自分のカラダの記録",
        image: ImageMyRecommend01,
        widht: 300,
        height: 300,
    },
    {
        id: 2,
        name: "MY EXERCISE",
        descrip: "自分の運動の記録",
        image: ImageMyRecommend02,
        width: 300,
        height: 300,
    },
    {
        id: 3,
        name: "MY DIARY",
        descrip: "自分の日記",
        image: ImageMyRecommend03,
        width: 300,
        height: 300,
    }
]

function RecordCols(props: any) {
    const classes: any = useStyles();

    function onScrollToElement(col: any) {
        if (col.id === 1) {
            props.callbackHandleScrollToElementChartRecord();
        } else if (col.id === 2) {
            props.callbackHandleScrollToElementMyExercies();
        } else {
            props.callbackHandleScrollToElementMyDiaries();
        }
    }

    return (
        <div className={classes.container}>
            {
                cols.map((col: any) => {
                    return (
                        <ColItem
                            onClick={() => onScrollToElement(col)}
                            col={col}
                        />
                    )
                })
            }
        </div>
    )
}

export default RecordCols;