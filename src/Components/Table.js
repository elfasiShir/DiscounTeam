import '../App.scss'
import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from "axios";

class Table extends Component {
    state = {
        rowData : []
    }
    componentDidMount() {
        this.useEffect()
    }

    useEffect() {
        axios.get('https://www.ag-grid.com/example-assets/row-data.json', {
            params: {
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
                style={{ height: '2000px', width: '800px'}}
            >
                <AgGridReact
                    rowData={this.state.rowData}>
                    <AgGridColumn field="make" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
                </AgGridReact>
            </div>
        );
    }
}

export default Table;