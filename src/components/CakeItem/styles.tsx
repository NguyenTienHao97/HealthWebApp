import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleImage: {
            height: 312,
        },
        wrapLabel: {
            backgroundColor: 'rgb(255, 204, 56)', 
            position: 'relative', 
            left: 0, 
            bottom: 0, 
            right: 0, 
            height: 40, 
            width: 120, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }
    }),
);