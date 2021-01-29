import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class Player extends Component {
  render () {
    return <ReactPlayer 
            url={this.props.url}
            controls = {true}
            width="50rem"
            height="28.125rem"
            />
  }
}