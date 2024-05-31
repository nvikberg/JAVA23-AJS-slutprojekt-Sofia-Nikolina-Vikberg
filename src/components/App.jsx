import { assignmentRef, db } from "../utils/firebaseConfig.js"
import { onValue } from "firebase/database";
import { useState, useEffect } from "react";
import EnterAssignmentForm from "./Forms/EnterAssignmentForm.jsx";
import ToDoCards from "./Cards/ToDoCards.jsx";
import InProgressCards from "./Cards/InProgressCards.jsx";
import DoneCards from "./Cards/DoneCards.jsx";
import Error from "./Error.jsx";
import SuperHeroes from "./SuperHeroes/HeroImage.jsx";
import HeroesCard from "./SuperHeroes/HeroesCard.jsx";
// import HeroImage from "./HeroImage.jsx";

//kvar att göra: Visa taskMessage i GUI när assignment har blivit tillagd
//


export function App() {

    //assignmentList kommer hålla listan från firebase som en array
    const [assignmentsList, setAssignmentsList] = useState([]);
    const [error, setError] = useState(false);



    useEffect(() => { //används för att fetcha datan
        onValue(assignmentRef, snapshot => { //onValue lyssnar efter förändringarna i databasen
            const assignmentData = snapshot.val();
            const assignmentArray = []

            if (snapshot.exists()) {

                for (const key in assignmentData) {
                    assignmentArray.push({
                        ...assignmentData[key], key //klonar listan till en ny array
                    })
                }
                setError(false)
            } else {
                setError(true)
            }

            setAssignmentsList(assignmentArray)

        })

    }, [])

    //kollar statusen och pushar den till tomma arrayerna
    const todoAssignments = [];
    const inProgressAssignments = [];
    const doneAssignments = [];


    assignmentsList.forEach(assignment => {
        switch (assignment.status) {
            case 'To Do':
                todoAssignments.push(assignment);

                break;
            case 'In Progress':
                inProgressAssignments.push(assignment);
                break;
            case 'Done':
                doneAssignments.push(assignment);
                break;
            default:
                break;
        }
    });

    return (
        <>
            <div className="AppContainer">

                <div>
                    <h1>SuperHeroes TaskBoard</h1>
                    <EnterAssignmentForm assignmentsList={assignmentsList} setAssignmentsList={setAssignmentsList} />
                </div>

                {error && <Error errorMessage="Heroes you can rest, no assignments for right now.. " />}

                <div className="assignmentsContainer">
                
                    <div>
                        {todoAssignments.map((assignmentId) => (
                            <ToDoCards key={assignmentId.key} assignmentId={assignmentId} />
                        ))}
                    </div>

                    <div>
                        {inProgressAssignments.map((assignmentId) => (
                            <InProgressCards key={assignmentId.key} assignmentId={assignmentId} />
                        ))}
                    </div>

                    <div>
                        {doneAssignments.map((assignmentId) => (
                            <DoneCards key={assignmentId.key} assignmentId={assignmentId} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


}


// {status === 'todo' && <ToDoCards/>}
// {status === 'inProgress' && <InProgressCards/>}
// {status === 'done' && <DoneCards/>}


