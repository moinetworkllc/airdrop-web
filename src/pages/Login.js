import React, { Component } from 'react'
import IOMe from 'iome-widget'

 class Login extends Component {
  render() {
    return (
        <IOMe onSuccess={(creds) => {
        }}
      />
    )
  }
}

export default Login;