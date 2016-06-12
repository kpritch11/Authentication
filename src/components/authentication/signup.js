// Import the code we need
import React from 'react';
import Button from '../common/button';

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
            passwordConfirmation: ''
        };
    },
    render: function() {
        return <View style={styles.container}>
            <Text>Sign Up</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
                style={styles.input}>
            </TextInput>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input}>
            </TextInput>
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                value={this.state.passwordConfirmation}
                onChangeText={(text) => this.setState({passwordConfirmation: text})}
                style={styles.input}>
            </TextInput>
            <Button text={'I Already Have an Account'} onPress={this.signInPressed}></Button>
        </View>
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
