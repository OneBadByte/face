import {Grid, makeStyles} from "@material-ui/core";
import theme from "../../Theme";

function Footer(){
   const classes = useStyles()

   return(
       <Grid container justify={"center"} direction={"row"} className={classes.root}>
           <h1>Footer</h1>
       </Grid>
   )
}

const useStyles = makeStyles({
    root:{
        background: theme.footer.background,
        widthBottom: '0px',
        paddingBlock: "0px",
        marginBottom: "-500px",
        color: theme.font.light
    }

})

export default Footer
