import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            display: 'flex',
            position: 'fixed',
            bottom: 0,
            left: 0,
            height: 128,
            width: '100%',
            backgroundColor: `${colors.dark_500}`,
            alignItems: 'center',
            justifyContent: 'center',
        },
        wrapLinkFooter: {
            display: 'flex',
            alignItems: 'center',
        },
        styleTextFooter: {
            marginBottom: 0,
            fontSize: 16,
            fontWeight: 'bold',
            color: `${colors.light}`,
            textDecoration: 'none',
        },
        wrapLink: {
            flex: 8,
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
        }
    }),
);