import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() { //componentes baseados em classe tem que ter a função render()
        return (
            <h1>{this.props.value}</h1> //componentes em classe pegam o props usando this
        )
    }
} 