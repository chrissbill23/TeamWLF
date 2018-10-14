import {VServer} from "./lib/VServer/vserver";
import {indexRoute} from "./routes/Home";

const server: VServer = new VServer();

server.addSubApp(indexRoute);
server.addMiddle((req, res) => {
    res.status(404)
        .json({
            message: 'Data not found',
        });
    res.send();
})
server.listen();