import {Card, makeStyles, Typography} from "@material-ui/core";
import Theme from "../../Theme";


function Post(props){
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <Typography variant={"h4"}>{props.data.id} {props.data.title} </Typography>
            <hr/>
            <Typography variant={"p"}>{props.data.text}</Typography>
        </Card>
    )
}

const useStyles = makeStyles({
    root:{
        background: Theme.background.secondary,
        color: Theme.font.light,
        paddingTop: '2%',
        marginTop: '2%',
        textAlign: 'center',
        minHeight: '200px',
    },
})

export default Post
