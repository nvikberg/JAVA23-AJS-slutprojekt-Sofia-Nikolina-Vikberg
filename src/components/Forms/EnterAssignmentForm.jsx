import { useState } from "react";
import { assignmentRef } from "../../utils/firebaseConfig";
import { update, push } from "firebase/database";
import HeroesCard from "../SuperHeroes/HeroesCard";

function EnterAssignmentForm() {

    let [input, setInput] = useState('')
    const [status, setStatus] = useState('To Do');
    const [category, setCategory] = useState('');
    const [assigned, setAssigned] = useState('');
    // const [hero, setHero] = useState('');


    const Elektra = {
        imgUrl: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/238-elektra.jpg"
    }
    const BatGirl = {
        imgUrl: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/63-batgirl.jpg"
    }
    const WonderWoman = {
        imgUrl: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"
    }


    function handleSubmit(event) {
        event.preventDefault()

        const newAssignment = {}
        const newKey = push(assignmentRef).key

        newAssignment[newKey] = {
            assigned: assigned,
            assignment: input,
            category: category,
            status: status
        }

        update(assignmentRef, newAssignment)
            .then(() => {
                console.log(`Assignment: " ${input} " was added to task board`)
                setInput('')
                setCategory('')
            })
            .catch((error) => {
                console.error('Assignment was not added', error)
            })
    }

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleCategory(event) {
        event.preventDefault()
        // const selectedCategory = event.target.value;
        // setCategory(selectedCategory);
        setCategory(event.target.value)



        // switch (selectedCategory) {
        //     case "Elektra":
        //         setHero(Elektra);
        //         break;
        //     case "BatGirl":
        //         setHero(BatGirl);
        //         break;
        //     case "WonderWoman":
        //         setHero(WonderWoman);
        //         break;
        //     default:
        //         setHero('');

        //         break;
        // }
    }

    return (
        <>
        <div className="heroes">
            <HeroesCard superHero={Elektra}/>
        <HeroesCard superHero={BatGirl}/>
        <HeroesCard superHero={WonderWoman}/>
            </div>
        
            <form onSubmit={handleSubmit} className="flex flex-row items-center gap-3">
                <input
                    className="border rounded px-2"
                    type="text"
                    placeholder="enter assignment"
                    value={input}
                    onChange={handleChange} required />
                <select id="select" name="Choose Team"
                    value={category}
                    onChange={handleCategory} required>
                    <option value="">--Choose Team--</option>
                    <option value="Elektra">Elektra</option>
                    <option value="BatGirl">Bat Girl</option>
                    <option value="WonderWoman">Wonder Woman</option>
                </select>
                <button className="button-56">Add</button>
            </form>
            {/* <HeroesCard superHero={hero} />  */}
            

        </>
    )
}

export default EnterAssignmentForm;

// option={(event) => setCategory(event.target.value)}>