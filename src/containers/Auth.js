import React from "react";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      password: "",
    };
  }

  on_handle_number = (event) => {
    const val = event.target.value;
    const val_pattern = new RegExp("^[6-9][0-9]{0,9}$"); // cannot delete the first digit
    // const final_val_pattern = new RegExp("^[6-9][0-9]{0,9}$");

    if (val_pattern.test(val)) {
      this.setState({
        value: val,
      });
    }
  };

  on_handle_password = (event) => {
    const password = event.target.password;
    //only numbers, minimum characters 6
    const pass_pattern = new RegExp("^[0-9a-zA-Z]{6,}$");

    if (pass_pattern.test(password)) {
      this.setState({
        password,
      });
    }
  };

  on_handle_submit = (event) => {
    event.preventDefault();
    window.localStorage.setItem("phone", this.state.value);
    window.localStorage.setItem("password", this.state.password);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone_number"
              placeholder="Enter Phone Number"
              value={this.state.value}
              onChange={this.on_handle_number}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.on_handle_password}
            />
          </div>
          <button type="submit" onClick={this.on_handle_submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;
