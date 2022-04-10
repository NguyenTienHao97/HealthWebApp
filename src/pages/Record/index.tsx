import React from 'react';
import { useStyles } from './styles';
import RecordCols from '../../containers/RecordCols';
import ChartRecord from '../../containers/ChartRecord';

function Record(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <RecordCols />
            <ChartRecord />
        </div>
    )
}

export default Record;