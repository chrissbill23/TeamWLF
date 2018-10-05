import {VBaseException} from "../lib/V-Exceptions/VBaseException";
import {Response} from "express";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import * as crypto from "crypto";

export abstract class VModel {
    private algorithm: string;
    private password: string;
    protected constructor(encryptAlgorithm: string, password: string) {
        this.algorithm = encryptAlgorithm;
        this.password = password;
    }
    protected handleError(err: VBaseException, res: Response) {
        res.status(err.getStatus()).json(err.giveMessageToClient());
        res.end();
    }
    protected handleSuccess(data: VDBMongoDocument | VDBMongoDocument[] | any, res: Response) {
        res.status(200).json(data);
        res.end();
    }
    protected encrypt(data: any) {
        const cipher = crypto.createCipher(this.algorithm, this.password);
        let crypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    protected decrypt(text: string) {
        const decipher = crypto.createDecipher(this.algorithm, this.password);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}
