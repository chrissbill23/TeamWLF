import {VMongoDBService} from "../lib/VDBService/VMongoDBService";
import {News} from "../Data/News";
import {VMongoDBReadQuery} from "../lib/VDBService/VMongoDBReadQuery";
import {Request, Response} from "express";
import {VModel} from "./VModel";
import {config} from "../Config/Config";
import {VMongoDBWriteQuery} from "../lib/VDBService/VMongoDBWriteQuery";
import {VMongoDBUpdateQuery} from "../lib/VDBService/VMongoDBUpdateQuery";

class NewsModel extends VModel{
    private static db: VMongoDBService<News> = new VMongoDBService({database: "prova"}, News);
    private readQuery: VMongoDBReadQuery;
    private writeQuery: VMongoDBWriteQuery<News>;
    private updateQuery: VMongoDBUpdateQuery<News>;
    public constructor() {
        super(config.dataCryption.algorithm, config.dataCryption.password);
        this.readQuery = new VMongoDBReadQuery();
        this.writeQuery = new VMongoDBWriteQuery();
        this.updateQuery = new VMongoDBUpdateQuery();
    }
    public getLatestNews(req: Request, res: Response): void {
        const limit = parseInt(req.params.limit);
        this.readQuery.reset().sort({createdAt: -1})
                    .lookup("capitalowners", "publisher", "_id", "publisher");
        if(!isNaN(limit) && limit >= 0)
            this.readQuery.limit(parseInt(req.params.limit))
        NewsModel.db.findAll(this.readQuery)
            .then((news: News[]) => this.handleSuccess(news, res),
                (err) => this.handleError(err, res));
    }

    public addNews(prod: News[]) {
        this.writeQuery.reset();
        this.writeQuery.setValue(prod);
        NewsModel.db.addAll(this.writeQuery).then((data: News[]) => {
            console.log("DATA ADDED!!")
        }, error => console.log(error))
    }
}
export const newsModel: NewsModel = new NewsModel();