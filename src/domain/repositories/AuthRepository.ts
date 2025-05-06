import { LoginResponseType } from "../../shared/utils/LoginResponseTypes";

export interface AuthRepository {
    login(email: string, password: string): Promise<LoginResponseType>;
    logout(): Promise<void>;
}
