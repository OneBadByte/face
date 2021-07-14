import {Button, Grid, makeStyles} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        height: "50px",
        background: Theme.background.secondary,
    },

    buttons:{
        height: "100%",
        background: Theme.buttons.background.primary,
        color: Theme.font.light,
        width: "100px",
        borderRadius: "0px"
    }
})

function Navbar(){
    const classes = useStyles()
    return(
        <Grid container direction={"row"} className={classes.root} justify={"left"}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={1} justify={"left"}>
                <Button className={classes.buttons} href={"/"}>Home</Button>
                <Button className={classes.buttons} href={"/blog"}>Blog</Button>
                <Button className={classes.buttons} href={"/todo"}>Todo</Button>
                <Button className={classes.buttons}>Test</Button>
                <Button className={classes.buttons}>Test</Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
