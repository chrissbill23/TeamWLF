import {VServer} from "./lib/VServer/vserver";
import {newsRoute} from "./routes/newsRoute";
import {productRoute} from "./routes/productsRoute";
import {Prodotto} from "./Data/Prodotto";
import {productModel} from "./Model/ProductModel";
import {News} from "./Data/News";
import {newsModel} from "./Model/NewsModel";

const server: VServer = new VServer();

server.addSubApp(newsRoute);
server.addSubApp(productRoute);
server.addMiddle((req, res) => {
    res.status(404)
        .json({
            message: 'Data not found',
        });
    res.send();
})
server.listen();/*
setTimeout(function () {
    const arrP: Prodotto[] = [];
    for(var i = 0; i <4; ++i) {
        const p = new Prodotto();
        p.briefDescr = "Breve descrizione del progetto di prova "+(i+1);
        p.name = "Progetto "+(i+1);
        p.longDescr = "Lunga descrizione del progetto di prova "+(i+1);
        p.devCompletion = 1/(i+2);
        p.investors = ["5bb7d4bef0f2402a6844d412"];
        p.mainPhoto = 'assets/proj'+String(i+1)+'.jpg';
        arrP.push(p);

    }
    productModel.addProducts(arrP);


    const arrN: News[] = [];
    for(var i = 0; i <4; ++i) {
        const p = new News();
        p.briefDescr = "Introduzione alla news "+(i+1);
        p.name = "News "+ (i+1);
        p.longDescr = "Tutto il contenuto della news "+(i+1);
        p.publisher = "5bb7d4bef0f2402a6844d412";
        p.mainPhoto = 'assets/prova'+(i+1)+'.jpg';
        arrN.push(p);

    }
    newsModel.addNews(arrN);
}, 4000);
*/