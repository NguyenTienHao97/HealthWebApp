import React from 'react';
import { useStyles } from './styles';
import Grid from '@mui/material/Grid';
import CakeItem from '../../components/CakeItem';
import ImageIconArrow from '../../assets/svgs/icon_scroll.svg';

function Menus(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapMenu}>
                {
                    props?.meals && props?.meals.map((meal: any, index: number) => {
                        return (
                            <button
                                key={Math.random() * 10000 + index.toString()}
                                onClick={() => props.callbackFilterByTypeMeal(meal)}
                                className={classes.styleMenuItem}>
                                <img
                                    src={require(`../../assets/svgs/${meal.image}`)}
                                />
                            </button>
                        )
                    })
                }
            </div>
            <div className={classes.wrapCakeItem}>
                <Grid className={classes.wrapItems} container spacing={1} xl={12} lg={12} xs={12} md={12} sm={12} >
                    {
                        props?.items?.length > 0 ? props?.items?.map((item: any, index: number) => {
                            return (
                                <Grid key={Math.random() * 10000 + index.toString()} item xl={3} lg={3} xs={3} md={3} sm={3}>
                                    <CakeItem
                                        item={item}
                                    />
                                </Grid>
                            )
                        }) : <div className={classes.wrapEmpty}>
                            <p>{"empty"}</p>
                        </div>
                    }
                </Grid>
                <div className={classes.wrapBtnScrollTop}>
                    <button className={classes.styleBtnScrollTop}>
                        <img
                            src={ImageIconArrow}
                        />
                    </button>
                </div>
            </div>
            {
                props.curItems.length === props.items.length ? (
                    null
                ) : (
                    <div className={classes.wrapBtnLoadmore}>
                        <button
                            onClick={() => props.callbackLoadMoreItem()}
                            className={classes.styleBtnLoadmore}>
                            <p style={{ color: 'white' }}>
                                {"自分の日記をもっと見る"}
                            </p>
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default Menus;