import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            marginTop: 20,
            marginBottom: 20,
        },
        girdContainer: {
            flex: 1,
            display: 'grid',
            gap: '10px 10px',
            gridTemplateColumns: 'auto auto auto auto',
        },
        girdItem: {
            border: '1px solid grey',
            flexDirection: 'column',
            display: 'flex',
        },
    }),
);