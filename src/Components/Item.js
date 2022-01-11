import '../App.scss';
import * as React from "react"


function Item(props){
    return (
        <div>
            <fieldset style={{
                fontSize:"20px",
                fontFamily: "Arial",
                textAlign : "center",
                borderColor: "#222831",
                margin: "10px",
                height: "150px",
                width: "100px",
                color: props.marked ?  "white" : "#222831",
                borderRadius: "5px",
                backgroundColor : props.marked ?  "#222831" : "#ffffff"
            }}
            id={props.id}
            name={props.name}>
                {props.name}
            </fieldset>
        </div>
    );
}

export default Item;
