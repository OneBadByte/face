import {Grid, makeStyles, TextField} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Theme from "../../Theme";
import ApiClient from "../../ApiClient";
import {useEffect, useState} from "react";
import Footer from "../footer/Footer";

const useStyles = makeStyles({
    root:{
        background: Theme.background.primary,
        height: Theme.website.height,
    }
})

function Blog(){
    const classes = useStyles()
    let posts = []
        ApiClient.getTodoList().then(
            data => {
                console.log(data)
                posts = data.data
            }
        )
    console.log(posts)
    return(
        <Grid container justify={"center"} className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Navbar/>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} alignItems={'center'}>
                <p>{posts}</p>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}


export default Blog
