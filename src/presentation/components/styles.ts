import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #ffffff;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #007bff;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;
