import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

// Create component loing form to display input & button
class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

// Export component to use in main.js
export default LoginForm;
