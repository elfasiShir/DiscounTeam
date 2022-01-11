import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";

class Settings extends Component{
    state = {
        items : [
        {
            name : "teachers",
            marked : true,
        },{
            name : "artists",
            marked : false,
        },{
            name : "football players",
            marked : false,
        },{
            name : "puppeteers",
            marked : true,
        },{
            name : "coaches",
            marked : false,
        }
    ]}

    render(){
        return(
            <div>

                {
                    this.state.items.map(link => {
                        return (
                            <button style={{border :"white"}}  >
                                <Item name={link.name} marked={link.marked}/>
                            </button>
                        );
                    })
                }
            </div>
        )
    }
}
export default Settings;
