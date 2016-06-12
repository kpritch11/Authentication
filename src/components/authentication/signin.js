// Import the code we need
import React from 'react';
import Button from '../common/button' // .. is up one folder then into common
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
            errorMessage: ''
        };
    },
    render: function() {
        return <View style={styles.container}>
            <Text>Sign In</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                autoCapitalize={'none'}
                onChangeText={(text) => this.setState({username: text})}
                style={styles.input}
                value={this.state.username}>
            </TextInput>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                secureTextEntry={true}
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input}
                value={this.state.password}>
            </TextInput>
            <Text style={styles.label}>{this.state.errorMessage}</Text>
            <Button text={'Sign In'} onPress={this.signInPressed}></Button>
            <Button text={'Don\'t Have an Account? Sign Up'} onPress={this.signUpPressed}></Button>
        </View>
    },
    signInPressed: function() {
        Parse.User.logIn(this.state.username, this.state.password, {
            success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
            error: (data, error) => { this.setState({ errorMessage: error.message }); }
        });
    },
    signUpPressed: function() {
        this.props.navigator.push({name: 'signUp'});
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    label: {
        fontSize: 18
    }
});
