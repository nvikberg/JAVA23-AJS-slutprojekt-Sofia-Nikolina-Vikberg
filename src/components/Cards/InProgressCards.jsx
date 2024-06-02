import { assignmentRef, db } from "../../utils/firebaseConfig";
import { update, child, ref } from "firebase/database";
import { useState } from "react";

function InProgressCards({ assignmentId }) {

    let status = 'Done';
    const [error, setError] = useState(false);



    async function handleButton(event) {
        event.preventDefault();

        const currentAssignment = child(assignmentRef, assignmentId.key);

        await update(currentAssignment, {
            status: status
        })
            .then(() => {
                console.log('Good Job! Assignment is done!')
                setError(false)
            })
            .catch((error) => {
                console.log('Status was not changed to done', error)
                setError(true)

            });
    }

    return (
        <div className="inProgressAssignments">
            <h1>{assignmentId.status}</h1>
            <h4>Assignement: {assignmentId.assignment}</h4>
            <p>Assigned to: {assignmentId.assigned}</p>
            <p>Team: {assignmentId.category}</p>
            <button className="button-56" onClick={handleButton}>Done</button>
       <div>
       {error && <Error errorMessage="Hero did not complete assignment yet, status is not changed to Done" />}

       </div>
        </div>
    )
}

export default InProgressCards;