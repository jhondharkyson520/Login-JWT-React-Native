import { User } from "../../domain/entities/User";
import axios from 'axios';

export class RemoteAuthDataSource {
    async login(email: string, password: string): Promise<User> {
        const response = await axios.post('http://10.0.2.2:3000/users/login', {email, password});
        return response.data;
    }
}
