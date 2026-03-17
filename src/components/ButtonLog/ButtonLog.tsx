import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ButtonLogProps {
    textButton: string;
    
}

export default function ButtonLog({ textButton }: ButtonLogProps) {
    return (
        <TouchableOpacity style={styles.button}  activeOpacity={0.85}>
            <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "#ED1C24",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 17,
        borderRadius: 6,
        marginTop: 8,
        shadowColor: "#ED1C24",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.45,
        shadowRadius: 16,
        elevation: 10,
    },
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
});