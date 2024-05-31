import { assignmentRef, db } from "../../utils/firebaseConfig";
import { update, ref, set, getDatabase, child } from "firebase/database";
import { useState } from "react";
import Error from "../Error";

function AssignToForm({ assignmentId }) {

    let assignedText = '';
    let status = 'In Progress';
    const [error, setError] = useState(false);


    function handleText(event) {
        assignedText = (event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();


        const currentAssignment = child(assignmentRef, assignmentId)
        // console.log(assignmentId)

        await update(currentAssignment, {
            assigned: assignedText,
            status: status
        })
            .then(() => {
                console.log('Assignment was assigned to hero')
                // console.log(assignedText, status, assignmentId)
                setError(false)
            })
            .catch((error) => {
                console.log('Nope, she didnt want that assignment', error)
                setError(true)


            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Assign to.."
                    onSelect={handleText} required />
                <button className="button-56" type="submit">Assign</button>
            </form>
            {error && <Error errorMessage="Nope, she didnt want that assignment, try again" />}
        </div>
    );
}

export default AssignToForm;
