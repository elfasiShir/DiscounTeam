import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";
import axios from "axios";

class Settings extends Component{
    state = {
        organizations: []
    }
    componentDidMount() {
        this.getOrg();
    }
    getOrg = () => {
        axios.get('http://localhost:8989/get_all_organizations', {
            params: {

            }
        }).then((Response) => {
            this.state.organizations = Response.data
        })
    }

    render(){
        return(
            <div>

                {
                    this.state.organizations.map(link => {
                        console.log(link)
                        return (
                            <button style={{border :"white"}}  >
                                <Item name={link.organizationName} marked={false}/>
                            </button>
                        );
                    })
                }
            </div>
        )
    }
}
export default Settings;
