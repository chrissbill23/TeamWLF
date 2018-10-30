import {VArrayProperty, VRefProperty, VGooseTypes,VSchema} from "../lib/VGoose/VGoose";
import {CapitalOwner} from "./Capitale";
import {ProfileRecord} from "./ProfileRecord";

@VSchema()
export class News extends ProfileRecord{
    @VRefProperty({type: VGooseTypes.ObjectId, ref: CapitalOwner})
    public publisher: string;
}
