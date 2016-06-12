// Import the code we need
import React from 'react';
import Button from '../common/button';
import Parse from 'parse/react-native';

import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: ''
        };
    },
    render: function() {
        return <View style={styles.container}>
            <Text>Sign Up</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                autoCapitalize={'none'}
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
                style={styles.input}>
            </TextInput>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input}>
            </TextInput>
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                secureTextEntry={true}
                value={this.state.passwordConfirmation}
                onChangeText={(text) => this.setState({passwordConfirmation: text})}
                style={styles.input}>
            </TextInput>
            <Text style={styles.label}>{this.state.errorMessage}</Text>
            <Button text={'Sign Up'} onPress={this.signUpPressed}></Button>
            <Button text={'I Already Have an Account'} onPress={this.signInPressed}></Button>
        </View>
    },
    signUpPressed: function() {
        if (this.state.password !== this.state.passwordConfirmation) {
            return this.setState({errorMessage: 'Your passwords do not match'});
        }
        var user = new Parse.User();
        user.set('username', this.state.username);
        user.set('password', this.state.password);
        user.signUp(null, {
            success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
            error: (user, error) => { this.setState({errorMessage: error.message}); }
        });
    },
    signInPressed: function() {
        this.props.navigator.pop();
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    label: {
        fontSize: 18
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    }
});
