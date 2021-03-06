import './App.scss';
import * as React from "react"
import Table from "./Components/Table";
import Header from "./Components/Header";
import FilteredTable from "./Components/FilteredTable";
import Cookies from "universal-cookie/lib";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import Shops from "./Components/Shops";
import Settings from "./Components/Settings";
import {Redirect} from "react-router";
import NavigationBar from "./Components/NavigationBar";

class App extends React.Component {
    cookies = new Cookies();
    ws  = new WebSocket("ws://localhost:8989/stream?token=" + this.cookies.get("logged_in"))
    state = {
        isLoggedIn : false,
        token : ""
    }
    componentWillMount() {
        const cookies = new Cookies();
        if (cookies.get("logged_in")){
            this.setState({
                isLoggedIn: true,
                token : cookies.get("logged_in")
            })
        }
    }
    componentDidMount() {
        this.ws.onmessage = (message) => {
            alert(message.data)
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <BrowserRouter>
                    {
                        this.state.isLoggedIn ?
                            <div style={{display: "flex", alignItem:"start", marginTop: "50px"}}>
                                <NavigationBar/>
                                <Redirect to={"/myDiscounts"} />
                                <Route path={"/shops"} component={Shops} exact={true}/>
                                <Route path={"/myDiscounts"} component={FilteredTable} exact={true}/>
                                <Route path={"/allDiscounts"} render={(props) => <Table {...props} />} />
                                <Route path={"/settings"} component={Settings} exact={true} />
                                <Route path={"/about"} component={About} exact={true}/>

                            </div>
                            :
                            <div style={{display: "flex", alignItem:"start", marginTop: "50px"}}>
                                <NavigationBar/>
                                <Redirect to={"/about"} />
                                <Route path={"/signUp"} component={SignUp} exact={true}/>
                                <Route path={"/shops"} component={Shops} exact={true}/>
                                <Route path={"/myDiscounts"} component={FilteredTable} exact={true}/>
                                <Route path={"/allDiscounts"} component={Table} exact={true}/>
                                <Route path={"/settings"} component={Settings} exact={true}/>
                                <Route path={"/about"} component={About} exact={true}/>

                            </div>

                    }
                </BrowserRouter>
            </div>
        )
    }

}
export default App;
