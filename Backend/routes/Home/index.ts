import {VRouter} from "../../lib/VServer/VRouter";
import {newsModel} from "../../Model/NewsModel";

export const indexRoute = new VRouter();
indexRoute.addGetRoute('/news/:limit', (req, res) => newsModel.getLatestNews(req, res));