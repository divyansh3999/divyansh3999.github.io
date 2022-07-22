import React, { Component } from 'react'

export default class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Aman"
        }
        console.log("LifeCycleA : constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA : getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA : component did mount");
    }
  render() {
    console.log("LifeCycleA : render");
    return (
      <div>LifeCycleA</div>
    )
  }
}
