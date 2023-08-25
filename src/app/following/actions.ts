"use server";

import { revalidatePath } from 'next/cache'

export async function revalidateFollowingPage() {
    revalidatePath('/following')
}