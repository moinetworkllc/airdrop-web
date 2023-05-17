import React, { Component } from 'react'
import IOMe from 'iome-widget'

 class Login extends Component {
  render() {
    return (
        <IOMe onSuccess={(creds) => {
          // IOMe username
          console.log(creds.userName); 
          // IOMe UserID
          console.log(creds.userID); 
          // User Authenticiation token to query information  
          console.log(creds.authToken);
        }}
      />
    )
  }
}

export default Login;