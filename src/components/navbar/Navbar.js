import {Button, Grid, makeStyles} from "@material-ui/core";
import Theme from "../../Theme";

const useStyles = makeStyles({
    root:{
        height: "85px",
        background: Theme.background.secondary,
        position: 'fixed'
    },

    title:{
        textAlign: 'center',
        color: Theme.font.light
    },

    buttonBar: {
        background: Theme.buttons.background.primary,
        width: '100%',
    },

    buttons:{
        background: Theme.buttons.background.primary,
        color: Theme.font.light,
        // width: "100%",
        borderRadius: "0px",
        '&:hover':{
           background: Theme.buttons.background.secondary
        }
    }
})

function Navbar(){
    const classes = useStyles()
    return(
        <Grid container direction={"row"} className={classes.root} justify={"left"}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"center"}>
                <h1 className={classes.title}>One Bad Byte</h1>
            </Grid>
            <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.buttonBar}>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
            <Button className={classes.buttons} href={"/"}>Home</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button className={classes.buttons} href={"/blog"}>Blog</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button className={classes.buttons} href={"/todo"}>Todo</Button>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <Button className={classes.buttons} href={"/papers"}>Papers</Button>
            </Grid>
            {/*<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>*/}
            {/*</Grid>*/}
            {/*<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>*/}
            {/*</Grid>*/}
            <Grid item xl={1} lg={1} md={1} sm={1} xs={12} justify={"right"}>
                <Button className={classes.buttons} href={"/login"}>Login</Button>
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar
