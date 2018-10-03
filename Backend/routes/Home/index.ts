import {VRouter} from "../../lib/VServer/VRouter";

export const indexRoute = new VRouter();
indexRoute.addGetRoute('/', (req, resp) => { resp.send("OK"); });