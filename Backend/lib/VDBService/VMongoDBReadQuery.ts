/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VMongoDBQuery} from "./VMongoDBQuery";

export class VMongoDBReadQuery implements VMongoDBQuery {
    private matchOnly: boolean = false;
    private agregateQuery: any[] = [];

    private addMatch(obj: any) {
        for (const v of this.agregateQuery) {
            if (v.$match != undefined ) {
                Object.assign(v.$match, obj);
                return;
            }
        }
        this.agregateQuery.push({$match: obj});
    }
    public selectAttributes(args: string[]): this {
        if (args != undefined && args != null && args.length > 0) {
            const obj = {};
            for (const value of args) {
                obj[value] = 1;
            }
            this.agregateQuery.push({$project: obj});
        }
        return this;
    }
    public limit(max: number): this {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({$limit: max});
        return this;
    }
    public skip(max: number): this {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({$skip: max});
        return this;
    }
    public sort(listOfSortedAttr: any): this {
        for (const key in listOfSortedAttr) {
            if (this[key] != undefined && listOfSortedAttr[key] != -1 && listOfSortedAttr[key] != 1 ) {
                delete listOfSortedAttr[key];
            }
        }
        this.agregateQuery.push({$sort: listOfSortedAttr});
        return this;
    }
    public lookup(otherCollection: string, localField: string,
                  foreignField: string, arrayName: string, onetoone: boolean =false): this {
        const obj = {
            $lookup: {
                from: otherCollection,
                as: arrayName,
                localField,
                foreignField,
            },
        };
        this.agregateQuery.push(obj);
        if(onetoone) {
            const obj = {};
            obj[localField] = { "$arrayElemAt": [ "$"+arrayName, 0 ] };
            this.agregateQuery.push({$project: obj});
        }
        return this;
    }
    public unwind(arrayName: string): this {
        this.agregateQuery.push({
            $unwind: arrayName,
        });
        return this;
    }
    public getQuery(): any {
        if(!this.matchOnly){
            return this.agregateQuery;
        }
        for (const v of this.agregateQuery) {
            if (v.$match != undefined ) {
                return v.$match;
            }
        }
        return {};
    }
    public setOnlyMatch(value: boolean): this {
        this.matchOnly = value;
        return this;
    }
    public groupBy(groupList: any): this {
        this.agregateQuery.push(groupList);
        return this;
    }
    public countDocuments(nameOfResult: string): this {
        this.agregateQuery.push({$count: nameOfResult});
        return this;
    }
    public reset(): this {
        this.agregateQuery = [];
        return this;
    }
    public setWhereCondition(whereCondition: any): this {
        this.addMatch(whereCondition);
        return this;
    }
    public orCondition(args: any[]): this {
        if (args.length > 1) {
            this.addMatch({$or: args});
        }
        return this;
    }
}
