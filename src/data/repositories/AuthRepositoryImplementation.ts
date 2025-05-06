import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { RemoteAuthDataSource } from "../datasources/RemoteAuthDataSource";

export class AuthRepositoryImplementation implements AuthRepository {
    constructor(private remoteDataSource: RemoteAuthDataSource) {};

    async login(email: string, password: string): Promise<User> {
        return this.remoteDataSource.login(email, password);
    }

    async logout(): Promise<void> {
        // fazer funcionalidade logout depois
    }
}