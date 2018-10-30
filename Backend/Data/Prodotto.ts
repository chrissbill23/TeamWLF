import {VArrayProperty, VGooseTypes, VProperty, VSchema} from "../lib/VGoose/VGoose";
import {CapitalOwner} from "./Capitale";
import {ProfileRecord} from "./ProfileRecord";

@VSchema()
export class Prodotto extends ProfileRecord{
    @VArrayProperty({type: VGooseTypes.ObjectId, ref: CapitalOwner})
    public investors: string[];
    @VProperty({type: Number, required: true, default: 0})
    public devCompletion: number;
    @VProperty({type: Object, required: false})
    public moreInfo: object;//Subclasses data
}
