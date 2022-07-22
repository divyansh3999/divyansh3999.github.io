import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA';

export default class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Aman"
        }
        console.log("LifeCycle : constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle : getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle : component did mount");
    }
  render() {
    console.log("LifeCycle : render");
    return (
      <div>LifeCycle
        <LifeCycleA></LifeCycleA>
      </div>
    )
  }
}
