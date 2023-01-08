import express, { Request, Response } from "express"

import { Router } from "express";
import { TodoI } from "../models/user_model";

const router = express.Router()
// router.get("/", (req: Request, res: Response) => {
//     res.json({
//         "message": "api running",
//     })
// })

// router.get("/about", (req: Request, res: Response) => {
//     res.json({
//        "message" : "api running in about",
//    })
// })

// router.get("/profile", (req: Request, res: Response) => {
//     res.json({
//        "message" : "api running in profile",
//    })
// })
// router.post("/", (req: Request, res: Response) => {
//     const data = req.body;
//     console.log(data);

//     res.json({
//         message : data
//     })
// })


// export { router };

router.post("/add", async (req: Request, res: Response) => {
    const { name } = req.body;

    const dataItem = TodoI.set({ name });

    await dataItem.save();

    return res.status(200).json({
        data: dataItem,
    });
});
// get request 
router.get("/", async (req: Request, res: Response) => {
    try {
        const dataItem = await TodoI.find({});
        res.status(200).json({
            data: dataItem,
        });
    }
    catch (error) {
        console.log(error);
    }
});

//delete request
router.delete("/delete", async (req: Request, res: Response) => {
    try {
        const filter = {
            "name": req.body.name
        };
        const dataItem = await TodoI.deleteOne(filter).then((data) => res.json({
            data: data,
        })).catch((error) => {
            return res.send(error);
        });
    }
    catch (error) {
        console.log(error);
    }
});

router.delete("/upload", async (req: Request, res: Response) => {
    try {
        const filter = {
            "name": req.body.name
        };
        const updateData = {
            "name": req.body.name,
        }
        const dataItem = await TodoI.updateOne(filter, {
            new : true,
        }).then((data) => res.json({
            data: data,
        })).catch((error) => {
            return res.send(error);
        });
    }
    catch (error) {
        console.log(error);
    }
});

export { router };