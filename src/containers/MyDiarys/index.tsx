import React from 'react';
import { useStyles } from './styles';

function MyDiarys(props: any) {
    const classes: any = useStyles();

    return (
        <div ref={props.myDiariesRef} style={{ margin: 20 }}>
            <p>
                {"MY DYARY"}
            </p>
            <div className={classes.container}>
                {
                    props?.diaries && props?.diaries?.map((diary: any, index: number) => {
                        return (
                            <div
                                key={Math.random() * 10000 + index.toString()}
                                className={classes.styleItem}>
                                <p style={{ marginBottom: 0 }}>
                                    {diary.dateTime}
                                </p>
                                <p>
                                    {diary.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            {
                props.curDiaries.length === props?.diaries?.length ? (
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p>{}</p>
                    </div>
                ) : (
                    <div className={classes.wrapBtnLoadmore}>
                        <button onClick={() => props.callbackLoadMore()} className={classes.styleBtnLoadmore}>
                            <p style={{ color: 'white' }}>
                                {"自分の日記をもっと見る"}
                            </p>
                        </button>
                    </div>
                )
            }
        </div >
    )
}

export default MyDiarys;