import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            height: 'auto',
        },
        wrapSection: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
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