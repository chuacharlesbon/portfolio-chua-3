// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { Clients } from "../../../../mongodb";
import { NextResponse } from "next/server";

type ResponseData = {
    message: string
}

export const POST = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    try {
        const { referrer, senderName, email, message, fromApp } = req.body;
        if (email) {
            const newDate = new Date();
            const db = await Clients.connectToMongoDBS1();
            await db.collection('messages').insertOne({
                referrer: referrer ?? "N/A",
                senderName: senderName,
                email: email,
                message: message,
                fromApp: fromApp,
                createdAt: newDate.toISOString()
            });
            return NextResponse.json({ message: "Message has been sent." });
        } else {
            return NextResponse.json({ message: "Something went wrong." });
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong. Please try again later." });
    }
}

export const GET = async () => {
    return NextResponse.json({ message: "Server is up!" });
}
