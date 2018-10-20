import {VMongoDBService} from "../lib/VDBService/VMongoDBService";
import {Prodotto} from "../Data/Prodotto";
import {VMongoDBReadQuery} from "../lib/VDBService/VMongoDBReadQuery";
import {Request, Response} from "express";
import {VModel} from "./VModel";
import {config} from "../Config/Config";
import {VMongoDBWriteQuery} from "../lib/VDBService/VMongoDBWriteQuery";
import {VMongoDBUpdateQuery} from "../lib/VDBService/VMongoDBUpdateQuery";

class ProductModel extends VModel{
    private static db: VMongoDBService<Prodotto> = new VMongoDBService({database: "prova"}, Prodotto);
    private readQuery: VMongoDBReadQuery;
    private writeQuery: VMongoDBWriteQuery<Prodotto>;
    private updateQuery: VMongoDBUpdateQuery<Prodotto>;
    public constructor() {
        super(config.dataCryption.algorithm, config.dataCryption.password);
        this.readQuery = new VMongoDBReadQuery();
        this.writeQuery = new VMongoDBWriteQuery();
        this.updateQuery = new VMongoDBUpdateQuery();
    }
    public getProducts(req: Request, res: Response): void {
        const limit = parseInt(req.params.limit);
        const running = parseInt(req.params.running);
        const order = parseInt(req.params.order);
        this.readQuery.reset().lookup("capitalowners", "investors", "_id", "investors");
        if(order === 1 || order === -1){
            this.readQuery.sort({createdAt: -1});
        }
        if(running === 1){
            this.readQuery.setWhereCondition({devCompletion: { $lt: 1 }});
        }
        if(running === 0){
            this.readQuery.setWhereCondition({devCompletion: 1});
        }
        if(!isNaN(limit) && limit >= 0)
            this.readQuery.limit(parseInt(req.params.limit))
        ProductModel.db.findAll(this.readQuery)
            .then((news: Prodotto[]) => this.handleSuccess(news, res),
                (err) => this.handleError(err, res));
    }
    public addProducts(prod: Prodotto[]) {
        this.writeQuery.reset();
        this.writeQuery.setValue(prod);
        ProductModel.db.addAll(this.writeQuery).then((data: Prodotto[]) => {
            console.log("DATA ADDED!!")
        }, error => console.log(error))
    }
}
export const productModel: ProductModel = new ProductModel();