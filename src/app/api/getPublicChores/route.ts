import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
    const chores = await prisma.chore.findMany({
        where: {
            public: {
                equals: true,
            },
        },
    })
    return NextResponse.json(chores)
}