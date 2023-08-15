
interface Props {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    frequency: number;
}

export default function ChoreSquare( props: Props) {
    const title = props.title;
    return (
        <div
            className= "bg-slate-50  text-black h-32 max-h-32"
        >{title}</div>
    );
}
