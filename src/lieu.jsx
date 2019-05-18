import React, {Component} from "react";
    
    class Lieu extends Component{
        render(){
            return(
                <div style={
                    (this.props.gender=== "male")? {border:"1em solid black"}: {border:"1em solid red"}
                } className="lieu">
                <img src={this.props.pic}></img>
                <h3>{this.props.detail}</h3>
                </div>
            );
        }
    }
 export default Lieu; 