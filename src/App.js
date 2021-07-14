import Home from "./components/home/Home";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Blog from "./components/blog/Blog";
import Todo from "./components/todo/Todo";
import Login from "./components/login/Login";

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Route exact={true} path={"/"} component={Home}/>
            <Route path={"/blog"} component={Blog}/>
            <Route path={"/todo"} component={Todo}/>
            <Route path={"/login"} component={Login}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
