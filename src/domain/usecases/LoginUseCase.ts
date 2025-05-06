import { LoginResponseType } from "../../shared/utils/LoginResponseTypes";
import { AuthRepository } from "../repositories/AuthRepository";


export class LoginUseCase {
    constructor(private authRepository: AuthRepository) {};

    async execute(email: string, password: string): Promise<LoginResponseType> {
        return this.authRepository.login(email, password);
    }
}
