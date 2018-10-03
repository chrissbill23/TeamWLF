import * as express from "express";
import {Request, Response} from "express";
import {VAppCreator} from "./VAppCreator";

export class VRouter extends VAppCreator {
    public constructor() {
        super(express());
    }
    public addGetRoute(path: string, handler: (req: Request, resp: Response) => void): this {
        this.getApp().get(path, (req, res) => handler(req, res));
        return this;
    }
    public addPostRoute(path: string, handler: (req: Request, resp: Response) => void): this {
        this.getApp().post(path, (req, res) => handler(req, res));
        return this;
    }
    public addPutRoute(path: string, handler: (req: Request, resp: Response) => void): this {
        this.getApp().put(path, (req, res) => handler(req, res));
        return this;
    }
    public addDeleteRoute(path: string, handler: (req: Request, resp: Response) => void): this {
        this.getApp().delete(path, (req, res) => handler(req, res));
        return this;
    }
}
