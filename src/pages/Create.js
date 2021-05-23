import React, { Component } from "react";

export default class Create extends Component {

    state = {
        user: "",
        name: "",
        number: "",
        pwd: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle Submit");
        console.log(this.state);
        localStorage.setItem(this.state.user, JSON.stringify(this.state));
        this.setState({
            user: "",
            name: "",
            number: "",
            pwd: ""
        })

        this.props.history.push("/create")
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (


            <div className="container card mt-5 col-md-6">
                <form className="card-body" onSubmit={this.handleSubmit}  >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name : {'     '}</label>
                        <input
                            type="name"
                            className="form-control"
                            id="exampleInputEmail1"

                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </div>
                    <text>
                        <br />
                    </text>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email-Id : {'     '}</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            aria-describedby="emailHelp"
                            value={this.state.user}
                            onChange={this.handleChange}
                            name="user"
                        />
                    </div>
                    <text>
                        <br />
                    </text>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone number : {'     '}</label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.number}
                            onChange={this.handleChange}
                            name="number"
                        />
                    </div>
                    <text>
                        <br />
                    </text>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">ScreenName : {'     '}</label>
                        <input
                            type="name"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </div>
                    <text>
                        <br />
                    </text>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password : {'     '}</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.pwd}
                            onChange={this.handleChange}
                            name="pwd"
                        />
                    </div>
                    <text>
                        <br />
                    </text>
                    <button type="submit" className="btn btn-primary">
                        Submit
          </button>
                </form>
            </div>
        );
    }
}