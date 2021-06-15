import {Grid} from "@material-ui/core";


function Canvas(){
   return(
      <Grid container item xl={10} lg={10}  md={10}  sm={10} xs={12}>
         <canvas id={"faceCanvas"}/>
      </Grid>
   )
}

export default Canvas
