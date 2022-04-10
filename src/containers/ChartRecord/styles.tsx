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
    }),
);