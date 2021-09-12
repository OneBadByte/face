import {Button, Grid, makeStyles} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        height: "120px",
        background: Theme.background.secondary,
    },

    title:{
        textAlign: 'center',
        color: Theme.font.light
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"center"}>
                <h1 className={classes.title}>One Bad Byte</h1>
            </Grid>
            <Grid item xl={11} lg={11} md={11} sm={11} xs={12} justify={"left"}>
                <Button className={classes.buttons} href={"/"}>Home</Button>
                {/*<Button className={classes.buttons} href={"/blog"}>Blog</Button>*/}
                <Button className={classes.buttons} href={"/todo"}>Todo</Button>
                <Button className={classes.buttons} href={"/papers"}>Papers</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={12} justify={"right"}>
                <Button className={classes.buttons} href={"/login"}>Login</Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
