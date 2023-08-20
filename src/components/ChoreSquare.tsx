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


    // calculate percent until chore is due
    const timeNow = new Date().getTime();
    const sinceUpdate = timeNow - new Date(updatedAt).getTime();
    const percentLeft = Number((((frequency - sinceUpdate) / frequency) * 100).toFixed(2));


    function getColor(percentLeft: number) {
        
        if (percentLeft > 90.0) {
            return "bg-gradient-0"
        } else if (percentLeft > 80.0) {
            return "bg-gradient-1"
        } else if (percentLeft > 70.0) {
            return "bg-gradient-2"
        } else if (percentLeft > 60.0) {
            return "bg-gradient-3"
        } else if (percentLeft > 50.0) {
            return "bg-gradient-4"
        } else if (percentLeft > 40.0) {
            return "bg-gradient-5"
        } else if (percentLeft > 30.0) {
            return "bg-gradient-6"
        } else if (percentLeft > 20.0) {
            return "bg-gradient-7"
        } else if (percentLeft > 10.0) {
            return "bg-gradient-8"
        } else {
            return "bg-gradient-9"
        }
    }

    function millToTime(milliseconds: number) {

    }


    return (
        <div
            className= {getColor(percentLeft) + " text-black h-72 rounded-md shadow-lg group"}
        >
            <h4 className="text-3xl">{title}</h4>
            <p>{description}</p>
            {/* <p>{createdAt}</p> */}
            {/* <p>{updatedAt}</p>
            <p>{frequency}</p> */}
            {/* <p>{sinceUpdate}</p> */}
            <p>Percent: %{percentLeft}</p>
            <div className="mt-32 flex flex-row justify-evenly content-end ">
                <DidChore title={title}></DidChore>
                <DeleteChore title={title}></DeleteChore>
            </div>
        </div>
    );
}
