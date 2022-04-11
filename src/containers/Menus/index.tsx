import React from 'react';
import { menus } from './menus';
import { useStyles } from './styles';
import Grid from '@mui/material/Grid';
import CakeItem from '../../components/CakeItem';
import ImageIconArrow from '../../assets/arrow.png';

function Menus(props: any) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapMenu}>
                {
                    menus.map((menu: any) => {
                        return (
                            <button className={classes.styleMenuItem}>
                                <img 
                                    src={menu.icon}
                                />
                            </button>
                        )
                    })
                }
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                <Grid className={classes.wrapItems} container spacing={1} xl={12} lg={12} xs={12} md={12} sm={12} >
                    {
                        menus[0].items.map((item: any) => {
                            return (
                                <Grid item xl={3} lg={3} xs={3} md={3} sm={3}>
                                    <CakeItem
                                        image={item.image}
                                    />
                                </Grid>
                            )
                        })
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

            <div className={classes.wrapBtnLoadmore}>
                <button style={{ borderRadius: 5, border: '0px solid grey', width: 200, backgroundImage:  `linear-gradient(to right, rgb(255, 204, 56), rgb(225, 181, 58), rgb(225, 150, 67)`}}>
                    <p style={{color: 'white'}}>
                        {"Load more...."}
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Menus;