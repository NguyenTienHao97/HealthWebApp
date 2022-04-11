import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { colors } from '../../config/config';
import Logo from '../../assets/logo.png';
import Note from '../../assets/note.png';
import Record from '../../assets/record.png';
import Notification from '../../assets/notification.png';
import IconMenu from '../../assets/menu.png';
import { IPropsHeaderType } from './type';

const headers = [
    {
        id: 1,
        name: "自分の記録",
        icon: Note,
        minWidth: 200,
        to: "/column"
    },
    {
        id: 2,
        name: "チャレンジ",
        icon: Record,
        minWidth: 200,
        to: "/record"
    },
    {
        id: 3,
        name: "お知らせ",
        icon: Notification,
        minWidth: 200,
        to: "/notification"
    }
];

function Header(props: IPropsHeaderType) {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar style={{ backgroundColor: colors.dark_500, zIndex: 2 }} position="fixed">
                <Toolbar>
                    <Link to="/" style={{ height: 40, flex: 4 }}>
                        <img
                            alt="logo"
                            width={109}
                            height={40}
                            style={{ objectFit: 'fill' }}
                            src={Logo}
                        />
                    </Link>
                    <div
                        className={classes.wrapLink}
                    >
                        {
                            headers && headers.map((header: any, index: any) => {
                                return (
                                    <div
                                        key={Math.random() * 19990000 + index.toString()}
                                        className={classes.wrapLinkHeader}
                                        style={{ minWidth: header.minWidth }}>
                                        <div style={header.id === 3 ? {display: 'flex', flexDirection: 'row'} : {display: 'flex', flexDirection: 'row', marginRight: 15}}>
                                            <img
                                                alt={`${index}-${header.name}`}
                                                width={32}
                                                height={32}
                                                style={{ objectFit: 'fill', marginRight: 0 }}
                                                src={header.icon}
                                            />
                                            {
                                                header.id === 3 ? (
                                                    <div className={classes.wrapBage}>
                                                        <p className={classes.styleBage}>{"3"}</p>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                        <Link
                                            to={header.to}
                                            onClick={() => { }}
                                            style={{ fontFamily: "Noto Sans JP" }}
                                            className={classes.styleTextHeader}>
                                            {
                                                header?.name || ""
                                            }
                                        </Link>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <img
                        alt="menu"
                        width={32}
                        height={32}
                        style={{ objectFit: 'fill' }}
                        src={IconMenu}
                    />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

Header.defaultProps = {
    title: "",
}

export default Header;