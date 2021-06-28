import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Canvas from "../canvas/Canvas";
import Theme from "../../Theme";
import ApiClient from "../../ApiClient";

const useStyles = makeStyles({
    root:{
        background: Theme.background.primary.main,
    },
})

function Home(){
    const classes = useStyles()
    return(
        <Grid container direction={"column"} justify={"center"} className={classes.root}>
            {/*<Canvas/>*/}
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8} justify={"center"}>
                <img src={"./img/sans.jpg"} alt={"sans"} align={"center"}/>
            </Grid>
        </Grid>
    )
}


export default Home
