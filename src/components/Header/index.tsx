import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { colors } from '../../config/config';
import IconNote from '../../assets/svgs/icon_note.svg';
import IconChallenge from '../../assets/svgs/icon_challenge.svg';
import IconInfo from '../../assets/svgs/icon_info.svg';
import { IPropsHeaderType } from './type';
import MyDrawer from '../MyDrawer';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LogoSvg from '../../assets/svgs/logo.svg';

const headers = [
    {
        id: 1,
        name: "自分の記録",
        icon: IconNote,
        minWidth: 200,
        to: "/column"
    },
    {
        id: 2,
        name: "チャレンジ",
        icon: IconChallenge,
        minWidth: 200,
        to: "/record"
    },
    {
        id: 3,
        name: "お知らせ",
        icon: IconInfo,
        minWidth: 200,
        to: "/"
    }
];

function Header(props: IPropsHeaderType) {
    const classes = useStyles();
    const navigate: any = useNavigate();
    const [cookies, setCookie] = useCookies();

    function onLogout() {
        setCookie('access_token', "", { path: "/" });
        navigate("/login");
    }

    return (
        <div className={classes.grow}>
            <AppBar style={{ backgroundColor: colors.dark_500, zIndex: 2, paddingLeft: 160, paddingRight: 160, height: 64 }} position="fixed">
                <Toolbar>
                    <div style={{ height: 40, flex: 4 }}>
                        <Link to="/">
                            <img
                                alt="logo"
                                width={114}
                                style={{ objectFit: 'fill' }}
                                src={LogoSvg}
                            />
                        </Link>
                    </div>

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
                                        <div style={header.id === 3 ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', flexDirection: 'row', marginRight: 15 }}>
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
                    <MyDrawer>
                        <div
                            onClick={() => navigate("/login")}
                            className={classes.styleLoginNavigate}
                        >
                            <p>{"Đăng nhập"}</p>
                        </div>
                        <div
                            onClick={() => onLogout()}
                            className={classes.styleLoginNavigate}
                        >
                            <p>{"Đăng xuất"}</p>
                        </div>
                    </MyDrawer>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

Header.defaultProps = {
    title: "",
}

export default React.memo(Header);