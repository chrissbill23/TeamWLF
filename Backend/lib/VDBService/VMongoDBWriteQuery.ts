/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDBMongoDocument} from "../VGoose/VDBMongoDocument";
import {VMongoDBQuery} from "./VMongoDBQuery";

export class VMongoDBWriteQuery<T extends VDBMongoDocument> implements VMongoDBQuery{
    private query: T | T[];
    constructor(values: T = null) {
        this.query = values;
    }
    public getQuery(): any {
        return this.query;
    }
    public reset(){
        this.query = null;
    }
    public setValue(value: T | T[]): this {
        this.query = value;
        return this;
    }
}
