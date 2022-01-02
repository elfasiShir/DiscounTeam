import './App.scss';
import * as React from "react"
import Table from "./Components/Table";
import Header from "./Components/Header";


class App extends React.Component {
    state = {
    }
    componentWillMount() {

    }

    render() {
        return(
            <div>
                <Header/>
                <Table/>
            </div>
        )
    }

}
export default App;
