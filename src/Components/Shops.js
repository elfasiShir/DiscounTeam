import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";
import {Redirect, Route} from "react-router";
import FilteredTable from "./FilteredTable";

class Shops extends Component{
    state = {
        items : [
            {
                name : "urbanika",
                marked : false,
            },{
                name : "toysRus",
                marked : false,
            },{
                name : "american eagle",
                marked : false,
            },{
                name : "zara",
                marked : false,
            },{
                name : "ToGo",
                marked : false,
            },{
                name : "McDonalds",
                marked : false,
            },{
                name : "Nintendo",
                marked : false,
            },{
                name : "Vampire",
                marked : false,
            },{
                name : "BurgerLand",
                marked : false,
            },{
                name : "Smoothie Groovie",
                marked : false,
            },{
                name : "Good Food",
                marked : false,
            },{
                name : "Ford",
                marked : false,
            },{
                name : "Porsche",
                marked : false,
            },{
                name : "Toyota",
                marked : false,
            }
        ]}
    filter = (ShopName) => {

    }
    render(){
        return(
            <div>

                {
                    this.state.items.map(link => {
                        return (
                            <button style={{border :"white"}} onClick={this.filter(link.name)} >
                                <Item name={link.name} marked={link.marked}/>
                            </button>
                        );
                    })
                }
            </div>
        )
    }
}
export default Shops;
