import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 40,
            marginRight: 40,
            height: '100%'
        },
    }),
);