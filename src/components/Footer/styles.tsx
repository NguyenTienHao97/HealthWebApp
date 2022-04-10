import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            position: 'static',
            bottom: 0,
            right: 0,
            display: 'flex',
            height: 128,
            width: '100%',
            backgroundColor: `${colors.dark_500}`,
        },
        wrapLinkFooter: {
            flex: 1,
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