import React from 'react';
import { useStyles } from './styles';
import { IFooterType } from './type';
import { Link } from 'react-router-dom';

const footers = [
    {
        id: 1,
        name: "会員登録",
        to: "/",
        minWidth: 80,
    },
    {
        id: 2,
        name: "運営会社",
        to: "/",
        minWidth: 80,
    },
    {
        id: 3,
        name: "利用規約",
        to: "/",
        minWidth: 80,
    },
    {
        id: 4,
        name: "個人情報の取扱について",
        to: "/",
        minWidth: 200,
    },
    {
        id: 5,
        name: "特定商取引法に基づく表記",
        to: "/",
        minWidth: 200,
    },
    {
        id: 6,
        name: "お問い合わせ",
        to: "/",
        minWidth: 200,
    }
]

function Footer(props: IFooterType) {
    const classes: any = useStyles();

    return (
        <div className={classes.container}>
            <div
                className={classes.wrapLink}
            >
                {
                    footers && footers.map((footer: any, index: any) => {
                        return (
                            <div
                                style={{minWidth: footer.minWidth, marginLeft: 10, marginRight: 10}}
                                key={Math.random() * 19990000 + index.toString()}
                                className={classes.wrapLinkFooter}>
                                <Link
                                    to={{}}
                                    onClick={() => { }}
                                    style={{ fontFamily: "Noto Sans JP" }}
                                    className={classes.styleTextFooter}>
                                    {
                                        footer?.name || ""
                                    }
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{flex: 2}}></div>
        </div>
    )
}

Footer.defaultProps = {
    name: "",
}

export default Footer;