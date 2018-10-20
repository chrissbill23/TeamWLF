import {CapitalOwner} from './Capitale';
import {ProfileRecord} from './ProfileRecord';

export class News extends ProfileRecord {
  public publisher: CapitalOwner;
  public photos: string[];
  public videos: string;
}
