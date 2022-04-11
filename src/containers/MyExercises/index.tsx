import React, { useEffect } from 'react';
import { useStyles } from './styles';

const exercises = [
    {
        id: 1,
        name: "abcdefghjklm",
        weight: "26 kg",
        time: "10 min"
    },
    {
        id: 2,
        name: "abcdefghjklm",
        weight: "27 kg",
        time: "10 min"
    },
    {
        id: 3,
        name: "abcdefghjklm",
        weight: "26 kg",
        time: "10 min"
    },
    {
        id: 4,
        name: "abcdefghjklm",
        weight: "27 kg",
        time: "10 min"
    }
]

const exercises1 = [
    {
        id: 1,
        name: "abcdefghjklm",
        weight: "26 kg",
        time: "10 min"
    },
    {
        id: 2,
        name: "abcdefghjklm",
        weight: "27 kg",
        time: "10 min"
    },
    {
        id: 3,
        name: "abcdefghjklm",
        weight: "26 kg",
        time: "10 min"
    },
    {
        id: 4,
        name: "abcdefghjklm",
        weight: "27 kg",
        time: "10 min"
    },
    {
        id: 5,
        name: "abcdefghjklm",
        weight: "26 kg",
        time: "10 min"
    },
    {
        id: 6,
        name: "abcdefghjklm",
        weight: "27 kg",
        time: "10 min"
    }
]

function MyExercises(props: any) {
    const classes: any = useStyles();

    function renderItem(item: any, index: number) {
        return (
            <li key={Math.random() * 10000 + index.toString()} className={classes.styleLi}>

                <div className={classes.wrapList}>
                    <div style={{ flex: 9 }}>
                        <p className={classes.styleText}>{item.name}</p>
                        <p style={{ color: 'rgb(222, 167, 54)' }} className={classes.styleText}>{item.weight}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ color: 'rgb(222, 167, 54)' }} className={classes.styleText}>
                            {item.time}
                        </p>
                    </div>
                </div>
            </li>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapTitle}>
                <p className={classes.styleTextTile}>{"MY EXERCISE"}</p>
                <p className={classes.styleTextDateTime}>{"2021.05.21"}</p>
            </div>
            <div className={classes.wrapTable}>
                <ul style={exercises.length >= 6 ? { overflowY: 'scroll', scrollbarColor: "#6b6b6b #2b2b2b", } : {}} className={classes.styleUl}>
                    {
                        exercises.map((ex: any, index: number) => {
                            return renderItem(ex, index);
                        })
                    }
                </ul>
                <ul style={exercises1.length >= 6 ? { overflowY: 'scroll', scrollbarColor: "#6b6b6b #2b2b2b", } : {}} className={classes.styleUl}>
                    {
                        exercises1.map((ex: any, index: number) => {
                            return renderItem(ex, index);
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MyExercises;