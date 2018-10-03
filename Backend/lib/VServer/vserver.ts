import * as express from "express";
import * as bodyParser from "body-parser";
import {VAppCreator} from "./VAppCreator";
export enum ports {
    DevPort = 3002,
}
interface Header {
    type: string;
    value: string;
}
export class VServer extends VAppCreator {
    private port: string = '' + ports.DevPort;

    public constructor(headers: Header[] = [{type: 'Access-Control-Allow-Origin', value: '*'},
                                            {type: 'Access-Control-Allow-Headers', value: 'Origin, Authorization, ' +
                                                'Content-Type, Accept,' + ' Access-Control-Allow-Origin, ' +
                                                'Access-Control-Allow-Headers, ' + 'Access-Control-Allow-Methods'},
                                            {type: 'Access-Control-Allow-Methods',
                                             value: 'PUT, POST, PATCH, OPTIONS, GET, DELETE'}]) {
        super(express());
        this.getApp().use(bodyParser.json({limit: '100mb'}));
        this.getApp().use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));
        this.getApp().use((request, response, next) => {
            headers.forEach((value) => {
                response.header(value.type, value.value);
            });
            next();
        });
    }
    public setPort(port: string): this {
        this.port = port;
        return this;
    }
    public listen(): void {
        this.getApp().listen(this.port, () => {
            console.info("Listening on port " + this.port);
        });
    }
}
