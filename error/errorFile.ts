export enum STATUS {
    OK = 200,
    CREATED = 201,
    BAD = 404
}

interface iError {
    errorName: string;
    errorMessage: string;
    errorSuccess: boolean;
    errorStatus: STATUS;
}

export class errorFile extends Error {
    public readonly errorName: string;
    public readonly errorMessage: string;
    public readonly errorSuccess: boolean = false;
    public readonly errorStatus: STATUS;

    constructor(arrgs: iError){
        super(arrgs.errorMessage)
        this.errorName = arrgs.errorName;
        this.errorMessage = arrgs.errorMessage;
        this.errorStatus = arrgs.errorStatus;
        
        if(this.errorSuccess !== undefined){
            this.errorSuccess = arrgs.errorSuccess;
        }
        Error.captureStackTrace(this)
    }
}