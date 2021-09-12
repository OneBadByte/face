import {Card, makeStyles, Typography} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        width: '100%',
        textAlign: 'center',
        fontSize: '2vw',
    },

    success:{
        background: Theme.background.success,
        fontSize: '2vw',
    },

    error:{
        background: "red",
        fontSize: '2vw',
    },

    trans:{
        background: "transparent",
        fontSize: '2vw',
    },

})

function Header(props){
    const classes = useStyles()
    const classUsed = props.color === 'success' ? classes.success : classes.error
    return(
        <Card className={classes.root}>
            <Typography variant={'h5'} className={classUsed}>{props.message}</Typography>
        </Card>
    )
}

export default Header
