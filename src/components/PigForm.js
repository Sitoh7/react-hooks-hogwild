import React,{useState} from "react";

function PigForm({addForm}){

    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [specialty,setSpeciality] = useState("")
    const [weight,setWeight] = useState("")
    const [greased,setGreased] = useState(false)
    const [medal,setMedal] = useState("")
    const [formObj,setFormObj] = useState("")


    function submitForm(e){
        e.preventDefault()

        setFormObj( formObj => formObj={
            name : name,
            specialty: specialty,
            greased : greased,
            weight: weight,
            "highest medal achieved": medal,
            image: image,
            medal: medal
        })
        
    }
    React.useEffect(() => {
        console.log(formObj);
    }, [formObj]); // Runs every time formObj changes



    return(
        <>
        <h2>Add New Hog</h2>
       <form onSubmit={submitForm}>
        <label>Name:</label>
        <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Image:</label>
        <input value={image} onChange={(e)=>setImage(e.target.value)}></input>
        <label>Speciality</label>
        <input  value={specialty} onChange={(e)=>setSpeciality(e.target.value)}></input><br></br>
        <label>Weight:</label>
        <input  value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
        <label>Greased?</label>
        <input type="checkbox"  value={greased} onChange={(e)=>setGreased(e.target.checked)}></input>
        <label>Highest medal achieved?</label>
        <select name="medal" onChange={(e)=>setMedal(e.target.value)}>
        <option value="Diamond">Diamond</option>
            <option value="Platnium">Platnium</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
            <option value="wood">Wood</option>
        </select>
        <button type="submit">Add Pig</button>
       </form>
        </>
    )
}

export default PigForm