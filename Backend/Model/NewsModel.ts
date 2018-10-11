import {VMongoDBService} from "../lib/VDBService/VMongoDBService";
import {News} from "../Data/News";
import {VMongoDBReadQuery} from "../lib/VDBService/VMongoDBReadQuery";
import {Request, Response} from "express";
import {VModel} from "./VModel";
import {config} from "../Config/Config";

class NewsModel extends VModel{
    private static db: VMongoDBService<News> = new VMongoDBService({database: "prova"}, News);
    private readQuery: VMongoDBReadQuery;
    public constructor() {
        super(config.dataCryption.algorithm, config.dataCryption.password);
        this.readQuery = new VMongoDBReadQuery();
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
}
export const newsModel: NewsModel = new NewsModel();