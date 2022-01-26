import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";
import axios from "axios";
import Cookies from "universal-cookie";

class Settings extends Component{
    state = {
        organizations : [],
        token : ""
    }
    componentDidMount() {
        this.getOrg()
    }
    getOrg = () => {
        const cookies = new Cookies();
        axios.get('http://localhost:8989/get_all_organizations_for_user', {
            params: {
                token : cookies.get("logged_in")
            }
        }).then((Response) => {
            this.setState({
                organizations : Response.data,
                token : cookies.get("logged_in")
            })
            console.log(this.state.organizations)
        })

    }


    render () {
        return (
            <div>
                {
                    this.state.organizations.map(link => {
                        return (
                            <button style={{border: "white", background: "white"}} onClick={() => {
                                {
                                    const data = new FormData();
                                    data.append("token", this.state.token)
                                    data.append("organizationId", link.organizationId)
                                    link.member
                                        ?
                                        axios.post("http://localhost:8989/delete_user_from_organization", data)
                                        :
                                        axios.post("http://localhost:8989/add_user_to_organization", data)
                                }
                            }}>
                                <Item name={link.organizationName} marked={link.member}/>
                            </button>
                        );
                    })
                }
            </div>
        )
    }
}
export default Settings;
