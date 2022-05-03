import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPass: false,
      loginForm: {
        email: {
          value: '',
          error: ''
        },
        password: {
          value: '',
          error: ''
        }
      }
    }
  }

}
