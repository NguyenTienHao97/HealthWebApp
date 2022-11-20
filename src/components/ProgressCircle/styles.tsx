import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleBox: {
            position: 'relative', 
            display: 'inline-flex'
        }
    }),
);