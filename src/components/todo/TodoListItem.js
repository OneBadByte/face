import {Card, makeStyles, Typography} from "@material-ui/core";
import Theme from "../../Theme";


function TodoListItem(props){
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <Typography variant={"h4"}>{props.item.id} {props.item.point} {props.item.date} {props.item.title} </Typography>
        </Card>
    )
}

const useStyles = makeStyles({
    root:{
        background: Theme.background.primary,
    },
})

export default TodoListItem
