import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            display: 'flex',
            position: 'static',
            bottom: 0,
            right: 0,
            height: 128,
            paddingLeft: 160,
            paddingRight: 160,
            backgroundColor: `${colors.dark_500}`,
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
            flex: 1,
            display: 'flex',
            flexDirection: 'row'
        }
    }),
);