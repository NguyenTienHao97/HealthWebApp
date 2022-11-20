import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1, 
            margin: 20,
            background: colors.dark_500, 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start',
            flexDirection: 'column',
        },
        wrapDateTime: {
            flex: 1, 
            display: 'flex', 
            margin: 5, 
            marginBottom: 0, 
            marginLeft: 24, 
            alignItems: 'center'
        },
        styleLabel:{ 
            fontSize: 15, 
            color: 'white', 
            marginRight: 5
        },
        styleTextDateTime: {
            fontSize: 22, 
            color: 'white'
        },
        wrapBtn: {
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            padding: 20,
        },
        styleBtn: {
            width: 70, 
            height: 30, 
            backgroundColor: 'white', 
            borderRadius: 15, 
            color: 'rgb(255, 204, 56)', 
            borderWidth: 0
        },
        styleBtnActive: {
            width: 70, 
            height: 30, 
            backgroundColor: 'rgb(255, 204, 56)', 
            borderRadius: 15, 
            color: 'white', 
            fontWeight: 'bold', 
            borderWidth: 1,
        }
    }),
);