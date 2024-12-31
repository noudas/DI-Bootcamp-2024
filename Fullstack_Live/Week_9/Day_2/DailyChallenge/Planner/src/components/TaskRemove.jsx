import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/action';

const TaskRemove = (props) =>{
    const dispatch = useDispatch();

    return(
        <>
        <button onClick={() => dispatch(removeTask(props.id))}> X </button>
        </>
    )
}

export default TaskRemove;