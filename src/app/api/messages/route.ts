// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { Clients } from "../../../../mongodb";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
    message: string
}

export const GET = async () => {
    return NextResponse.json({ message: "Server is up!" });
}

export const POST = async (
    req: NextRequest,
    res: NextResponse<ResponseData>
) => {
    try {
        const postBody = await req.json();
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
            return NextResponse.json({ message: "Message has been sent." });
        } else {
            return NextResponse.json({ message: "Something went wrong." });
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong. Please try again later." });
    }
}
