import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
    params: {
        id: string;
    };
}
  
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    const { name, bio, image, id } = user ?? {};

    return (
        <main className="mt-16 grid grid-flow-row place-content-center">
            <h1 className="text-3xl">{name}</h1>
  
            <div className="relative w-24 h-24">
                <img
                    width={300}
                    src={image ?? '/profile-icon.jpeg'}
                    alt={`${name}'s profile`}
                    className="rounded-full border border-gray-400 shadow-sm"
                />
            </div>
  
            <h3>Bio</h3>
            <p>{bio}</p>
  
        </main>
    );
}