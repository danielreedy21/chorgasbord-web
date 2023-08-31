import Link from 'next/link'
import FollowButtonClient from '../components/FollowButtonClient'
import Image from "next/image"

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({id, name, age, image}: Props) {
    const idLink = 'users/' + id
    const altMesg = name + "'s profile"
    return (
        <div> 
            <div className="relative w-16 h-16">
                <Image
                    width={300}
                    height={300}
                    src={image ?? '/profile-icon'} 
                    alt={altMesg}
                    className="rounded-full border border-gray-400 shadow-sm"
                />
            </div>
            <h3>
                <Link href={idLink}>{name}</Link>
            </h3>
            {/* <FollowButton targetUserId={id}></FollowButton> */}
        </div>
    );
}
