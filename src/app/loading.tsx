import Spinner from '../components/Spinner'


export default function Loading(){
    return (
        <div className="min-h-screen mt-16 flex justify-center">
            <Spinner></Spinner>
        </div>
    );
}