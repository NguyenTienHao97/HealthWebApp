import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleImage: {
            height: 312,
            width: 524,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
);