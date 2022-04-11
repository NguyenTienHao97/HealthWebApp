import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            margin: 20,
        },
        wrapMenu: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 20,
        },
        styleMenuItem: {
            display: 'flex',
            border: '0px solid grey',
            backgroundColor: 'transparent',
            marginLeft: 20,
            marginRight: 20,
        },
        styleTextNameMenu: {
            color: colors.light,
            fontSize: 15,
        },
        wrapItems: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row'
        },
        wrapBtnScrollTop: {
            flex: 1, 
            display: 'flex', 
            marginLeft: 10, 
            marginRight: 10, 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        styleBtnScrollTop: {
            flex: 1, 
            background: 'transparent', 
            width: 50, 
            height: 50, 
            borderRadius: 25, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderWidth: 0
        },
        wrapBtnLoadmore: {
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginTop: 10, 
            marginBottom: 10
        }
    }),
);