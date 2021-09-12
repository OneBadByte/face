import {Grid, makeStyles} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import Theme from "../../Theme";


function PaperViewer(props){

    const classes = useStyles()
    const xlSize = 12
    const lgSize = 12
    const mdSize = 12
    const smSize = 12
    const xsSize = 12
    return(
        <Grid container item xl={xlSize} lg={lgSize} md={mdSize} sm={smSize} xs={xsSize}>
            <ReactMarkdown className={classes.root}>{props.text}</ReactMarkdown>
        </Grid>
    )

}

const useStyles = makeStyles({
    root:{
        border: "1px solid blue",
        width: "100%",
        padding: "1%",
        height: Theme.website.height,
        "& h1":{
            textAlign: "center"
        }
    },
})

export default PaperViewer

