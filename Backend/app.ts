import {VServer} from "./lib/VServer/vserver";
import {indexRoute} from "./routes/Home";

const server: VServer = new VServer();

server.addSubApp(indexRoute);

server.listen();