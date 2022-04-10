import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 40,
            marginRight: 40,
        },
        wrapContent: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        girdContainer: {
            flex: 1,
            display: 'grid',
            gap: '10px 10px',
            gridTemplateColumns: 'auto auto auto auto',
        },
        girdItem: {
            backgroundColor: 'rgb(46, 46, 46)',
            border: '1px solid grey',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            padding: 20,
        },
        styleText: {
            color: 'rgb(255, 204, 56)',
            marginBottom: 0,
        },
        styleText1: {
            color: colors.light,
            marginBottom: 0,
        }
    }),
);