import { User } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export class LoginUseCase {
    constructor(private authRepository: AuthRepository) {};

    async execute(email: string, password: string): Promise<User> {
        return this.authRepository.login(email, password);
    }
}
