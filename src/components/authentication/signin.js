// Import the code we need
import React from 'react';
import Button from '../common/button' // .. is up one folder then into common

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
            password: ''
        };
    },
    render: function() {
        return <View style={styles.container}>
            <Text>Sign In</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
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
            <Button text={'Sign In'} onPress={this.onPress}></Button>
        </View>
    },
    onPress: function() {
        console.log('signInPressed')
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
