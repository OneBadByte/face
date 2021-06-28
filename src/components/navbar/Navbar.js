import {Button, Grid, makeStyles} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        background: Theme.palette.primary.main,
    },

    buttons:{
        background: Theme.palette.secondary.main
    }
})

function Navbar(){
    const classes = useStyles()
    return(
        <Grid container direction={"row"} className={classes.root} justify={"center"}>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.buttons}>
               <Button className={classes.buttons} href={"/blog"}>Blog</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button href={"/todo"}>Todo</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button>Test</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button>Test</Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
