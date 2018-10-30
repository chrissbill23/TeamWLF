export abstract class ProfileRecord {
  public _id?: string;
  public name: string;
  public mainPhoto: string;
  public photos: string[];
  public mainVideo: string;
  public videos: string[];
  public mainLink: string;
  public links: string[];
  public briefDescr: string;
  public longDescr: string;
  public searchable: boolean;
  public type: string;
  public cath: string[];
  public tags: string[];
}
