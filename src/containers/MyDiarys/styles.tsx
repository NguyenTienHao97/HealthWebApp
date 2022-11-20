import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'grid',
            gap: '10px 10px',
            gridTemplateColumns: 'auto auto auto auto',
        },
        styleItem: {
            border: '1px solid grey',
            padding: 10,
        },
        wrapBtnLoadmore: {
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginTop: 10, 
            marginBottom: 10
        },
        styleBtnLoadmore: {
            borderRadius: 5, 
            border: '0px solid grey',
            width: 200,
            backgroundImage: `linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)`
        }
    }),
);