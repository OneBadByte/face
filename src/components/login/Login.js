import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        height: Theme.website.height,
        background: Theme.background.primary,
    }
})

function Login(){
    const classes = useStyles()
    return(
        <Grid container direction={"row"} justify={"center"} className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"left"}>
                <Navbar/>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} justify={"center"} className={"selections"}>
                <textarea/>
                <textarea/>
            </Grid>
        </Grid>
    )
}

export default Login
