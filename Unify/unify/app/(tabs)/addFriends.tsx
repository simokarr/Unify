import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme, TouchableWithoutFeedback, Keyboard } from 'react-native';

const AddFriends: React.FC = () => {
    const [friendName, setFriendName] = useState('');
    const [friendLocation, setFriendLocation] = useState('');

    const colorScheme = useColorScheme(); // Get the current color scheme of the device

    const handleAddFriend = () => {
        // Logic to add friend
    };

    // Determine text color based on the color scheme
    const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
    const buttonColor = colorScheme === 'dark' ? '#333333' : '#DDDDDD'; // Adjust button color based on the color scheme

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={{ ...styles.title, color: textColor }}>Add Your Friends!</Text>
                <TextInput
                    style={{ ...styles.input, color: textColor }}
                    placeholder="Friend's Name"
                    value={friendName}
                    onChangeText={setFriendName}
                    placeholderTextColor={textColor}
                />
                <TextInput
                    style={{ ...styles.input, color: textColor }}
                    placeholder="Friend's Program"
                    value={friendLocation}
                    onChangeText={setFriendLocation}
                    placeholderTextColor={textColor}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add Friend" onPress={handleAddFriend} color="#000000" />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#a3c7f2', // Baby blue background color
        borderRadius: 5,
        overflow: 'hidden', // Clip the content to the borderRadius
    },
});

export default AddFriends;

