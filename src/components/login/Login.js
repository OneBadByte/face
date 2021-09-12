import {Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Theme from "../../Theme";
import Header from "../util/Header";
import ApiClient from "../../ApiClient";
import {useState} from "react";

const useStyles = makeStyles({
    root:{
        height: Theme.website.height,
        background: Theme.background.primary,
    },

    textAreas:{
        width: '99%',
        marginBottom: '5%',
        background: Theme.background.light,
    },

    text:{
        color: Theme.font.light,
    },

    submitButton:{
        background: Theme.buttons.background.secondary,
        width: '100%',
        height: '4vw',
        fontSize: '2vw',
        color: Theme.font.light,
    }
})

function Login(){
    const classes = useStyles()
    const [header, setHeader] = useState("")
    const [headerText, setHeaderText] = useState("")

    return(
        <Grid container direction={"row"} justify={"center"} className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"left"}>
                <Navbar/>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12} justify={"center"}>
                <Header color={header} message={headerText}/>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} justify={"center"} className={"selections"}>
                <Typography variant={'h4'} className={classes.text}>login:</Typography>
                <TextField id={'username'}  className={classes.textAreas}  type={'text'} variant={'outlined'}/>
                <br/>
                <Typography variant={'h4'} className={classes.text}>password:</Typography>
                <TextField  id={'password'} className={classes.textAreas} type={'password'} variant={'outlined'}/>
                <br/>
                <Button variant={"outlined"} className={classes.submitButton} onClick={submitLogin}>Login</Button>
            </Grid>
        </Grid>
    )

    function submitLogin(){
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        ApiClient.login(username, password).then(
            data => {
                if(data){
                    setHeader("success")
                    setHeaderText("Login successful!")
                    window.location.href = "/"
                }else{
                    setHeader("error")
                    setHeaderText("Try again loser!")
                }
            }
        )
    }


}

export default Login
