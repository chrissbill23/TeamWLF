import {VRouter} from "../lib/VServer/VRouter";
import {newsModel} from "../Model/NewsModel";

export const newsRoute = new VRouter();
newsRoute.addGetRoute('/news/:limit', (req, res) => newsModel.getLatestNews(req, res));