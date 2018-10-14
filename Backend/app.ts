import {VServer} from "./lib/VServer/vserver";
import {newsRoute} from "./routes/newsRoute";
import {productRoute} from "./routes/productsRoute";
import {Prodotto} from "./Data/Prodotto";
import {productModel} from "./Model/ProductModel";

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
        p.name = "Progetto "+i;
        p.descr = "Lunga descrizione del progetto di prova "+(i+1);
        p.devCompletion = 1/(i+2);
        p.investors = ["5bb7d4bef0f2402a6844d412"];
        p.logo = 'assets/proj'+String(i+1)+'.jpg';
        arrP.push(p);

    }
    productModel.addProducts(arrP);
}, 4000);*/
