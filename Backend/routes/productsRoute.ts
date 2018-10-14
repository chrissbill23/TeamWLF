import {VRouter} from "../lib/VServer/VRouter";
import {productModel} from "../Model/ProductModel";

export const productRoute = new VRouter();
productRoute.addGetRoute('/products/:limit/:running/:order', (req, res) => productModel.getProducts(req, res));