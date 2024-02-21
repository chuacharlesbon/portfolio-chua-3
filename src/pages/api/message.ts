// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { Clients } from "../../../mongodb";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS, PATCH, DELETE, POST, PUT");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization");
    const postBody = req.body;
    try {
        if (postBody) {
            const newDate = new Date();
            const db = await Clients.connectToMongoDBS1();
            await db.collection('messages').insertOne({
                referrer: postBody.referrer ?? "N/A",
                senderName: postBody.senderName,
                email: postBody.email,
                message: postBody.message,
                fromApp: postBody.fromApp,
                createdAt: newDate.toISOString()
            });
            res.status(200).json({ message: "Message has been sent." });
        } else {
            res.status(400).json({ message: "Something went wrong." });
        }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong. Please try again later." });
    }
}
