import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Canvas from "../canvas/Canvas";
import Theme from "../../Theme";
import ApiClient from "../../ApiClient";

const useStyles = makeStyles({
    root:{
        background: Theme.background.primary.main,
    }
})

function Home(){
    const classes = useStyles()
    const api = new ApiClient()

    return(
        <Grid container direction={"column"} justify={"center"} className={classes.root}>
            <Canvas/>
            <textarea>{api.getTodoList()}</textarea>
            <Navbar/>

        </Grid>
    )
}


export default Home
