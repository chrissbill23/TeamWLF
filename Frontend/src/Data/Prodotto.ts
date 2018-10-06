import {CapitalOwner} from './Capitale';

export class Prodotto {
  public _id?: string;
  public investors: CapitalOwner[];
  public name: string;
  public briefDescr: string;
  public descr: string;
  public website: string;
  public linkdocumentation: string;
  public moreInfo: object;
}
