class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); //Message Property
        this.code = errorCode;
    }
}

export default HttpError;
