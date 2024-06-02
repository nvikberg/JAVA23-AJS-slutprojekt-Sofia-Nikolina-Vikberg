import AssignToForm from "../Forms/AssignToForm";
import HeroesCard from "../SuperHeroes/HeroesCard";


function Cards({assignmentId}) {


    return (
        <div className="todoAssignments">
            <h1>{assignmentId.status}</h1>
            <h4>Assignment: {assignmentId.assignment}</h4>
            <p>Assigned to: {assignmentId.assigned}</p>
            <p>Team: {assignmentId.category}</p>
            <AssignToForm assignmentId={assignmentId.key} />
        </div>
    );
}

export default Cards;