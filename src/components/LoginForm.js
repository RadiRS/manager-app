import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

// Create component loing form to display input & button
class LoginForm extends Component {
    // Method to check user input the email
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

// Function for take piece of state and parsing to props to store to the component
const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

// Export component to use in main.js & connect the actions to take new spesific state to export in to component
export default connect(
    mapStateToProps,
    { emailChanged }
)(LoginForm);
