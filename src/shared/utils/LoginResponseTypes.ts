import { User } from "../../domain/entities/User";

export type LoginResponseType = {
    success: string;
    token: string;
    user: Partial<User>;
}
