import React, { Component } from "react";

class SignUp extends Component {

    constructor(props){
      super(props);
      this.state = {
      };
    }

    handleSubmit = async(e) => {

        e.preventDefault();

        // api.GenerateJWT(header, claims, null, res => {
        //   if (res.status === 200) {
        //     this.setState({ Response: "Error!" });
        //   }
        //   else {
        //     this.setState({ Response: "Error!" });
        //   }
        // });
        

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">Sign In?</a>
                </p>
            </form>
        );
    }
}


export default SignUp

