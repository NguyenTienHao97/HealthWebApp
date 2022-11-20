import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 160,
            marginRight: 160,
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
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
        wrapLoading: {
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: 10, 
            paddingBottom: 10, 
            justifyContent: 'center',
        }
    }),
);