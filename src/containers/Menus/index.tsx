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
                <div style={{ flex: 1, display: 'flex', marginLeft: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <button style={{ flex: 1, background: 'transparent', width: 50, height: 50, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 0 }}>
                        <img 
                            src={ImageIconArrow}
                        />
                    </button>
                </div>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                <button style={{ width: 200 }}>
                    <p>
                        {"Load more...."}
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Menus;