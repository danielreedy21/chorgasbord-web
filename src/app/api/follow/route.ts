import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '../../../lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'
import { revalidatePath } from 'next/cache'




export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    const targetUserId = req.nextUrl.searchParams.get('targetUserId')

    // TODO: add correct error here
    if (!userId || !targetUserId){
        return
    }

    const isFollowing = await prisma.follows.findFirst({
        where: { followerId: userId, followingId: targetUserId },
    });
    
    return NextResponse.json(!!isFollowing)
}


export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    const {targetUserId} = await req.json();
    // TODO: add correct error here
    if (!userId) {
        return
    }

    const record = await prisma.follows.create({
        data: {
            followerId: userId,
            followingId: targetUserId
        }
    })

    return NextResponse.json(record)
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    const targetUserId = req.nextUrl.searchParams.get('targetUserId')
    // TODO: return correct error here
    if (!userId || !targetUserId) {
        return
    }


    const record = await prisma.follows.delete({
        where: {
            followerId_followingId: {
                followerId: userId,
                followingId: targetUserId
            }
        }
    })

    return NextResponse.json(record)
}