import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

// 64
// 32x32

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        wrapLinkHeader: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        styleTextHeader: {
            marginBottom: 0,
            fontSize: 16,
            fontWeight: 'bold',
            color: `${colors.light}`,
            textDecoration: 'none',
        },
        styleMenuHeader: {
            borderBottom: '1px solid grey',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 5
        },
        wrapLink: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        wrapBage: {
            width: 20, 
            height: 20, 
            borderRadius: 10, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            top: -5, left: -15, position: 'relative', backgroundColor: 'rgb(237, 108, 17)'
        },
        styleBage: {
            marginTop: 0, 
            marginBottom: 0, 
            fontSize: 10
        }
    }),
);