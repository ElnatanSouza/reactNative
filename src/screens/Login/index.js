import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

const user = {
    id: 1,
    email: "teste@teste.com",
    senha: "12345"
}

function Login({ navigation }) {
    const [usuario, setUsuario] = React.useState("")
    const [senha, setSenha] = React.useState("")

    const autenticacao = () => {
        if (Platform.OS === "web") {
            if (user.email === usuario && user.senha === senha) {
                navigation.navigate("Tarefas")
            } else {
                alert("Credenciais inválidas, digite os campos novamente!")
            }
        } else {
            if (user.email === usuario && user.senha === senha) {
                navigation.navigate("Tarefas")
            } else {
                Alert.alert("Credenciais Invalidas!", "Digite as credenciais corretamente")
            }
        }
    }

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Digite o email..." style={styles.input} value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />
                    <TextInput placeholder="Digite o senha..." style={styles.input} secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn}
                        onPress={autenticacao}
                    >
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>
    )
}


export default Login