import { FaTimes} from 'react-icons/fa';


const Task = ({task, onDelete, onToggle}) => {
/*    const stylesTrue = {
        backgroundColor: 'green'
    }
        const stylesFalse = {
            backgroundColor: 'red'
        }*/

    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style = {{cursor: 'pointer'}} onClick={ () => onDelete(task.id)}/> </h3>
            <p>{task.day}</p>
        </div>

    )
};

export default Task