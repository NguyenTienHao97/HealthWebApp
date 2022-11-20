import React from 'react';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';

export default function NotLogin() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.wrapNotLogin}>
            <p style={{ fontWeight: 'bold', fontSize: 24, color: 'grey' }}>{"Bạn chưa đăng nhập"}</p>
            <button className={classes.styleBtn} onClick={() => navigate("/login")}>
                {"Đăng nhập"}
            </button>
        </div>
    )
}