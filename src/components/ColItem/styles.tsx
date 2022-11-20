import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapColItem: {
            width: 250, 
            height: 250, 
            display: 'flex', 
            marginLeft: 20, 
            marginRight: 20, 
            flex: 1, 
            backgroundColor: 'rgb(255,204,56)', 
            padding: 20
        }
    }),
);