import { useDispatch } from 'react-redux';
import { remove_task } from '../redux/taskSlice';

const TaskRemove = (props) =>{
    const dispatch = useDispatch();

    return(
        <>
        <button onClick={() => dispatch(remove_task(props.id))}> X </button>
        </>
    )
}

export default TaskRemove;