import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

// Create component loing form to display input & button
class LoginForm extends Component {
    // Method to check user input the email
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    // Method to check user input the password
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    // Method to check when user press the button login
    onButtonPress() {
        // Destruction
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    // Display component in the screen
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
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}> 
                    {this.props.error} 
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// Function for take piece of state and parsing to props to store to the component
const mapStateToProps = ({ auth }) => {
    // Refactor
    const { email, password, error } = auth;
    
    return { email, password, error };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

// Export component to use in main.js & connect the actions to take new spesific state to export in to component
export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
)(LoginForm);
