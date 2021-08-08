import { makeStyles } from '@material-ui/core/styles';


// makeStyles takes in 1parameter( callback func w/ Instant return) instant returns are then wrapped in parenthesis and return Obj.

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //ratio 16.9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));