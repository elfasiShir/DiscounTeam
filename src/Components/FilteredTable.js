import '../App.scss'
import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from "axios";

class FilteredTable extends Component {
    state = {
        rowData : []
    }
    componentDidMount() {
        this.geta()
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

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: '2000px', width: '600px'}}
            >
                <AgGridReact
                    rowData={this.state.rowData}>
                    <AgGridColumn field="make" sortable={true}/>
                    <AgGridColumn field="model" sortable={true}/>
                    <AgGridColumn field="price" sortable={true}/>
                </AgGridReact>
            </div>
        );
    }
}

export default FilteredTable;