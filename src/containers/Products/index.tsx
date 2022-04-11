import React from 'react';
import { useStyles } from './styles';
import ImageColumn1 from '../../assets/column-1.jpg';
import ImageColumn2 from '../../assets/column-2.jpg';
import ImageColumn3 from '../../assets/column-3.jpg';
import ImageColumn4 from '../../assets/column-4.jpg';
import ImageColumn5 from '../../assets/column-5.jpg';
import ImageColumn6 from '../../assets/column-6.jpg';
import ImageColumn7 from '../../assets/column-7.jpg';
import ImageColumn8 from '../../assets/column-8.jpg';

const products = [
    {
        id: 1,
        image: ImageColumn1,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 2,
        image: ImageColumn2,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 3,
        image: ImageColumn3,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 4,
        image: ImageColumn4,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 5,
        image: ImageColumn5,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 6,
        image: ImageColumn6,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 7,
        image: ImageColumn7,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    },
    {
        id: 8,
        image: ImageColumn8,
        dateTime: "",
        name: "abcdefgh",
        description: 'flaksdjflkdjfkdjflkdjfldkjfldkjf',
    }
]

function Products(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.girdContainer}>
                {
                    products.map((product: any, index: number) => {
                        return (
                            <div key={Math.random() * 1000 + index.toString()} className={classes.girdItem}>
                                <img
                                    style={{objectFit: 'contain', height: 'auto', width: '100%'}}
                                    src={product.image}
                                />
                                <div style={{width: 100, position: 'relative', top: -27, left: 0, backgroundColor: 'rgb(255, 204, 56)'}}>
                                    <p style={{color: 'white', textAlign: 'center', marginTop: 0, paddingTop: 7, paddingBottom: 7, marginBottom: 0, fontSize: 12}}>
                                        {"2021.05.17 23:25"}
                                    </p>
                                </div>
                                <div style={{padding: 10}}>
                                    <p style={{fontSize: 18, marginBottom: 0, marginTop: 0}}>
                                        {product.name}
                                    </p>
                                    <p style={{fontSize: 15, color: 'rgb(255, 188, 134)', marginBottom: 0, marginTop: 0}}>
                                        {product.description}
                                    </p>
                                </div>
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

export default Products;