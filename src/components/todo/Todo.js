import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Theme from "../../Theme";
import ApiClient from "../../ApiClient";
import {useEffect, useState} from "react";
import TodoListSection from "./TodoListSection";

const useStyles = makeStyles({
    root:{
        height: Theme.website.height,
        background: Theme.background.primary,
    }
})

function Todo(){
    const [todoList, setTodoList] = useState([{"title": "test"}])
    const classes = useStyles()
    useEffect(() =>{
        // if(todoList["todoList"].length <= 1){
            ApiClient.getTodoList().then(data =>{
                console.log(`stuff -> ${data["todoList"]}`)
                setTodoList(data["todoList"])
            })
        }
        // }
    )

    return(
        <Grid container direction={"row"} justify={"center"} className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} justify={"left"}>
                <Navbar/>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={1} justify={"center"} className={"selections"}>
                <TodoListSection items={todoList}/>
            </Grid>
            {/*<div>{todoList[0].title}</div>*/}
            {/*<TodoListItem item={todoList[0]}/>*/}
            {/*<Footer/>*/}
        </Grid>
    )
}


export default Todo
