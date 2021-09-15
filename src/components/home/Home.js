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
            // backgroundColor: "purple",
            // height: "100%",
            // width: "100%",
            // textAlign: "center",
            // borderRadius: "5%",
        },
    }
)

function Home() {
    const classes = useStyles()
    return (
        <Grid container direction={"row"} className={classes.root} justify={'center'}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Navbar/>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} className={"selections"}>
                <div className={classes.selections}>
                    <a href={'/blog'}>
                        <img alt={'blog'} src={'./img/blogWriter.png'}/>
                    </a>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} className={"selections"}>
                <div className={classes.selections}>
                    <a href={'/todo'}>
                        <img alt={'todo'} src={'./img/todo.png'}/>
                    </a>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} className={"selections"}>
                <div className={classes.selections}>
                    <a href={'/papers'}>
                        <img alt={'article writer'} src={'./img/articleWriter.png'}/>
                    </a>
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} className={"selections"}>
                <div className={classes.selections}>
                    <a href={'/pomodoro'}>
                        <img alt={'pomodoro'} src={'./img/pomodoroTimer.png'}/>
                    </a>
                </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}


export default Home
