import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import FollowButtonClient from '../../../components/FollowButtonClient'
import ChoreBoard from '../../../components/ChoreBoard'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import ScrollToTop from "../../../components/ScrollToTop"
import Image from "next/image"

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
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    const { name, bio, image, id } = user ?? {};
    const targetUserId = id;
    if (!targetUserId) {
        return <></>
    }
    
    const isFollowing = (!userId) ? false : await prisma.follows.findFirst({
        where: { followerId: userId, followingId: targetUserId},
    });
    // console.log(!!isFollowing)

    return (
        <main className="min-h-screen mt-16 flex flex-col content-center w-72 mx-auto my-20
                        lg:w-256 md:w-128">
            <ScrollToTop></ScrollToTop>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <h1 className="text-3xl mb-2">{name}</h1>
                    <div className="relative w-24 h-24">
                        <Image
                            width={300}
                            height={300}
                            src={image ?? '/profile-icon.jpeg'}
                            alt={`${name}'s profile`}
                            className="rounded-full border border-gray-400 shadow-sm"
                        />
                    </div>
                </div>

                {(!userId || userId==targetUserId) ? <></> :
                    <FollowButtonClient targetUserId={params.id} isFollowing={!!isFollowing}></FollowButtonClient>
                }
            </div>
  
            {bio ? 
            <div className="mt-4">
                <h3>Bio</h3>
                <p>{bio}</p>
            </div>
            :
            <div></div>
            }

            <h3 className="text-2xl my-4">{name + "'" + "s Public Board"}</h3>
            
            
            {targetUserId=="clkx1kqhz000060ymd6yuy0zj" ? 
                // @ts-ignore Server Component
                <ChoreBoard userId={targetUserId} ></ChoreBoard>
            :
                <p>{"After user feedback, Public Boards (other than Daniel" + "'" + "s) are currently under reconsideration."}</p>
            }
  
        </main>
    );
}