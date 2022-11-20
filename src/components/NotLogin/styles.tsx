import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapNotLogin: {
            flex: 1,
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        styleBtn: {
            border: '0px', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: 18,
            borderRadius: 5, 
            height: 50,
            width: 200, 
            background: `linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)`
        }
    }),
);