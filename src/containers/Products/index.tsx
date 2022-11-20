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
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 2,
        image: ImageColumn2,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 3,
        image: ImageColumn3,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 4,
        image: ImageColumn4,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 5,
        image: ImageColumn5,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 6,
        image: ImageColumn6,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 7,
        image: ImageColumn7,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
    },
    {
        id: 8,
        image: ImageColumn8,
        dateTime: "2021.05.17 23:25",
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        description: '#魚料理  #和食  #DHA',
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
                                    className={classes.styleImageProduct}
                                    src={product.image}
                                />
                                <div className={classes.wrapDateTime}>
                                    <p className={classes.styleTextDateTime}>
                                        {product.dateTime}
                                    </p>
                                </div>
                                
                                <div>
                                    <p className={classes.styleNameProduct}>
                                        {product.name}
                                    </p>
                                    <p className={classes.styleDescription}>
                                        {product.description}
                                    </p>
                                </div>
                            </div>  
                        )
                    })
                }
            </div>
            <div className={classes.wrapBtn}>
                <button className={classes.styleBtn}>
                    <p style={{color: 'white'}}>
                        {"コラムをもっと見る"}
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Products;