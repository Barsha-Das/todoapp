import http from "http"

// http.createServer(
//     function (req, res) {
//         res.write("Api is running....")
//         res.end()
//     }
// ).listen(8080);

// http.createServer(
//     function (req, res) {
//         res.writeHead(
//             200,
//             {
//                 "content-type": "text/html",
//             }
//         ),
//             res.write("we are back with content type")
//         res.end()
//     }
// ).listen(8080);


// http.createServer(
//     function (req, res) {
        
//             res.write(req.url)
//         res.end()
//         console.log(req.url)
//     }
// ).listen(8080);


import express, {Request, Response} from "express"
import { router } from "./routes/routes";
//import { mongoDbConnection } from "./database/data";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express()

// app.get("/", (req: Request, res: Response) => {
//     res.send("api is running")
// })
// app.listen(8080, () => {
//     console.log("server is running at 8080")
// })

// app.get("/", (req: Request, res: Response) => {
//     const data = req.url;
//     res.status(200).json({
//         //"message" : "api is running"
//         "message": data
//     });
// });

// app.get("/about", (req: Request, res: Response) => {
//     const data = req.url;
//     res.status(200).json({
//         //"message" : "api is running"
//         "message": data
//     });
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json);
mongoose.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    } as ConnectOptions,
    () => {
        console.log("Db connected!!!"); 
    },
)
app.use("/", router);


app.listen(8080, () => {
    console.log("server is running at 8080") 
    
}) 