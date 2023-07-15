class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); //Message Property
        this.code = errorCode;
    }
}

module.exports = HttpError;
