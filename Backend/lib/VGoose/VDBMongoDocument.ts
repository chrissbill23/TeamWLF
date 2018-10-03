/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
export abstract class VDBMongoDocument{
    public _id?: string;
    private model?: any;
    private schema?: any;
    public getModel(): any {
        return this.model;
    }
    public getSchema(): any {
        return this.schema;
    }
    public getData(): any {
        return this._id;
    }
}
