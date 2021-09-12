import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import {useState} from "react";
import Theme from "../../Theme";
import PaperViewer from "./PaperViewer";
import Footer from "../footer/Footer";
import ApiClient from "../../ApiClient";


function Papers(){

    const [title, changeTitle] = useState("")
    const [text, changeText] = useState("")
    const classes = useStyles()
    const xlSize = 10
    const lgSize = 10
    const mdSize = 10
    const smSize = 10
    const xsSize = 12
    return(
        <Grid container direction={"row"} spacing={3}>
            <Grid item xl={xlSize+2} lg={lgSize+2} md={mdSize+2} sm={smSize+2} xs={xsSize}>
                <Navbar/>
            </Grid>
            <Grid item xl={xlSize} lg={lgSize} md={mdSize} sm={smSize} xs={xsSize}>
                <TextField id={"title"} label={"title"} onChange={() => {
                    changeTitle(document.getElementById("title").value)
                }}/>
            </Grid>
            <Grid item xl={xlSize/2} lg={lgSize/2} md={mdSize/2} sm={smSize/2} xs={xsSize}>
               <TextField id={"text"} label={"Standard"} multiline rows={1000} className={classes.writer}  onChange={() => {
                   changeText(document.getElementById("text").value)
               }}/>
            </Grid>
            <Grid item xl={xlSize/2} lg={lgSize/2} md={mdSize/2} sm={smSize/2} xs={xsSize}>
                <PaperViewer text={text}/>
            </Grid>
            <Grid item xl={xlSize} lg={lgSize} md={mdSize} sm={smSize} xs={xsSize}>
                <Button variant={"contained"} className={classes.submitButton} onClick={() => sendData()}>
                    Send It
                </Button>
            </Grid>
            <Grid item xl={xlSize} lg={lgSize} md={mdSize} sm={smSize} xs={xsSize}>
                <Footer/>
            </Grid>
        </Grid>
    )

    function sendData(){
        const data = {
            "title": title,
            "text": text,
        }
        ApiClient.postPaper(data)
    }

}

const useStyles = makeStyles({
    root:{

    },

    writer:{
        width: "100%",
        border: "1px solid black",
        maxHeight: Theme.website.height,
        height: Theme.website.height,
        padding: "1%",
    },

    submitButton: {
       backgroundColor: Theme.buttons.background.primary,
        width: "100%",
        height: "55px"
    }

})

export default Papers
