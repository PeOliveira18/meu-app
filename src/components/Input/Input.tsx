import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    name: string;
}

export default function Input({ name, ...props }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{name.toUpperCase()}</Text>
            <TextInput
                {...props}
                style={[styles.input, props.style]}
                placeholderTextColor="rgba(255,255,255,0.25)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    label: {
        fontSize: 10,
        fontWeight: "700",
        color: "rgba(255,255,255,0.35)",
        marginBottom: 8,
        letterSpacing: 1.5,
    },
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,0.15)",
        paddingHorizontal: 0,
        fontSize: 15,
        color: "#fff",
    },
});