import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";
import {Redirect, Route} from "react-router";
import FilteredTable from "./FilteredTable";
import axios from "axios";

class Shops extends Component{
    state = {
        /*items : [
            {
                name : "urbanika",
                marked : false,
                id: 1
            },{
                name : "toysRus",
                marked : false,
                id: 2
            },{
                name : "american eagle",
                marked : false,
                id: 3
            },{
                name : "zara",
                marked : false,
                id: 4
            },{
                name : "ToGo",
                marked : false,
                id: 5
            },{
                name : "McDonalds",
                marked : false,
                id: 6
            },{
                name : "Nintendo",
                marked : false,
                id:7
            },{
                name : "Vampire",
                marked : false,
                id: 8
            },{
                name : "BurgerLand",
                marked : false,
                id: 9
            },{
                name : "Smoothie Groovie",
                marked : false,
                id: 10
            },{
                name : "Good Food",
                marked : false,
                id: 11
            },{
                name : "Ford",
                marked : false,
                id: 12
            },{
                name : "Porsche",
                marked : false,
                id: 13
            },{
                name : "Toyota",
                marked : false,
                id: 14
            }
        ]*/
        shops : [],
        redirect: false,
        currentShopName: ""
    }
    componentDidDMount() {
        this.getShop()
    }
    getShop = () => {
        axios.get('http://localhost:8989/get_all_shops', {
            params: {

            }
        }).then((Response) => {
            this.state.shops = Response.data
        })
    }

    setRedirect = (e) => {
        this.setState({
            redirect: true,
            currentShopName: e.target.name
            }
        )
    }

    redirect = () => {
        if(this.state.redirect)
            return<Redirect to={{
                pathname: '/allDiscounts',
                state:{ shop: this.state.currentShopName }
            }}/>
    }
    render(){
        return(
            <div>
                {
                    this.state.shops.map(link => {
                        console.log(link)
                        return (
                            <button style={{border :"white"}} onClick={this.setRedirect}>
                                <Item name={link.shopName} marked={false} id={link.id}/>
                            </button>
                        );
                    })
                }
                {this.redirect()}
            </div>
        )
    }
}
export default Shops;
