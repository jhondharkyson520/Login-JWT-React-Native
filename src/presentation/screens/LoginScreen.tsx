import { useState } from "react";
import { RemoteAuthDataSource } from "../../data/datasources/RemoteAuthDataSource";
import { AuthRepositoryImplementation } from "../../data/repositories/AuthRepositoryImplementation";
import { LoginUseCase } from "../../domain/usecases/LoginUseCase";
import { Button, ButtonText, Container, Input } from "../components/styles";
import { Alert } from "react-native";

const loginUseCase = new LoginUseCase(
    new AuthRepositoryImplementation(new RemoteAuthDataSource())
);

export const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUseCase.execute(email, password);
            console.log('User returned:', response);
            
            Alert.alert('Sucess', `Welcome, ${response.user.name}`);
        } catch (error) {
            Alert.alert('Error', `Credentials invalid`);
        }
    }

    return(
        <Container>
            <Input
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
            />
            <Input
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    )
}
