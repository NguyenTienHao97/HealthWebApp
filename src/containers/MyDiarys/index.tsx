import React from 'react';
import { useStyles } from './styles';

const diarys = [
    {
        id: 1,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 2,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 3,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 4,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 5,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 6,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 7,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    },
    {
        id: 8,
        dateTime: "2021.05.21 23:25",
        description: "Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant"
    }
]

function MyDiarys(props: any) {
    const classes: any = useStyles();

    return (
        <div style={{ margin: 20 }}>
            <p>
                {"MY DYARY"}
            </p>
            <div className={classes.container}>
                {
                    diarys.map((diary: any, index: number) => {
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
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                <button style={{ borderRadius: 5, border: '0px solid grey', width: 200, backgroundImage:  `linear-gradient(to right, rgb(255, 204, 56), rgb(225, 181, 58), rgb(225, 150, 67)`}}>
                    <p style={{color: 'white'}}>
                        {"Load more...."}
                    </p>
                </button>
            </div>
        </div>
    )
}

export default MyDiarys;