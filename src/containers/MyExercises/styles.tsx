import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from '../../config/config';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: colors.dark_500,
            marginLeft: 20,
            marginRight: 20,
            flex: 1,
            height: 320,
        },
        wrapTitle: {
            flex: 1,
            display: 'flex',
            paddingLeft: 10,
        },
        styleTextTile: {
            color: colors.light,
            marginRight: 5,
        },
        styleTextDateTime: {
            color: colors.light,
            fontSize: 18,
        },
        wrapTable: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
        },
        styleUl: {
            width: '100%',
            height: 200,
            overflow: 'hidden',
            '&::-webkit-scrollbar': {
                backgroundColor: 'grey',
                width: 10,
                borderRadius: 5,
            },
            '&::-webkit-scrollbar-track': {
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgb(255, 208, 55)',
                outline: '1px solid slategrey',
                width: 10,
                borderRadius: 5,
            }
        },
        styleLi: {
            color: 'white',
            borderBottomWidth: 1,
            border: '0px solid grey',
            paddingBottom: 5,
            paddingTop: 5,
        },
        styleText: {
            marginTop: 0,
            marginBottom: 0,
        },
        wrapList: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row'
        }
    }),
);