import React, { Component } from 'react'

export default class Home extends Component {

    componentWillUnmount() {
        console.log("Unmounted");
    }

    goto = () => {
        this.props.history.push("/showAcc")
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Welcome to Technoelevate  </h3>

            </div>
        )
    }
}