import {
    Validator,
    VArrayProperty, VBeforeSave, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VRefProperty, VSchema
} from "../lib/VGoose/VGoose";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {CapitalOwner} from "./Capitale";

@VSchema()
export class Prodotto extends VDBMongoDocument{
    @VArrayProperty({type: VGooseTypes.ObjectId, ref: CapitalOwner})
    public investors: CapitalOwner[];
    @VProperty({type: String, required: true})
    public name: string;
    @VProperty({type: String, required: true})
    public briefDescr: string;
    @VProperty({type: String, required: true})
    public descr: string;
    @VProperty({type: String, required: true, default: ""})
    public website: string;
    @VProperty({type: String, required: true, default: ""})
    public linkdocumentation: string;
    @VProperty({type: Object, required: false})
    public moreInfo: object;//Subclasses data
}
