import '../App.scss'
import * as React from "react";
import { NavLink} from "react-router-dom";
import Cookies from "universal-cookie/lib";

class NavigationBar extends React.Component {
    state = {
        links: [
            {title: "Sign-up", path: "/signUp"},
            {title: "Shops", path: "/Shops"},
            {title: "My Discounts", path: "/myDiscounts"},
            {title: "All Discounts", path: "/allDiscounts"},
            {title: "Settings", path: "/settings"},
            {title: "About", path: "/about"}
        ]
    }

    logout = () => {
        const cookies = new Cookies;
        cookies.remove("logged_in");
        window.location.reload();
    }
    isLoggedIn = () => {
        const cookies = new Cookies;
        if(cookies.get("logged_in")){
            return true;
        }
        return false;
    }

    render() {
        return (
            <div style={{marginRight: "20px", marginLeft: "20px", borderRight: "1px solid", paddingRight: "20px", }}>
                <ul>
                    {
                        this.isLoggedIn() ?
                            this.state.links.filter(link => {
                                return link.title !== "Sign-up";
                            }).map(link => {
                                return (
                                    <NavLink to = {link.path} activeClassName={"active"} style={{marginBottom: "10px", textDecoration: "none", color: "#222831"}}>
                                        <li >{link.title}</li>
                                        <br/>
                                    </NavLink>
                                );
                            })
                            :
                            this.state.links.map(link => {
                                return (
                                    <NavLink to = {link.path} activeClassName={"active"} style={{marginBottom: "10px", textDecoration: "none", color: "#222831"}}>
                                        <li >{link.title}</li>
                                        <br/>
                                    </NavLink>
                                );
                            })
                    }
                    <button onClick={this.logout}>
                        Logout
                    </button>
                </ul>
            </div>
        )
    }
}
export default NavigationBar;
