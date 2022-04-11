import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '13%',
            paddingRight: '13%',
            paddingTop: 20,
            paddingBottom: 20,
        },
        [theme.breakpoints.down('sm')]: {
            padding: 20
        }
    },
    wrapLogin: {
        padding: 40
    },
    styleBtnLogin: {
        width: '100%',
        border: '0px',
        paddingTop: 10,
        paddingBottom: 10,
        background: colors.primary_300,
        color: 'white'
    },
    wrapLinkNotRememberPass: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    wrapRememberMe: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    wrapTextTitle: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    styletextTitle: {
        fontWeight: 'bold',
        fontSize: 20
    }
}));