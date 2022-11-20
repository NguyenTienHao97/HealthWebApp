import React from 'react';
import { useStyles } from './styles';
import { IFooterType } from './type';
import { Link } from 'react-router-dom';

const footers = [
    {
        id: 1,
        name: "会員登録",
        to: "/",
        flex: 1,
    },
    {
        id: 2,
        name: "運営会社",
        to: "/",
        flex: 1,
    },
    {
        id: 3,
        name: "利用規約",
        to: "/",
        flex: 1,
    },
    {
        id: 4,
        name: "個人情報の取扱について",
        to: "/",
        flex: 1.2,
    },
    {
        id: 5,
        name: "特定商取引法に基づく表記",
        to: "/",
        flex: 1.2,
    },
    {
        id: 6,
        name: "お問い合わせ",
        to: "/",
        flex: 1,
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
                                style={{flex: footer.flex}}
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
        </div>
    )
}

Footer.defaultProps = {
    name: "",
}

export default React.memo(Footer);