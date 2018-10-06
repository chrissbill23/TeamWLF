import {CapitalOwner} from './Capitale';

export class News {
  public _id?: string;
  public publisher: CapitalOwner;
  public title: string;
  public intro: string;
  public description: string;
  public photos: string;
  public videos: string;
}
