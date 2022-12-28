import React, { Component } from 'react'
import Child from './Child'

export class parent extends Component {
 
   constructor(props){
    super(props)
    this.state={
        parentname:"Robin Hood"
    }
   }
   
   greetParent=(child)=>{
    alert(`Hello ${this.state.parentname} ${child}`)
   }


  render() {
    return (
      <Child greet={this.greetParent} />
    )
  }
}

export default parent