import React from 'react';
import { useStyles } from './styles';
import RecordCols from '../../containers/RecordCols';
import ChartRecord from '../../containers/ChartRecord';
import MyDiarys from '../../containers/MyDiarys';
import ImageIconArrow from '../../assets/arrow.png';

function Record(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <RecordCols />
                <ChartRecord />
                <MyDiarys />
            </div>
            <div style={{ flex: 1, display: 'flex', marginLeft: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                <button style={{ flex: 1, background: 'transparent', width: 50, height: 50, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                    <img
                        src={ImageIconArrow}
                    />
                </button>
            </div>
        </div>
    )
}

export default Record;