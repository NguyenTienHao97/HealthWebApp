import React from 'react';
import { useStyles } from './styles';
import RecordCols from '../../containers/RecordCols';
import ChartRecord from '../../containers/ChartRecord';
import MyDiarys from '../../containers/MyDiarys';
import ImageIconArrow from '../../assets/arrow.png';
import MyExercises from '../../containers/MyExercises';

function Record(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <RecordCols />
                <ChartRecord />
                <MyExercises />
                <MyDiarys />
            </div>
            <div className={classes.wrapBtnScrollTop}>
                <button className={classes.styleBtnScrollTop}>
                    <img
                        src={ImageIconArrow}
                    />
                </button>
            </div>
        </div>
    )
}

export default Record;