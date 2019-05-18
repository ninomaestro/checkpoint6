import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			<div style={
				(this.props.gender=== "male")? {border:"1em solid black"}: {border:"1em solid red"}
			} className="box-container">
			<h2>{this.props.title}</h2>
        	<p>{this.props.des}</p>
        	<button>en savoir plus</button>
			</div>
		);
	}
}

export default Box;