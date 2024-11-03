import React, { useState } from "react";

function PigForm({ addForm }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [specialty, setSpeciality] = useState("");
    const [weight, setWeight] = useState("");
    const [greased, setGreased] = useState(false);
    const [medal, setMedal] = useState("diamond"); 

    function submitForm(e) {
        e.preventDefault();

        const formData = {
            name,
            specialty,
            greased,
            weight: parseFloat(weight), 
            "highest medal achieved": medal,
            image
        };
   //console.log(formData)
        addForm(formData);
      
        
       //reset form
        setName("");
        setImage("");
        setSpeciality("");
        setWeight("");
        setGreased(false);
        setMedal("diamond");
    }

    return (
        <>
        <div style={{backgroundColor:"rgb(190, 255, 233)"}}>
            <h2>Add New Hog</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="image">Image:</label>
                <input 
                    id="image"
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                <label htmlFor="specialty">Speciality</label>
                <input 
                    id="specialty"
                    value={specialty} 
                    onChange={(e) => setSpeciality(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="weight">Weight:</label>
                <input 
                    id="weight"
                    type="number"
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />

                <label htmlFor="greased">Greased?</label>
                <input 
                    id="greased"
                    type="checkbox" 
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />

                <label htmlFor="medal">Highest medal achieved?</label>
                <select id="medal" value={medal} onChange={(e) => setMedal(e.target.value)}>
                    <option value="diamond">Diamond</option>
                    <option value="platinum">Platinum</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                    <option value="wood">Wood</option>
                </select>

                <button type="submit">Add Hog</button>
            </form>
            </div>
        </>
    );
}

export default PigForm;