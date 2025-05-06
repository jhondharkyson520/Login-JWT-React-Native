import axios from 'axios';
import { LoginResponseType } from '../../shared/utils/LoginResponseTypes';

export class RemoteAuthDataSource {
    async login(email: string, password: string): Promise<LoginResponseType> {
        const response = await axios.post('http://10.0.2.2:3000/users/login', {email, password});
        return response.data;
    }
}
