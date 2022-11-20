import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleImage: {
            flex: 3,
            height: 312,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
        }
    }),
);