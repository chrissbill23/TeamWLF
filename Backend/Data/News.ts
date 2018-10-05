import {
    Validator,
    VArrayProperty, VRefProperty, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VSchema
} from "../lib/VGoose/VGoose";
import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {CapitaleOwner} from "./Capitale";

@VSchema()
export class News extends VDBMongoDocument{
    @VRefProperty({type: VGooseTypes.ObjectId, ref: CapitaleOwner})
    public publisher: CapitaleOwner;
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