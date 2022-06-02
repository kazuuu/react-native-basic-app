import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';


export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleChangeText = (text) => {
        this.setState({ text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return

        onSubmit(text);

        this.setState({ text: '' })
    };

    render() {


        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    value={this.state.text}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='white'
                    style={styles.textInput}
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
    }
})