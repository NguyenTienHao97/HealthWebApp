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
            flexDirection: 'column',
            display: 'flex',
        },
        styleImageProduct: {
            objectFit: "fill", 
            height: 144, 
            width: '100%'
        },
        wrapDateTime: {
            width: 100, 
            position: 'relative', 
            bottom: 27, 
            left: 0, 
            backgroundColor: 'rgb(255, 204, 56)'
        },
        styleTextDateTime: {
            color: 'white', 
            textAlign: 'center', 
            marginTop: 0, 
            paddingTop: 7, 
            paddingBottom: 7, 
            marginBottom: 0, 
            fontSize: 12
        },
        styleNameProduct: {
            fontSize: 15, 
            marginBottom: 0, 
            marginTop: 0
        },
        styleDescription: {
            fontSize: 12, 
            color: 'rgb(255, 188, 134)', 
            marginBottom: 0, 
            marginTop: 0
        },
        wrapBtn: {
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginTop: 10, 
            marginBottom: 10
        },
        styleBtn: {
            borderRadius: 5, 
            border: '0px solid grey', 
            width: 200, 
            backgroundImage:  `linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)`
        }
    }),
);