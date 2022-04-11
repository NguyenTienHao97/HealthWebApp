import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconMenu from '../../assets/menu.png';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function MyDrawer(props: any) {
    const classes = useStyles();

    const [state, setState] = React.useState<any>({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: Boolean) => (
        event: any,
    ) => {
        if (
            event.type === 'keydown' && ((event).key === 'Tab' || (event).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    const list = (anchor: Anchor, children: any) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            {children}
        </div>
    )

    return (
        <div>
            {(['left']).map((anchor: any) => (
                <React.Fragment key={anchor}>
                    <Button
                        style={{width: 32, height: 32}}
                        onClick={toggleDrawer(anchor, true)}>
                        <img
                            alt="menu"
                            width={32}
                            height={32}
                            style={{ objectFit: 'fill' }}
                            src={IconMenu}
                        />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor, props.children)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default MyDrawer;