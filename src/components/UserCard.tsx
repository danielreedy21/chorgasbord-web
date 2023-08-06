import Link from 'next/link'

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
            <img 
                src={image ?? '/profile-icon'} 
                alt={altMesg}
            />
            <div>
                <h3>
                    <Link href={idLink}>{name}</Link>
                </h3>
            </div>
        </div>
    );
}
