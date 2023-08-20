import DeleteChore from '../components/DeleteChore'
import DidChore from '../components/DidChore'

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

    const timeNow = new Date().getTime();
    const sinceUpdate = timeNow - new Date(updatedAt).getTime();

    const percentLeft = (((frequency - sinceUpdate) / frequency) * 100).toFixed(2);


    return (
        <div
            className= "bg-slate-50  text-black h-72"
        >
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
            <p>{frequency}</p>
            <p>{sinceUpdate}</p>
            <p>Percent: %{percentLeft}</p>
            <div className="flex flex-col">
                <DidChore title={title}></DidChore>
                <DeleteChore title={title}></DeleteChore>
            </div>
        </div>
    );
}
