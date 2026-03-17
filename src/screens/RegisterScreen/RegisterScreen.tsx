import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ButtonLog from "../../components/ButtonLog/ButtonLog";
import Input from "../../components/Input/Input";


export default function RegisterScreen() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >    
                    <View style={styles.logoArea}>
                        <Text style={styles.logoText}>FIAP</Text>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Criar conta</Text>
                        <Text style={styles.headerSubtitle}>Preencha os dados abaixo</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.row}>
                            <View style={{ flex: 1 }}>
                                <Input name="Nome" placeholder="Seu nome" value={nome} onChangeText={setNome} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input name="Sobrenome" placeholder="Seu sobrenome" value={sobrenome} onChangeText={setSobrenome} />
                            </View>
                        </View>

                        <Input
                            name="Email"
                            placeholder="seu@email.com"
                            value={email}
                            onChangeText={setEmail}
                            
                            autoCapitalize="none"
                        />
                        <Input
                            name="Senha"
                            placeholder="••••••••"
                            value={senha}
                            onChangeText={setSenha}
                            
                        />
                        <Input
                            name="Confirmar senha"
                            placeholder="••••••••"
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            
                        />

                        <View style={styles.buttonWrapper}>
                            <ButtonLog textButton="Criar conta" />
                        </View>

                        <TouchableOpacity style={styles.loginLink}>
                            <Text style={styles.textPossui}>
                                Já tem uma conta?
                                <Text style={styles.textLink}>Entrar</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginLink}>
                            <Text style={styles.textPossui}>
                                Esqueceu sua senha?
                                <Text style={styles.textLink}>Clique aqui</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        width: '100%'
    },
    logoArea: {
        marginBottom: 32,
        alignItems: 'center'
    },
    logoText: {
        fontSize: 22,
        fontWeight: "800",
        color: "#fff",
        letterSpacing: 8,
    },
    header: {
        marginBottom: 32,
        gap: 6,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: "700",
        color: "#fff",
        letterSpacing: -0.8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.4)",
        fontWeight: "400",
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.04)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 24,
        gap: 20,
    },
    row: {
        flexDirection: "row",
        gap: 16,
    },
    buttonWrapper: {
        marginTop: 8,
    },
    loginLink: {
        alignItems: "center",
        paddingVertical: 4,
    },
    textPossui: {
        fontSize: 13,
        color: "rgba(255,255,255,0.4)",
        textAlign: "center",
    },
    textLink: {
        color: "#ED1C24",
        fontWeight: "600",
    },
});