import React, {Component} from "react";
import "../App.scss"
import Item from "./Item";
import {Redirect, Route} from "react-router";
import FilteredTable from "./FilteredTable";
import axios from "axios";

class Shops extends Component{
    state = {
        shops : [],
        redirect: false,
        currentShopName: ""
    }
    componentDidMount() {
        this.getShop()
    }

    getShop = () => {
        axios.get("http://localhost:8989/get_all_shops", {
            params : {

            }
        }).then((Response) => {
            this.setState({
                shops : Response.data
            })
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
                    this.state.shops.map((link) =>{
                      return(
                          <button style={{border :"white", background : "white"}} onClick={this.setRedirect}>
                              <Item name={link.shopName} marked={false} id={link.shopId}/>
                          </button>
                      )
                    })
                }
                {this.redirect()}
            </div>
        )
    }
}
export default Shops;
