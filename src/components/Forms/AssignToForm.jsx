import { assignmentRef, db } from "../../utils/firebaseConfig";
import { update, ref, set, getDatabase, child } from "firebase/database";
import { useState } from "react";
import Error from "../Error";

//This "Assign To" form is located on the "To Do Card" and it updates 2 items in the database - 
//1. the status to "In progress" 2. "Assigned to" (text input from this form from the user)
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

        await update(currentAssignment, {
            assigned: assignedText,
            status: status
        })
            .then(() => {
                console.log('Assignment was assigned to hero')
                setError(false)
            })
            .catch((error) => {
                console.log('Nope, she didnt want that assignment', error)
                alert('Nope, she didnt want that assignment', error)
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
