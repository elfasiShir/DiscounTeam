import './App.scss';
import * as React from "react"
import Table from "./Components/Table";
import Header from "./Components/Header";
import FilteredTable from "./Components/FilteredTable";
import Cookies from "universal-cookie";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import NavigationBar from "./Components/NavigationBar";
import LoginPage from "./Components/LoginPage";
import about from "./Components/About";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import Shops from "./Components/Shops";
import Settings from "./Components/Settings";

class App extends React.Component {
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

    render() {
        return(
            <div>
                <Header/>
                <BrowserRouter>
                    {
                        this.state.isLoggedIn ?
                            <div style={{display: "flex", alignItem:"start", marginTop: "50px"}}>
                                <NavigationBar/>
                                <Route path={"/loginPage"} component={LoginPage} exact={true}/>
                                <Route path={"/signUpPage"} component={SignUp} exact={true}/>
                                <Route path={"/shops"} component={Shops} exact={true}/>
                                <Route path={"/myDiscounts"} component={FilteredTable} exact={true}/>
                                <Route path={"/AllDiscounts"} component={Table} exact={true}/>
                                <Route path={"/settings"} component={Settings} exact={true}/>
                                <Route path={"/about"} component={About} exact={true}/>

                            </div>
                            :
                            <div>
                                <Route path={"/about"} component={About} exact={true}/>
                            </div>

                    }
                </BrowserRouter>
            </div>
        )
    }

}
export default App;
