import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Theme from "../../Theme";
import Footer from "../footer/Footer";

const useStyles = makeStyles({
        root: {
            background: Theme.background.primary,
            color: Theme.font.light,
            // textAlign: "center",
            height: "1000px"
        },

        selections: {
            backgroundColor: "purple",
            height: "100%",
            width: "100%",
            textAlign: "center",
            borderRadius: "5%",
        },
    }
)

function Home() {
    const classes = useStyles()
    return (
        <Grid container direction={"row"} className={classes.root} spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"left"}>
                <Navbar/>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} justify={"center"} className={"selections"}>
                <div className={classes.selections}>
                    <p className={"selections"}>testing</p>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1}>
                <div className={classes.selections}>
                    <p>testing</p>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1}>
                <div className={classes.selections}>
                    <p>testing</p>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1}>
                <div className={classes.selections}>
                    <p>testing</p>
                </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"left"}>
                <Footer/>
            </Grid>
        </Grid>
    )
}


export default Home
