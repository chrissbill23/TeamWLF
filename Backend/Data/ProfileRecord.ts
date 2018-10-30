import {VDBMongoDocument} from "../lib/VGoose/VDBMongoDocument";
import {VArrayProperty, VGooseTypes, VProperty} from "../lib/VGoose/VGoose";

export abstract class ProfileRecord extends VDBMongoDocument{
    @VProperty({type: String, required: true})
    public name: string;
    @VProperty({type: String, required: true})
    public mainPhoto: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public photos: string[];
    @VProperty({type: String})
    public mainVideo: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public videos: string[];
    @VProperty({type: String, required: true})
    public briefDescr: string;
    @VProperty({type: String, required: true})
    public longDescr: string;
    @VProperty({type: String, required: false})
    public mainLink: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public links: string[];
    @VProperty({type: Boolean, default: true})
    public searchable: boolean;
    @VProperty({type: String})
    public type: string;
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public cath: string[];
    @VArrayProperty({type: VGooseTypes.String, required: false})
    public tags: string[];
}