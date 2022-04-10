import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleBox: {
            position: 'relative', 
            display: 'inline-flex'
        }
    }),
);