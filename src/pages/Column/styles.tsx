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
            marginLeft: 160,
            marginRight: 160,
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
            border: '0px solid grey',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            padding: 20,
        },
        styleText: {
            color: 'rgb(255, 204, 56)',
            marginBottom: 0,
            marginTop: 0
        },
        styleText1: {
            color: colors.light,
            marginBottom: 0,
        },
        styleDivide: {
            width: 56, 
            border: "1px solid white"
        },
        wrapImageArrow: {
            paddingLeft: 10, 
            paddingRight: 10, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        styleBtnArrow: {
            background: 'transparent', 
            width: 50, 
            height: 50, 
            borderRadius: 25, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderWidth: 0
        }
    }),
);