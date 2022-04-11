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
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                        <button onClick={() => props.callbackLoadMore()} style={{ borderRadius: 5, border: '0px solid grey', width: 200, backgroundImage: `linear-gradient(to right, rgb(255, 204, 56), rgb(225, 181, 58), rgb(225, 150, 67)` }}>
                            <p style={{ color: 'white' }}>
                                {"Load more...."}
                            </p>
                        </button>
                    </div>
                )
            }
        </div >
    )
}

export default MyDiarys;