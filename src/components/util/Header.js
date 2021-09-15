import {Card, makeStyles, Typography} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        width: '100%',
        textAlign: 'center',
        fontSize: '2vw',
        color: Theme.font.light,
    },

    success:{
        background: Theme.background.success,
    },

    error:{
        background: "red",
    },

    trans:{
        background: "transparent",
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
