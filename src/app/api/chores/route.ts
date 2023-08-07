import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]/route"

// Creating a single chore
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId){
        console.log("user has no ID")
        return
    }

    console.log(userId)
    const data = await request.json()
    console.log(data)

    const chore = await prisma.chore.create({
        data: {
            userId: userId,
            title: data.title,
            description: data.description,
            created_at: data.created_at,
            updated_at: data.updated_at,
            frequency: data.frequency,
            public: data.public
        }
    });
    return NextResponse.json(chore)
}



export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    
    const data = await request.json()
}