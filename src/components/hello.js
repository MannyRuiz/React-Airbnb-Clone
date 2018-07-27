import React from "react"

class Hello extends React.Component {
    render() {
        return <div>Hola {this.props.nombre} {this.props.apellido}!!</div>
    }
}

export default Hello;