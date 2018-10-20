import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {VProperty} from "../lib/VGoose/VGoose";

export abstract class ProfileRecord extends VDBMongoDocument{
    @VProperty({type: String, required: true})
    public name: string;
    @VProperty({type: String, required: true})
    public mainPhoto: string;
    @VProperty({type: String})
    public mainVideo: string;
    @VProperty({type: String, required: true})
    public briefDescr: string;
    @VProperty({type: String, required: true})
    public longDescr: string;
}