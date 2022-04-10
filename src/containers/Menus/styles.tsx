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
            height: 100,
            width: 100,
            backgroundColor: `rgb(255,174,60)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0px solid grey',
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
        }
    }),
);