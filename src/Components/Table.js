import '../App.scss'
import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from "axios";

class Table extends Component {
    state = {
        shop:"",
        rowData : []
    }

    gridOptions = {
        pagination: true,
        rowSelection: 'single',
    }

    componentWillMount() {
        this.geta()
        if(this.props.location.state !== null) {
            this.setState({
                shop: this.props.location.state.shop
            })
        }
        else{
            this.setState({
                shop: ""
            })
        }
    }
    geta = ()  => {
        axios.get('https://www.ag-grid.com/example-assets/row-data.json', {
            params: {
            }
        }).then((Response) => {
            this.setState({
                rowData : Response.data
            })
        } )
    }

    isExternalFilterPresent = () => {
        return this.state.shop !== ""
    }

    doesExternalFilterPass = (node) => {
        return node.data.make === this.state.shop
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: '2000px', width: '600px'}}
            >
                <AgGridReact
                    defaultColDef={{
                        filter: true,
                    }}
                    isExternalFilterPresent={this.isExternalFilterPresent}
                    doesExternalFilterPass={this.doesExternalFilterPass}
                    rowData={this.state.rowData}>
                    <AgGridColumn field="make" sortable={true}/>
                    <AgGridColumn field="model" sortable={true}/>
                    <AgGridColumn field="price" sortable={true}/>
                </AgGridReact>
            </div>
        );
    }
}

export default Table;
