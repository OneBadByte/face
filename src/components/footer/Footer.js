import {Grid, makeStyles} from "@material-ui/core";
import theme from "../../Theme";


function Footer(){
   const classes = useStyles()

   return(
       <Grid container justify={"center"} direction={"row"} className={classes.root}>
           <h1>Testing</h1>

       </Grid>
   )
}

const useStyles = makeStyles({
    root:{
        background: theme.background.secondary.main,
    }

})

export default Footer
