import { AuthError } from "next-auth";

export class InvalidError extends AuthError {
    message = "";

    constructor(message = "unexpected error") {
        super(message);
        this.message = message;
    }
}
