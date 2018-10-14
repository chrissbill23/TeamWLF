import {CapitalOwner} from './Capitale';

export class Prodotto {
  public _id?: string;
  public investors: CapitalOwner[];
  public name: string;
  public logo: string;
  public briefDescr: string;
  public descr: string;
  public website?: string;
  public linkdocumentation?: string;
  public devCompletion: number;
  public moreInfo: object; // Subclasses data
}

