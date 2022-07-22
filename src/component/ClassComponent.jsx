import React from "react";
class ClassComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qtn : 0
      }
    }

    updateQtn=()=>{
        this.setState({
            qtn:this.state.qtn+1
        })
    }

    componentDidMount(){
        console.log("execute after the render");
    }

    componentDidUpdate(){
        console.log("component updated");
    }
  render() {
    return <>
    <h1>Class Component</h1>
    <h2>Cart : {this.state.qtn}</h2>
    <button onClick={this.updateQtn}>Update Qtn</button>
    </>
  }
}
export default ClassComponent;