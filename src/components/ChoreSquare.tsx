import DeleteChore from '../components/DeleteChore'

interface Props {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    frequency: number;
}

export default function ChoreSquare( props: Props) {
    const title = props.title;
    const description = props.description;
    const createdAt = props.createdAt;
    const updatedAt = props.updatedAt;
    const frequency = props.frequency;
    return (
        <div
            className= "bg-slate-50  text-black h-72"
        >
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
            <p>{frequency}</p>
            <DeleteChore title={title}></DeleteChore>
        </div>
    );
}
