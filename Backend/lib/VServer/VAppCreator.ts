import * as express from "express";
export abstract class VAppCreator {
    private app: express;

    protected constructor(app: express) {
        this.app =  app;
    }
    protected getApp(): express {
       return this.app;
    }
    public addSubApp(apcr: VAppCreator): this {
        this.app.use(apcr.getApp());
        return this;
    }
    public addMiddle(operation: (req, resp, next) => void, path?: string): this {
        if (typeof path !== 'string') {
            this.app.use((req, res, next) => operation(req, res, next));
        } else {
            this.app.use(path, (req, res, next) => operation(req, res, next));
        }
        return this;
    }
}
