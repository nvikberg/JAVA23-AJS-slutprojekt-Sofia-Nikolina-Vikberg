import { useState } from "react";
import { assignmentRef } from "../../utils/firebaseConfig";
import { remove, child } from "firebase/database";


function DoneCards({ assignmentId }) {

    const [error, setError] = useState(false);

  async function handleRemove(event) {
        event.preventDefault();

        const currentAssignment = child(assignmentRef, assignmentId.key)

       await remove(currentAssignment)
            .then(() => {
                console.log('Assigment was removed')
                setError(false)
            })
            .catch((error) => {
                setError(true)
                console.log('Assignment was not removed', error)
            });
    }

    return (
        <div>
        {error && <Error errorMessage="Assignment was not removed " />}

        <div className="doneAssignments">
            <h1>{assignmentId.status}</h1>
            <h4>Assignement: {assignmentId.assignment}</h4>
            <p>Assigned to: {assignmentId.assigned}</p>
            <p>Team: {assignmentId.category}</p>
            <button className="button-56" onClick={handleRemove}>Remove</button>
        
        </div>
        </div>

    );
}

export default DoneCards;
