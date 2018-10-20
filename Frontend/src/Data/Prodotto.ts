import {CapitalOwner} from './Capitale';
import {ProfileRecord} from './ProfileRecord';

export class Prodotto extends ProfileRecord {
  public investors: CapitalOwner[];
  public website?: string;
  public linkdocumentation?: string;
  public devCompletion: number;
  public moreInfo: object; // Subclasses data
}

