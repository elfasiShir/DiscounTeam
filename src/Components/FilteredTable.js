import '../App.scss'
import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from "axios";
import Cookies from "universal-cookie";

class FilteredTable extends Component {
    state = {
        filter: "",
        rowData : []
    }
    componentDidMount() {
        this.getDiscounts()
    }

    getDiscounts = ()  => {
        const cookies = new Cookies();
        axios.get('http://localhost:8989/get_all_discounts_for_user', {
            params: {
                token : cookies.get("logged_in")
            }
        }).then((Response) => {
            this.setState({
                rowData : Response.data
            })
        } )
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: '2000px', width: '600px'}}
            >
                <AgGridReact
                    rowData={this.state.rowData}>
                    <AgGridColumn field="discount" sortable={true}/>
                    <AgGridReact field="shop" sortable={true}/>
                    <AgGridReact field="organization" sortable={true}/>
                </AgGridReact>
            </div>
        );
    }
}

export default FilteredTable;