import {
    Validator,
    VArrayProperty, VBeforeSave, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VSchema,
} from "../lib/VGoose/VGoose";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";

@VSchema()
export class Capitale extends VDBMongoDocument{
    @VProperty({type: Number, required: true})
    public value: number;
}
@VSchema()
export class CapitaleOwner extends VDBMongoDocument{
    @VProperty({type: Object, required: false})
    public info: object;
}
