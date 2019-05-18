import React, {Component} from "react";

class Chiffre extends Component{
    render(){
        return(
            <div style={
				(this.props.gender=== "male")? {border:"1em solid black"}: {border:"1em solid red"}
			}   className="number">
            <p>{this.props.number}</p>  
            <h6>{this.props.des}</h6>
            </div>
        );
    }
}
export default Chiffre;  