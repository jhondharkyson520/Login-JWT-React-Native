import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { LoginResponseType } from "../../shared/utils/LoginResponseTypes";
import { RemoteAuthDataSource } from "../datasources/RemoteAuthDataSource";

export class AuthRepositoryImplementation implements AuthRepository {
    constructor(private remoteDataSource: RemoteAuthDataSource) {};

    async login(email: string, password: string): Promise<LoginResponseType> {
        const response = await this.remoteDataSource.login(email, password);
        return {
            success: response.success,
            token: response.token,
            user: response.user
        }
    }

    async logout(): Promise<void> {
        // fazer funcionalidade logout depois
    }
}
