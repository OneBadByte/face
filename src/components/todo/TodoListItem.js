import {Card, makeStyles, Typography} from "@material-ui/core";
import Theme from "../../Theme";


function TodoListItem(props){
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <Typography>{props.item.id} {props.item.title} {props.item.point}</Typography>
        </Card>
    )
}

const useStyles = makeStyles({
    root:{
        background: Theme.palette.secondary.main,
    },
})

export default TodoListItem
