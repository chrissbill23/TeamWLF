import {
    Validator,
    VArrayProperty, VRefProperty, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VSchema
} from "../lib/VGoose/VGoose";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {CapitalOwner} from "./Capitale";

@VSchema()
export class News extends VDBMongoDocument{
    @VRefProperty({type: VGooseTypes.ObjectId, ref: CapitalOwner})
    public publisher: CapitalOwner;
    @VProperty({type: String, required: true})
    public title: string;
    @VProperty({type: String, required: true})
    public intro: string;
    @VProperty({type: String, required: true})
    public description: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public photos: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public videos: string;
}
