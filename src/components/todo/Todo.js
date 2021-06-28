import {Grid, makeStyles} from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Canvas from "../canvas/Canvas";
import Theme from "../../Theme";
import ApiClient from "../../ApiClient";
import {useEffect, useState} from "react";
import TodoListItem from "./TodoListItem";

const useStyles = makeStyles({
    root:{
        background: Theme.background.secondary.main,
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
        <Grid container direction={"column"} justify={"center"} className={classes.root}>
            <Canvas/>
            <Navbar/>
            <div>{todoList[0].title}</div>
            <TodoListItem item={todoList[0]}/>
        </Grid>
    )
}


export default Todo
