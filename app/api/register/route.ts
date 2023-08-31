import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// Register user.
export async function POST(request: Request) {
    try{
    const data = await request.json();
    const {name, email, password} = data;

    if(!email || !name || !password){
        return new NextResponse('Kindly fill the required details', {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    })

    return NextResponse.json(user);
}catch(error: any){
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse('Internal Error', {status: 500})
}
}