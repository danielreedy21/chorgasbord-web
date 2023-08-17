"use server";

import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache'
import { authOptions } from '../api/auth/[...nextauth]/route';


export async function deleteChore(title: string) {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId) {
        return 
    }
    const record = await prisma.chore.delete({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        }
    });
    revalidatePath('/myboard')
    
}

export async function didChore(title: string) {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    const currTime = new Date()
    if (!userId) {
        return
    }
    const record = await prisma.chore.update({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        },
        data: {
            updated_at: currTime.toISOString()
        }
    })
    revalidatePath('/myboard')
}