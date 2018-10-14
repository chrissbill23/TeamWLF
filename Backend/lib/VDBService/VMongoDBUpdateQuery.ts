/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDBMongoDocument} from "../VGoose/VDBMongoDocument";
import {VMongoDBQuery} from "./VMongoDBQuery";

export class VMongoDBUpdateQuery<T extends VDBMongoDocument> implements VMongoDBQuery{
    private query: {filter: any, values: any, options: any} = {filter: {}, values: {}, options: {runValidator: true}};
    public getQuery(): any {
        return this.query;
    }
    public reset(){
        this.query = null;
    }
    public match(value: any): this {
        this.query.filter = value;
        return this;
    }
    public setValue(value: any): this {
        this.query.values = value;
        return this;
    }
    public validateOnUpdate(v: boolean): this {
        this.query.options.runValidator = v;
        return this;
    }
}
