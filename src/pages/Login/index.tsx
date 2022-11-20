import React, { useState } from 'react';
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from './styles';
import { infoValidator, emailValidator } from '../../utils';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState<any>({ value: "", error: "" });
    const [password, setPassword] = useState<any>({ value: "", error: "" });
    const [showPass, setShowPass] = useState<any>(false);
    const [cookies, setCookies] = useCookies(['access_token']);
    const navigate = useNavigate();
    const classes = useStyles();

    function validateInfo() {
        const userNameError = infoValidator(userName.value);
        const passwordError = infoValidator(password.value);

        if (userNameError || passwordError) {
            setUserName({
                ...userName,
                error: userNameError,
            });
            setPassword({
                ...password,
                error: passwordError,
            });

            return false;
        }

        return true;
    }

    async function onLogin() {
        if (!validateInfo()) {
            return;
        } else {
            setCookies('access_token', "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;", { path: "/" });
            navigate("/");
        }
    }

    function handleClickShowPassword() {
        setShowPass(!showPass);
    }

    function handleKeyEnter(e: any) {
        if (e.which === 13) {
            onLogin();
        }
    }

    return (
        <Grid className={classes.container} container item justifyContent="center" xl={12} lg={12} xs={12} md={12} sm={12}>
            <Grid item xl={12} lg={12} xs={12} md={12} sm={12}>
                <div className={classes.wrapTextTitle}>
                    <p className={classes.styletextTitle}>{"Đăng nhập"}</p>
                </div>
                <TextField
                    onKeyPress={handleKeyEnter}
                    type={"text"}
                    fullWidth
                    label="Tên đăng nhập*"
                    placeholder="Nhập vào tên đăng nhập*"
                    variant="outlined"
                    onChange={(e: any) => setUserName({ value: e.target.value, error: "" })}
                    helperText={userName.error !== "" ? userName.error : ""}
                    value={userName.value}
                    error={userName.error !== "" ? true : false}
                />
                <div style={{ height: 20 }}></div>
                <TextField
                    fullWidth
                    type={showPass ? 'text' : "password"}
                    onKeyPress={handleKeyEnter}
                    label="Mật khẩu*"
                    placeholder="Nhập vào mật khẩu"
                    variant="outlined"
                    helperText={password.error !== "" ? password.error : ""}
                    onChange={(e: any) => setPassword({ value: e.target.value, error: "" })}
                    value={password.value}
                    error={password.error !== "" ? true : false}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {
                                        showPass ? <VisibilityOff /> : <Visibility />
                                    }
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <div style={{ height: 20 }}></div>
                <button
                    onClick={onLogin}
                    className={classes.styleBtnLogin}>
                    {"Đăng nhập"}
                </button>
            </Grid>
        </Grid>
    )
}

export default Login;