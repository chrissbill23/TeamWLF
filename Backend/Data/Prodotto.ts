import {
    Validator,
    VArrayProperty, VBeforeSave, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VRefProperty, VSchema
} from "../lib/VGoose/VGoose";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {CapitalOwner} from "./Capitale";

@VSchema()
export class Prodotto extends VDBMongoDocument{
    @VArrayProperty({type: VGooseTypes.ObjectId, ref: CapitalOwner})
    public investors: string[];
    @VProperty({type: String, required: true})
    public name: string;
    @VProperty({type: String, required: true})
    public logo: string;
    @VProperty({type: String, required: true})
    public briefDescr: string;
    @VProperty({type: String, required: true})
    public descr: string;
    @VProperty({type: String, default: ""})
    public website?: string;
    @VProperty({type: String, default: ""})
    public linkdocumentation?: string;
    @VProperty({type: Number, required: true, default: 0})
    public devCompletion: number;
    @VProperty({type: Object, required: false})
    public moreInfo: object;//Subclasses data
}
